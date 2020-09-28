<template>
  <div class="ma-1 pa-5" justify="center" align="center">
  <br>
    <v-card width="1300" height="auto" outlined>
    <br>
      <h2>날짜 별 많이 본 증권 뉴스</h2>
      <v-container>
        <v-row justify="end">
          <!-- <h4><br>날짜 선택 : </h4> -->
          <v-col cols="12" sm="6" md="2">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="날짜 선택"
                  prepend-icon="mdi-calendar-edit"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  color="orange"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
                min="2019-01-01"
                color="orange"
                @change="checkDates"
              >
                <v-spacer></v-spacer>
                <v-btn text color="error" @click="$refs.menu.save(date)">Cancel</v-btn>
                <v-btn text color="primary" @click="requestPy" @closed="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-data-table
          id="tableBorder"
          flat
          :headers="headers"
          :items="NewsData"
          :items-per-page="10"
        >
        </v-data-table>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'NewsListForm',
  data () {
    return {
      NewsData: [],
      menu: false,
      date: new Date().toISOString().substr(0, 10),
      dateval: '',
      headers: [
        { text: 'No', align: 'center', value: 'NewsNo', sortable: true },
        { text: '제목', align: 'center', value: 'Title', sortable: true },
        { text: '언론사', align: 'center', value: 'Press', sortable: true }
      ]
    }
  },
  mounted () {
    const init = this.date.replace(/-/g, '')
    axios.get(`http://localhost:5000/newsList?formatDate=${init}`)
      .then((res) => {
        // console.log(res)
        this.NewsData = res.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  computed: {
  },
  methods: {
    checkDates (pickDate) {
      const today = new Date()
      const year = today.getFullYear()
      const month = today.getMonth() + 1
      const day = today.getDate()

      const currentDate = year + '-' + month + '-' + day
      const formatDate = String(this.date).replace(/-/g, '')

      console.log('currentDate : ', currentDate) // 2020-11-11 -> 20201111
      console.log('formatDate : ', formatDate)
      console.log('pickDate : ', pickDate)

      this.dateval = String(pickDate).replace(/-/g, '')
      console.log('dateval : ', this.dateval)
    },
    requestPy () {
      console.log('Actions Request Python()')
      axios.get(`http://localhost:5000/newsList?formatDate=${this.dateval}`).then(res => {
        this.NewsData = res.data
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

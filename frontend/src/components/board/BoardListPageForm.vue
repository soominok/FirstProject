<template>
  <v-main>
    <div class="ma-1 pa-5" justify="center" align="center">
    <br>
      <v-card width="1300" height="600" outlined>
      <br>
        <h3>Board List</h3>
        <v-container>
          <v-data-table
            id="tableBorder"
            flat
            @click:row="readData"
            :search="search"
            :headers="headers"
            :items="paginatedData"
            :loading="loading"
            hide-default-footer
          >
          </v-data-table>
          <br>
          <v-toolbar
            flat
            color="white"
            class="mb-1"
          >
            <v-col sm="3">
              <v-row height="3">
                <v-text-field
                  v-model="search"
                  clearable
                  color="teal"
                  flat
                  solo
                  outlined
                  hide-details
                  label="Search"
                  append-icon="mdi-magnify"
                ></v-text-field>
              </v-row>
            </v-col>
            <!-- <v-spacer></v-spacer> -->
            <v-btn @click="$router.push({ name: 'BoardRegisterPage' })"
              title outlined color="teal"
              class="ma-2 white--text" height="55">
              <v-icon center>mdi-pencil</v-icon></v-btn>
            <v-spacer></v-spacer>
            <div align="center" justify="center">
              <v-btn
                fab
                color="teal"
                class="mr-5 white--text"
                @click="formerPage"
                small
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <span
                class="mr-4 teal--text"
              >
                Page {{ pageNum + 1 }} of {{ pageCount }}
              </span>
              <v-btn
                fab
                dark
                color="teal"
                class="ml-1 white--text"
                @click="nextPage"
                small
              >
                <v-icon fab dark>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-toolbar>
        </v-container>
      </v-card>
    </div>
  </v-main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BoardListPageForm',
  data () {
    return {
      pageArray: [],
      pageNum: 0,
      search: '',
      filter: {},
      boardLists: [],
      headers: [
        { text: 'No.', align: 'center', value: 'boardNo', sortable: true },
        { text: '제목', align: 'center', value: 'title', sortable: true },
        { text: '작성자', align: 'center', value: 'writer', sortable: false }
      ],
      loading: false
    }
  },
  props: {
    listArray: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: true,
      default: 8
    }
  },
  created () {
    axios.get('http://localhost:5555/boards')
      .then(res => {
        console.log(res)
        this.pageArray = res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    pageCount () {
      const listLen = this.listArray.length
      const listSize = this.pageSize

      let page = Math.floor(listLen / listSize)
      if (listLen % listSize > 0) {
        page += 1
      }

      return page
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
      return this.listArray.slice(start, end)
    }
  },
  methods: {
    nextPage () {
      if (this.pageNum + 1 <= this.pageCount) this.pageNum += 1
    },
    formerPage () {
      this.pageNum -= 1
    },
    readData (item) {
      this.$router.push({ name: 'BoardReadPage', params: { boardNo: item.boardNo } })
    }
  }
}
</script>

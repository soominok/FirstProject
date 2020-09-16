<template>
  <v-main>
    <board-list-page-form :list-array="pageArray"/>
  </v-main>
</template>

<script>
/* eslint-disable no-unused-vars */
import axios from 'axios'
/* eslint-disable no-unused-vars */
import BoardListPageForm from '@/components/board/BoardListPageForm.vue'
import { mapActions } from 'vuex'

export default {
  name: 'BoardListPage',
  data () {
    return {
      pageArray: [],
      page: 1
    }
  },
  components: {
    BoardListPageForm
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
  }
}
</script>

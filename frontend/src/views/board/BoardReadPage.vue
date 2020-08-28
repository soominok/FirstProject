<template>
  <v-main>
    <div align="center">
      <!-- mapping 해주기 -->
      <board-read v-if="board" :board="board"/>
      <!-- 내용을 가져오지 못했을 경우 표기해주기 -->
      <p v-else>Loading ...</p>
      <div class="center">
      <br>
        <v-btn @click="$router.push({ name: 'BoardModifyPage', params: { boardNo } })" class="teal lighten-2">Edit</v-btn>
        <v-btn @click="onDelete" class="teal lighten-3">Delete</v-btn>
        <v-btn @click="$router.push({ name: 'BoardListPage' })" class="teal lighten-2">List</v-btn>
      </div>
    </div>
  </v-main>
</template>

<script>
import BoardRead from '@/components/board/BoardRead'
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'BoardReadPage',
  props: {
    boardNo: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState([
      'board'
    ])
  },
  created () {
    console.log('BoadReadPage created(): ' + this.boardNo)
    this.fetchBoard(this.boardNo)
      .catch(err => {
        alert(err.response.data.message)
        this.$router.push()
      })
  },
  methods: {
    ...mapActions([
      'fetchBoard'
    ]),
    onDelete () {
      const { boardNo } = this.board
      axios.delete(`http://localhost:5555/boards/${boardNo}`)
        // 처리정보를 res로 받아오기
        .then(res => {
          alert('Delete Success')
          this.$router.push({ name: 'BoardListPage' })
        })
        // boardNo로 내용 가져오는데 문제 발생했을 경우
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  components: {
    BoardRead
  }
}
</script>

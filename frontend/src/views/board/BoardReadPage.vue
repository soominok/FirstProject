<template>
  <v-main>
    <div align="center">
      <!-- mapping 해주기 -->
      <board-read v-if="board" :board="board"/>
      <!-- 내용을 가져오지 못했을 경우 표기해주기 -->
      <p v-else>Loading ...</p>
    </div>
  </v-main>
</template>

<script>
import BoardRead from '@/components/board/BoardRead'
import { mapState, mapActions } from 'vuex'

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
    ])
  },
  components: {
    BoardRead
  }
}
</script>

<template>
  <v-main align="center">
  <br><br>
    <v-card width="1300" height="600" class="mx-auto" outlined>
    <br><br>
      <h2>Board Detailed View</h2><br>
      <v-simple-table class="px-15 mx-15" >
        <div class="mx-auto" style="border-collapse: collapse">
          <tr class="text-center" id="tableBorder">
            <td width="300" height="35" class="blue-grey lighten-4">No</td>
            <td width="700" class="text-left"><input type="text" :value="board.boardNo" style="width: 100%;" readonly></td>
          </tr>

          <tr class="text-center" id="tableBorder">
            <td width="300" height="35" class="blue-grey lighten-4">Title</td>
            <td class="text-left"><input type="text" v-model="board.title" style="width: 100%;" readonly></td>
          </tr>

          <tr class="text-center" id="tableBorder">
            <td width="300" height="35" class="blue-grey lighten-4">Writer</td>
            <td class="text-left"><input type="text" v-model="board.writer" style="width: 100%;" readonly></td>
          </tr>

          <!-- <tr class="text-center" id="tableBorder">
            <td width="300" height="35" class="blue-grey lighten-4">Registration Date</td>
            <td class="text-left"><input type="text" :value="board.regDate" style="width: 100%;" readonly></td>
          </tr> -->

          <tr class="text-center" id="tableBorder">
            <td width="300" height="120" class="blue-grey lighten-4" align="center">Content</td>
            <td class="text-left"><textarea v-model="board.content" rows="5" style="width: 100%;" readonly></textarea></td>
          </tr>
        </div>
      </v-simple-table>
      <div class="center">
      <br>
        <v-btn @click="$router.push({ name: 'BoardModifyPage', params: { boardNo } })"
          title outlined color="primary"
          class="my-5 mx-3"
        >
          <v-icon left>mdi-pencil</v-icon>Edit</v-btn>
        <v-btn @click="onDelete"
          title outlined color="red"
          class="my-5 mx-3">
          <v-icon left>mdi-delete</v-icon>Delete</v-btn>
        <v-btn @click="$router.push({ name: 'BoardListPage' })"
          title outlined color="orange darken-2"
          class="my-5 mx-3"
          >
          <v-icon left>mdi-format-list-bulleted-square</v-icon>List</v-btn>
      </div>
    </v-card>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'BoardRead',
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
  methods: {
    onDelete () {
      const { boardNo } = this.board
      axios.delete(`http://localhost:5555/boards/${boardNo}`)
        // 처리정보를 res로 받아오기
        .then(res => {
          alert('게시물 삭제 성공~!!!')
          this.$router.push({ name: 'BoardListPage' })
        })
        // boardNo로 내용 가져오는데 문제 발생했을 경우
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    console.log('this.boardNo : ' + this.boardNo)
    console.log('route boardNo : ' + this.$route.params.boardNo)
  }
}
</script>

<style>
#tableBorder {
  border-collapse: collapse;
  border: 1px solid #777777;
}
  td {
    padding: 10px;
  }
</style>

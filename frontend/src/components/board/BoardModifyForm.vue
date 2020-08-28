<template>
  <div>
    <h3>Board Modfied Form</h3>
    <form @submit.prevent="onSubmit">
      <table>
        <tr>
          <td>No</td>
          <td><input type="text" :value="board.boardNo" disabled></td>
        </tr>
        <tr>
          <td>Registration Date</td>
          <td><input type="text" :value="board.regDate" disabled></td>
        </tr>
        <tr>
          <td>Title</td>
          <td><input type="text" v-model="title"></td>
        </tr>
        <tr>
          <td>Writer</td>
          <td><input type="text" :value="board.writer" disabled></td>
        </tr>
        <tr>
          <td>Content</td>
          <td><textarea v-model="content" rows="5"></textarea></td>
        </tr>
      </table>

      <div>
        <button type="submit">Modify</button>
        <router-link :to="{ name: 'BoardReadPage', params: { boardNo: board.boardNo.toString() } }">
          Cancel
        </router-link>
      </div>
    </form>

    <!-- 누르면 수정이 완료되게 되는 것 -->
    <!-- <button type="submit">Modification</button> -->
    <!-- 누르면 되돌아 가는 것 -->
    <!-- <router-link :to="{ name: 'BoardReadPage', params: { boardNo: 1} }">
      Cancel
    </router-link> -->
  </div>
</template>

<script>
export default {
  name: 'BoardModfiyForm',
  props: {
    board: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    onSubmit () {
      const { title, content } = this
      this.$emit('submit', { title, content })
    }
  },
  created () {
    this.title = this.board.title
    this.content = this.board.content
  }
}
</script>

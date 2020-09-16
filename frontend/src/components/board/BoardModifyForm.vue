<template>
  <v-main>
    <h3>Board Modified Form</h3>
    <form @submit.prevent="onSubmit">
      <v-simple-table align="center" boarder="2">
        <div id="tableBorder">
          <tr class="text-center" id="tableBorder">
            <td width="300" height="35" class="blue-grey lighten-5">No</td>
            <td width="1000px" class="text-left"><input type="text" :value="board.boardNo" disabled></td>
          </tr>
          <tr class="text-center" id="tableBorder">
            <td width="300" height="35" class="blue-grey lighten-5">Registration Date</td>
            <td width="1000px" class="text-left"><input type="text" :value="board.regDate" disabled></td>
          </tr>
          <tr class="text-center" id="tableBorder">
            <td width="300" height="35" class="blue-grey lighten-5">Title</td>
            <td width="1000px" class="text-left"><input type="text" v-model="title" style="width: 100%;"></td>
          </tr>
          <tr class="text-center" id="tableBorder">
            <td width="300" height="35" class="blue-grey lighten-5">Writer</td>
            <td width="1000px" class="text-left"><input type="text" :value="board.writer" disabled></td>
          </tr>
          <tr class="text-center" id="tableBorder">
            <td width="300" height="35" class="blue-grey lighten-5">Content</td>
            <td width="1000px" class="text-left"><textarea v-model="content" rows="5"></textarea></td>
          </tr>
        </div>
      </v-simple-table>

      <div>
        <button type="submit">Modify</button>
        <router-link :to="{ name: 'BoardReadPage', params: { boardNo: board.boardNo.toString() } }">
          Cancel
        </router-link>
      </div>
    </form>
  </v-main>
</template>

<script>
export default {
  name: 'BoardModifyForm',
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

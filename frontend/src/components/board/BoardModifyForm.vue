<template>
  <v-main>
    <form @submit.prevent="onSubmit">
    <br><br>
      <v-card width="1300" height="600" class="mx-auto" outlined>
        <br><br>
        <h2>Board Modification</h2>
        <br>
        <v-simple-table class="px-15 mx-15">
          <div class="mx-auto" style="border-collapse: collapse">
            <tr class="text-center" id="tableBorder">
              <td width="300" height="35" class="blue-grey lighten-4">No</td>
              <td width="700" class="text-left"><input type="text" :value="board.boardNo" style="width: 100%;" disabled></td>
            </tr>

            <tr class="text-center" id="tableBorder">
              <td width="300" height="35" class="blue-grey lighten-4">Title</td>
              <td class="text-left"><input type="text" v-model="board.title" style="width: 100%;"></td>
            </tr>

            <tr class="text-center" id="tableBorder">
              <td width="300" height="35" class="blue-grey lighten-4">Writer</td>
              <td class="text-left"><input type="text" v-model="board.writer" style="width: 100%;" disabled></td>
            </tr>

            <tr class="text-center" id="tableBorder">
              <td width="300" height="35" class="blue-grey lighten-4">Registration Date</td>
              <td class="text-left"><input type="text" :value="board.regDate" style="width: 100%;" disabled></td>
            </tr>

            <tr class="text-center" id="tableBorder">
              <td width="300" height="120" class="blue-grey lighten-4" align="center">Content</td>
              <td class="text-left"><textarea v-model="board.content" rows="5" style="width: 100%;"></textarea></td>
            </tr>
          </div>
        </v-simple-table>
        <br>
        <div>
          <v-btn type="submit" title outlined color="success" class="my-5 mx-3">
            <v-icon left>mdi-pencil</v-icon>Modify</v-btn>
          <v-btn @click="$router.push({ name: 'BoardReadPage', params: { boardNo: board.boardNo.toString() } })"
            title outlined color="red" class="my-5 mx-3">
            <v-icon left>mdi-cancel</v-icon>Cancel</v-btn>
        </div>
      </v-card>
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

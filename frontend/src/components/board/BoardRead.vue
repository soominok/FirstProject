<template>
  <v-main align="center">
    <h3>Board Detailed View</h3>
    <br>
      <v-simple-table align="center">
        <div id="tableBorder">
          <tr class="text-center" id="tableBorder">
            <td width="300" height="35" class="blue-grey lighten-5">No</td>
            <td width="1000" class="text-left"><input type="text" :value="board.boardNo" readonly></td>
          </tr>

          <tr class="text-center" id="tableBorder">
            <td width="300" height="35">Title</td>
            <td class="text-left"><input type="text" v-model="board.title" readonly width="900"></td>
          </tr>

          <tr class="text-center" id="tableBorder">
            <td width="300" height="35">Writer</td>
            <td class="text-left"><input type="text" v-model="board.writer" readonly></td>
          </tr>

          <tr class="text-center" id="tableBorder">
            <td width="300" height="35">Registration Date</td>
            <td class="text-left"><input type="text" :value="board.regDate" readonly></td>
          </tr>

          <tr class="text-center" id="tableBorder">
            <td width="300" height="150">Content</td>
            <td class="text-left"><textarea v-model="board.content" rows="5" readonly></textarea></td>
          </tr>
        </div>
      </v-simple-table>
  </v-main>
</template>

<script>
export default {
  name: 'BoardRead',
  props: {
    board: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
#tableBorder {
  margin-left: 100px;
  border-collapse: collapse;
  border: 2px solid #777777;
}
</style>

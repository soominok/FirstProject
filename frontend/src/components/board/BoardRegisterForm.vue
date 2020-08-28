<template>
  <v-main>
    <h3>Board Register Form</h3>
    <br>
    <v-simple-table align="center" border="2">
      <div id="tableBorder">
      <label>
        <tr class="text-center" id="tableBorder">
          <td width="300" height="35" class="blue-grey lighten-5">Title</td>
          <td width="1000px" class="text-left"><input type="text" v-model="title" style="width: 800px;"></td>
        </tr>
      </label>
      <label>
        <tr class="text-center" id="tableBorder">
          <td width="300" height="35" class="blue-grey lighten-5">Writer</td>
          <td width="1000" class="text-left"><input type="text" v-model="writer"></td>
        </tr>
      </label>
      <label>
        <tr class="text-center" id="tableBorder">
          <td width="300" height="35" class="blue-grey lighten-5">Content</td>
          <td width="1000" class="text-left"><textarea v-model="content" rows="5"></textarea></td>
        </tr>
      </label>
      </div>
    </v-simple-table>
      <div>
      <br><br>
        <v-btn @click="submit" color="teal">Register</v-btn>
        <v-btn style="margin-left: 10px;" @click="$router.push({ name: 'BoardListPage' })" color="teal">Cancel</v-btn>
      </div>
  </v-main>
</template>

<script>
export default {
  name: 'BoardRegisterForm',
  data () {
    return {
      title: '',
      writer: '',
      content: ''
    }
  },
  methods: {
    onSubmit () {
      const { title, writer, content } = this
      this.$emit('submit', { title, writer, content })
    }
  }
}
</script>

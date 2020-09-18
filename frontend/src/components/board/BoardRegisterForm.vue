<template>
  <v-main align="center">
    <form @submit.prevent="onSubmit">
      <br><br>
      <v-card width="1300" height="600" class="mx-auto" outlined>
        <br>
        <h2>Board Register Form</h2><br>
        <v-simple-table justify="center" align="center">
          <div style="border-collapse: collapse" class="px-15 mx-15">
            <tr class="text-center" id="tableBorder">
              <td width="300" height="35" class="blue-grey lighten-4">Title</td>
              <td width="700" class="text-left"><input type="text" v-model="title" style="width: 100%;"></td>
            </tr>
            <tr class="text-center" id="tableBorder">
              <td width="300" height="35" class="blue-grey lighten-4">Writer</td>
              <td width="700" class="text-left"><input type="text" v-model="writer" style="width: 100%;"></td>
            </tr>
            <tr class="text-center" id="tableBorder">
              <td width="300" height="150" class="blue-grey lighten-4">Content</td>
              <td width="700" class="text-left"><textarea v-model="content" rows="5" style="width: 100%; height: 100%;"></textarea></td>
            </tr>
          </div>
        </v-simple-table>
        <div align="center">
        <br>
          <v-btn type="submit" title outlined color="blue darken-4" class="my-5 mx-3">
            <v-icon left>mdi-checkbox-marked-circle</v-icon>Register</v-btn>
          <v-btn @click="$router.push({ name: 'BoardListPage' })" title outlined color="red darken-2" class="my-5 mx-3">
            <v-icon left>mdi-cancel</v-icon>Cancel</v-btn>
        </div>
      </v-card>
    </form>
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

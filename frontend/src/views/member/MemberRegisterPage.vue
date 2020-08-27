<template>
  <v-app align="center">
    <h1>Member Register Page</h1>
    <!-- <member-register-form @submit="onSubmit"/> -->
    <v-container align="center">
      <v-row justify="center">
        <v-col
          cols="2">
          <v-subheader>ID<br>(아이디)</v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field
            color="teal lighten-4"
            label="ID"
            v-model="userId"
            type="text"
            placeholder="아이디를 생성해주세요."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="2">
          <v-subheader>Password<br>(비밀번호)</v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field
            color="teal lighten-4"
            label="Password"
            v-model="userPw"
            type="password"
            placeholder="비밀번호를 생성해주세요."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="2">
          <v-subheader>UserName<br>(성명)</v-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field
            color="teal lighten-4"
            label="User Name"
            v-model="userName"
            type="text"
            placeholder="이름을 입력해주세요."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn type="submit" small color="teal lighten-4">회원가입</v-btn>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'
// import MemberRegisterForm from '@/components/member/MemberRegisterForm.vue'

export default {
  name: 'MemberRegisterPage',
  components: {
    // MemberRegisterForm
  },
  methods: {
    onSubmit (payload) {
      console.log('payload: ' + payload.userId +
                  ', ' + payload.userName +
                  ', ' + payload.userPw)
      const { userId, userName, userPw } = payload
      axios.post('http://localhost:5555/users/setup',
        { userId, userPw, userName })
        .then(res => {
          alert('Register Success')
          this.$router.push({
            name: 'Home'
          })
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>

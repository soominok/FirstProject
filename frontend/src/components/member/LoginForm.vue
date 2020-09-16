<template>
  <form @submit.prevent="submit">
    <div id="app">
      <v-container align="center">
        <v-row justify="center">
          <v-col>
            <v-text-field
              color="teal lighten-4"
              v-model="userId"
              label="Id"
              placeholder="아이디를 입력해주세요."
            ></v-text-field>
            <v-text-field
              color="teal lighten-4"
              v-model="userPw"
              label="Password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            ></v-text-field>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
      </v-container>
    </div>
    <div class="text-center">
      <v-btn class="my-1 mx-2" type="submit" color="green lighten-2">로그인</v-btn>
      <v-btn @click="register" class="mx-2" color="blue lighten-2">회원가입</v-btn>
      <br>
      <v-btn @click="findIdPw" class="my-1" color="red lighten-3">아이디/패스워드 찾기</v-btn>
    </div>
    <br><br>
  </form>
</template>

<script>
/* eslint-disable no-unused-vars */
import router from '@/router'

export default {
  name: 'LoginForm',
  data () {
    return {
      userId: '',
      userPw: ''
    }
  },
  methods: {
    submit () {
      console.log('LoginForm submit()')
      const { userId, userPw } = this
      this.$emit('submit', { userId, userPw })
    },
    register () {
      this.$router.push('/memberRegisterPage').catch(() => {})
    },
    findIdPw () {
      this.$router.push('/findIDPW').catch(() => {})
    }
  }
}
</script>

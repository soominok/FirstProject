<template>
  <form @submit.prevent="submit">
    <div id="app">
      <v-container align="center">
        <v-row justify="center">
          <v-col
            cols="12"
            sm="5"
            >
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
        <div class="text-center" cols="12" sm="4">
          <v-btn class="my-2" type="submit" small color="teal lighten-4">로그인</v-btn>
          <v-btn type="register" small>회원가입</v-btn>
        </div>
      </v-container>
    </div>
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
    }
  }
}
</script>

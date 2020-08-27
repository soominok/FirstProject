<template>
  <v-app align="center">
    <h1>Login Page</h1>
    <login-form @submit="onSubmit"/>
  </v-app>
</template>

<script>
import LoginForm from '@/components/member/LoginForm.vue'
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  },
  methods: {
    onSubmit (payload) {
      console.log('loginPage onSubmit()')
      this.login(payload).then(res => {
        alert('환영합니다.')
        this.$router.push({ name: 'Home' })
      }).catch(err => {
        alert('아이디 또는 비밀번호를 다시 확인해주세요.', err)
      })
    },
    ...mapActions(['login'])
  }
}
</script>

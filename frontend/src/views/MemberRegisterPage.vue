<template>
  <div align="center">
    <br>
    <h1>Member Register Page</h1>
    <br><br>
    <member-register-form @submit="onSubmit"/>
  </div>
</template>

<script>
import axios from 'axios'
import MemberRegisterForm from '@/components/MemberRegisterForm.vue'

export default {
  name: 'MemberRegisterPage',
  components: {
    MemberRegisterForm
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

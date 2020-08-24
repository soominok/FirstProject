<template>
  <div align="center">
    <h1>Register Page</h1>
    <admin-setup-form @submit="onSubmit"/>
  </div>
</template>

<script>
import axios from 'axios'
import AdminSetupForm from '@/components/AdminSetupForm.vue'

export default {
  name: 'AdminSetupPage',
  components: {
    AdminSetupForm
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

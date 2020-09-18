<template>
  <v-main align="center">
    <v-card width="700" class="px-auto mx-auto my-13" shaped outlined>
    <br>
      <h1>Member Register Page</h1>
      <member-register-form @submit="onSubmit"/>
    </v-card>
  </v-main>
</template>

<script>
import axios from 'axios'
import MemberRegisterForm from '@/components/member/MemberRegisterForm.vue'

export default {
  name: 'MemberRegisterPage',
  components: {
    MemberRegisterForm
  },
  methods: {
    onSubmit (payload) {
      console.log('payload: ' + payload.userId +
                  ', ' + payload.userPw +
                  ', ' + payload.userName +
                  ', ' + payload.userEmail)
      const { userId, userPw, userName, userEmail } = payload
      axios.post('http://localhost:5555/users/setup',
        { userId, userPw, userName, userEmail })
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

<template>
  <div align="center">
    <h2>Board Register</h2>
    <board-register-form @submit="onSubmit"/>
  </div>
</template>

<script>
import BoardRegisterForm from '@/components/BoardRegisterForm'
import axios from 'axios'

export default {
  name: 'BoardRegisterPage',
  components: {
    BoardRegisterForm
  },
  methods: {
    onSubmit (payload) {
      console.log('BoardRegisterPage onSubmit()')
      const { title, writer, content } = payload
      axios.post('http://localhost:5555/boards', { title, writer, content })
        .then(res => {
          console.log(res)
          // 성공했다는 알림 띄움.
          alert('Register Success')
          this.$router.push({
            name: 'BoardReadPage',
            params: { boardNo: res.data.boardNo.toString() }
          })
        })
        // 에러 발생했을 때 에러메세지 띄워줌
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>

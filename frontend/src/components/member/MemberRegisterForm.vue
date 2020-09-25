<template>
  <form @submit.prevent="submit">
    <v-main id="inspire">
      <v-container justify="center">
        <v-row justify="center">
          <v-col cols="5" class="pr-3 mr-0 ml-14">
            <v-text-field
              prepend-icon="mdi-account"
              label="ID"
              v-model="userId"
              type="text"
              placeholder="아이디를 생성해주세요."
              color="teal"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
          <br>
            <v-btn small @click="idCheck" outlined color="teal" class="my-0">중복확인</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="5" class="mr-16">
            <v-text-field
              prepend-icon="mdi-lock"
              label="Password"
              v-model="userPw"
              type="password"
              placeholder="비밀번호를 생성해주세요."
              color="teal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="5" class="mr-16">
            <v-text-field
              prepend-icon="mdi-account-details"
              label="User Name"
              v-model="userName"
              type="text"
              placeholder="이름을 입력해주세요."
              color="teal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="5" class="mr-16">
            <v-text-field
              prepend-icon="mdi-email"
              label="User Email"
              ref="userEmail"
              v-model="userEmail"
              type="text"
              placeholder="이메일을 입력해주세요."
              :rules="rules"
              color="teal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col class="text-center mx-auto" sm="4">
            <v-btn type="submit" outlined color="blue darken-3">회원가입</v-btn>
            <v-btn text small @click="$router.push({ name: 'LoginPage' })" outlined color="black" class="my-2 ml-0">
              로그인하러 가기</v-btn>
        </v-col>
      </v-container>
    </v-main>
  </form>
</template>
<script>
import axios from 'axios'
export default {
  name: 'MemberRegisterForm',
  data () {
    return {
      userId: '',
      userPw: '',
      userName: '',
      userEmail: null,
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '이메일 형식에 맞게 입력해주세요.'
        }
      ]
    }
  },
  methods: {
    submit () {
      console.log('this: ' + this.userId +
                  ', ' + this.userPw +
                  ', ' + this.userName +
                  ', ' + this.userEmail)
      const { userId, userPw, userName, userEmail } = this
      this.$emit('submit', { userId, userPw, userName, userEmail })
    },
    idCheck () {
      axios.get(`http://localhost:5555/users/idCheck/${this.userId}`)
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            if (res.data === 'ok') {
              alert('사용할 수 있는 아이디입니다.')
            } else {
              alert('이미 사용 중인 아이디입니다.')
            }
          }
        })
        .catch(err => {
          console.log(err)
          alert('아이디를 입력해주세요.')
        })
    }
  }
}
</script>

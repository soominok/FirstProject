<template>
  <form @submit.prevent="submit">
    <v-main id="inspire">
      <v-container justify="center">
        <v-row justify="center">
          <v-col cols="5">
            <v-text-field
              prepend-icon="mdi-account"
              label="ID"
              v-model="userId"
              type="text"
              placeholder="아이디를 생성해주세요."
              color="teal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="5">
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
          <v-col cols="5">
            <v-text-field
              prepend-icon="mdi-account"
              label="User Name"
              v-model="userName"
              type="text"
              placeholder="이름을 입력해주세요."
              color="teal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="5">
            <v-text-field
              prepend-icon="mdi-email"
              label="User Email"
              v-model="userEmail"
              type="text"
              placeholder="이메일을 입력해주세요."
              color="teal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col class="text-center mx-auto" sm="4">
            <v-btn type="submit" outlined color="blue darken-3">회원가입</v-btn>
            <v-btn text small @click="$router.push({ name: 'LoginPage' })" outlined color="black" class="my-2">
              계정이 있으신가요? 로그인하러 가기</v-btn>
        </v-col>
      </v-container>
    </v-main>
  </form>
</template>

<script>
export default {
  name: 'MemberRegisterForm',
  data () {
    return {
      userId: '',
      userPw: '',
      userName: '',
      userEmail: ''
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
    }
  }
}
</script>

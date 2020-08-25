<template>
  <form @submit.prevent="submit">
    <div id="app">
      <v-app id="inspire">
        <v-container justify="center">
          <v-row align="center">
            <v-col
              cols="4">
              <v-subheader>ID(아이디)</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="ID"
                v-model="userId"
                type="text"
                placeholder="아이디를 생성해주세요."
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-subheader>Password(비밀번호)</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Password"
                v-model="userPw"
                type="password"
                placeholder="비밀번호를 생성해주세요."
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-subheader>UserName(성명)</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="User Name"
                v-model="userName"
                type="text"
                placeholder="이름을 입력해주세요."
              ></v-text-field>
            </v-col>
          </v-row>
          <v-col class="text-center" cols="12" sm="4">
            <div class="my-2">
              <v-btn type="submit" small>회원가입</v-btn>
            </div>
          </v-col>
        </v-container>
      </v-app>
    </div>
  </form>
</template>

<script>
export default {
  name: 'MemberRegisterForm',
  data () {
    return {
      userId: '',
      userPw: '',
      userName: ''
    }
  },
  methods: {
    submit () {
      console.log('this: ' + this.userId +
                  ', ' + this.userPw +
                  ', ' + this.userName)
      const { userId, userPw, userName } = this
      this.$emit('submit', { userId, userPw, userName })
    }
  }
}
</script>

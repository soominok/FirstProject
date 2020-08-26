<template>
  <form @submit.prevent="submit">
    <div id="app">
      <v-app id="inspire">
        <v-container align="center">
          <v-row justify="center">
            <v-col
              cols="4">
              <!-- <v-subheader>ID(아이디)</v-subheader> -->
              <v-text-field
                color="teal lighten-4"
                label="ID"
                v-model="userId"
                type="text"
                placeholder="아이디를 생성해주세요."
              ></v-text-field>
              <v-subheader>Password(비밀번호)</v-subheader>
              <v-text-field
                color="teal lighten-4"
                label="Password"
                v-model="userPw"
                type="password"
                placeholder="비밀번호를 생성해주세요."
              ></v-text-field>
              <v-subheader>UserName(성명)</v-subheader>
              <v-text-field
                color="teal lighten-4"
                label="User Name"
                v-model="userName"
                type="text"
                placeholder="이름을 입력해주세요."
              ></v-text-field>
            </v-col>
          </v-row>
          <v-col class="text-center" cols="12" sm="4">
            <div class="my-2">
              <v-btn type="submit" small color="teal lighten-4">회원가입</v-btn>
            </div>
          </v-col>
        </v-container>
      </v-app>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AdminSetupForm',
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

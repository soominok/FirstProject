<template>
  <form @submit.prevent="submit">
    <v-main id="inspire">
      <v-container justify="center">
        <v-row justify="center">
          <!-- <v-col
            cols="4">
            <v-subheader>ID(아이디)</v-subheader>
          </v-col> -->
          <v-col cols="4">
            <v-text-field
              label="ID"
              v-model="userId"
              type="text"
              placeholder="아이디를 생성해주세요."
              color="teal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <!-- <v-col cols="4">
            <v-subheader>Password(비밀번호)</v-subheader>
          </v-col> -->
          <v-col cols="4">
            <v-text-field
              label="Password"
              v-model="userPw"
              type="password"
              placeholder="비밀번호를 생성해주세요."
              color="teal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <!-- <v-col cols="4">
            <v-subheader>UserName(성명)</v-subheader>
          </v-col> -->
          <v-col cols="4">
            <v-text-field
              label="User Name"
              v-model="userName"
              type="text"
              placeholder="이름을 입력해주세요."
              color="teal"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col class="text-center mx-auto" cols="12" sm="4">
          <div class="my-2">
            <v-btn type="submit" color="blue lighten-2">회원가입</v-btn>
            <v-btn @click="$router.push({ name: 'LoginPage' })" class="mx-3" color="green lighten-2">로그인</v-btn>
          </div>
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

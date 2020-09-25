<template>
  <form @submit.prevent="submit">
    <div id="app">
      <v-container align="center">
        <v-row justify="center">
          <v-col>
            <v-text-field
              prepend-icon="mdi-account"
              v-model="userId"
              color="teal"
              label="Id"
              placeholder="아이디를 입력해주세요."
            ></v-text-field>
            <v-text-field
              prepend-icon="mdi-lock"
              color="teal"
              v-model="userPw"
              label="Password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            ></v-text-field>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
      </v-container>
    </div>
    <div class="text-center">
      <v-btn type="submit" color="green darken-3" outlined class="mx-2 ma-2">로그인</v-btn>
      <v-btn @click="register" class="mx-2" outlined color="blue darken-3">회원가입</v-btn>
      <br>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn id="findPw" text small v-bind="attrs" v-on="on" class="pa-0 ma-0">비밀번호 찾기</v-btn>
          <v-btn id="findId" text small v-bind="attrs" v-on="on" class="pa-0 ma-0">아이디 / </v-btn>
        </template>
        <v-card>
          <v-card-title>
             <span class="headline">아이디 찾기</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="8" md="4">
                  <v-text-field label="Name*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="8">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <!-- <v-col cols="12">
                  <v-text-field label="Password*" type="password" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col> -->
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Next</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <br><br>
  </form>
</template>

<script>
/* eslint-disable no-unused-vars */
import router from '@/router'

export default {
  name: 'LoginForm',
  data () {
    return {
      userId: '',
      userPw: '',
      dialog: false
    }
  },
  methods: {
    submit () {
      console.log('LoginForm submit()')
      const { userId, userPw } = this
      this.$emit('submit', { userId, userPw })
    },
    register () {
      this.$router.push('/memberRegisterPage').catch(() => {})
    },
    findIdPw () {
      this.$router.push('/findIDPW').catch(() => {})
    }
  }
}
</script>

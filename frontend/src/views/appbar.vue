<template>
  <Layout>
    <template #menubar>
      <div class="home">
        <div id="header" v-if="isAuthorized">
          <!--
          <div id="app">
            <v-row justify="end">
              {{ myinfo.auth }}님, 접속을 환영합니다.
            </v-row>
          </div> -->
          <!--
          <v-btn @click="start('keyword')" text color="black"
            style="padding: 10px; width: 90px;">증권키워드</v-btn>
          <v-btn @click="$router.push({ name: 'BoardListPage' })" text color="black"
            style="padding: 10px; width: 300px;">게시판</v-btn> -->
          <v-btn @click="$router.push({ name: 'MyInfoPage' })" text color="teal"
            style="padding: 5px; width: 90px;">MyPage</v-btn>
          <v-btn @click="onClickLogout" text color="teal"
            style="padding: 5px; width: 90px;">Logout</v-btn>
        </div>
        <div id="header" v-else>
          <v-btn @click="$router.push({ name: 'LoginPage' })" text color="teal"
            style="padding: 5px; width: 90px;">Login</v-btn>
          <v-btn @click="$router.push({ name: 'MemberRegisterPage' })" text color="teal"
            style="padding: 5px; width: 90px;">Register</v-btn>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
/* eslint-disable no-unused-vars */
import store from '../store'
import Vue from 'vue'
import cookies from 'vue-cookies'
import Layout from '../components/Layout'
import { mapState, mapGetters, mapActions } from 'vuex'
Vue.use(cookies)
export default {
  name: 'Home',
  data: function () {
    return {
    }
  },
  methods: {
    onClickLogout () {
      this.logout()
      alert('Success Logout')
      this.$router.push({ name: 'Home' })
    },
    // onClickRegister (state) {
    // if (myinfo.auth === 'ROLE_ADMIN') {
    // this.$router.push({ name: 'AdminSetupPage' })
    // } else {
    // this.$router.push({ name: 'MemberRegisterPage' })
    // }
    // },
    clickBoards (boardNo) {
      console.log('clickBoards: ' + boardNo)
    },
    start (category) {
      this.$store.dispatch('boardFind', category)
    },
    ...mapActions(['logout'])
  },
  computed: {
    ...mapState(['myinfo']),
    ...mapGetters(['isAuthorized']),
    ...mapState({
      lists: state => state.lists
    })
  },
  components: {
    Layout
  }
}
</script>

<style scoped>
#header {
  padding: 40px;
  margin-bottom: 15px;
  margin: 0px 0px;
}
img {
  width: auto;
  height: auto;
  max-width: 1000px;
  max-height: 350px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#login {
  background-color: #77aadd;
  color: #ffffff;
  font-weigth: bold;
  float: right;
}
</style>

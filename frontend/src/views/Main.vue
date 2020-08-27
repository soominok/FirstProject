<template>
  <Layout>
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
      message: 'Vue Test Message'
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

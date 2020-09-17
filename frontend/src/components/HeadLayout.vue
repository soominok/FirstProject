<template>
  <v-app id="app">
    <v-card
      color="white"
      flat
      height="20px"
      title
      shrink-on-scroll
    >
      <v-toolbar extended extension-height="30">
        <!-- <v-app-bar-nav-icon color="teal"></v-app-bar-nav-icon> -->
        <v-toolbar-title class="text-h4 teal--text"><div @click="home">Stock Know</div></v-toolbar-title>

        <v-spacer></v-spacer>

        <div class= "home">
          <div id="header" v-if="isAuthorized">
            <div id="app">
              <v-row justify="end" text color="teal" style="padding: 5px; width: 500px;">
                {{ myinfo.auth }}님, 접속을 환영합니다.
                <v-btn @click="$router.push({ name: 'MyInfoPage' })" text color="teal"
                  style="padding: 5px; width: 90px;">MyPage</v-btn>
                <v-btn @click="onClickLogout" text color="teal"
                  style="padding: 5px; width: 90px;">Logout</v-btn>
              </v-row>
            </div>
          </div>
          <div id="header" v-else>
            <v-btn @click="login" text color="teal"
              style="padding: 5px; width: 90px;">Login</v-btn>
            <v-btn @click="$router.push({ name: 'MemberRegisterPage' })" text color="teal"
              style="padding: 5px; width: 90px;">Register</v-btn>
          </div>
          <slot name="menubar"></slot>
        </div>

        <template v-slot:extension>
          <v-tabs
          v-model="tab"
          color="teal"
          fixed-tabs
          right
          >
            <v-tab class="font-weight-black" @click="home">홈</v-tab>
              <!-- <v-tab-item value="/"></v-tab-item> -->
            <v-tab class="font-weight-black" @click="keyword">증권키워드</v-tab>
            <v-tab class="font-weight-black" @click="boardList">게시판</v-tab>
            <v-tab-item
              v-for="i in tabs"
              :key="i"
              :value="'tab-' + i"
            >
            </v-tab-item>
          </v-tabs>
        </template>
       </v-toolbar>
      <v-container>
        <v-main id="content">
          <slot name="content" class="font">
          </slot>
        </v-main>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
/* eslint-disable no-unused-vars */
import router from '../router'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: false,
    left: false,
    tab: null,
    tabs: 3,
    items: [
      { title: '로그인' },
      { title: '회원가입' }
    ],
    menus: [
      { title: '산업 Talk' },
      { title: '기업 Talk' }
    ]
  }),
  methods: {
    onClickLogout () {
      this.logout()
      alert('로그아웃 성공~!')
      this.$router.push({ name: 'Home' })
    },
    home () {
      this.$router.push('/').catch(() => {})
    },
    login () {
      this.$router.push({ name: 'LoginPage' }).catch(() => {})
    },
    boardList () {
      this.$router.push({ name: 'BoardListPage' }).catch(() => {})
    },
    keyword () {
      this.$router.push('/keyword').catch(() => {})
    },
    ...mapActions(['logout'])
  },
  computed: {
    ...mapState(['myinfo']),
    ...mapGetters(['isAuthorized']),
    ...mapState({
      lists: state => state.lists
    })
  }
}
</script>

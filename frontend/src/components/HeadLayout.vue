<template>
  <v-app id="app">
    <v-app id="inspire">
      <v-card
        color="white"
        flat
        height="100px"
        title
      >
        <v-toolbar extended extension-height="50">
          <!-- <v-app-bar-nav-icon color="teal"></v-app-bar-nav-icon> -->
          <v-toolbar-title class="display-1 teal--text"><div @click="home">First Project</div></v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon color="teal">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <div class="home">
            <div id="header" v-if="isAuthorized">
              <!--
              <div id="app">
                <v-row justify="end">
                  {{ myinfo.auth }}님, 접속을 환영합니다.
                </v-row>
              </div> -->
              <v-btn @click="$router.push({ name: 'MyInfoPage' })" text color="teal"
                style="padding: 5px; width: 90px;">MyPage</v-btn>
              <v-btn @click="onClickLogout" text color="teal"
                style="padding: 5px; width: 90px;">Logout</v-btn>
            </div>
            <div id="header" v-else>
              <v-btn @click="login" text color="teal"
                style="padding: 5px; width: 90px;">Login</v-btn>
              <v-btn @click="$router.push({ name: 'MemberRegisterPage' })" text color="teal"
                style="padding: 5px; width: 90px;">Register</v-btn>
            </div>
            <slot name="menubar"></slot>
          </div>

          <v-btn icon color="teal">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs
            v-model="tab"
            color="teal"
            fixed-tabs
            right
            >
              <v-tab class="font-weight-black" @click="$router.push({ name: 'Main' })">홈</v-tab>
              <v-tab class="font-weight-black" @click="$router.push({ name: 'Keyword' })">증권키워드</v-tab>
              <v-tab class="font-weight-black" @click="boardList">게시판</v-tab>
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
    items: [
      { title: '로그인' },
      { title: '회원가입' }
    ],
    menus: [
      '홈', '증권키워드분석', '게시판'
    ]
  }),
  methods: {
    onClickLogout () {
      this.logout()
      alert('로그아웃 성공~!')
      this.$router.push({ name: 'Home' })
    },
    login () {
      this.$router.push({ name: 'LoginPage' }).catch(() => {})
    },
    boardList () {
      this.$router.push({ name: 'BoardListPage' }).catch(() => {})
    },
    home () {
      this.$router.push('/').catch(() => {})
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

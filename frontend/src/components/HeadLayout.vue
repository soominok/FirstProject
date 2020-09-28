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
        <v-toolbar-title class="text-h4 teal--text"><div @click="home">Stock Know</div></v-toolbar-title>

        <v-spacer></v-spacer>

        <div class= "home">
          <div id="header" v-if="isAuthorized">
            <div id="app">
              <v-row justify="end" text color="teal" style="padding: 5px; width: 500px;">
                {{ myinfo.auth }}님, 접속을 환영합니다.
                <v-menu bottom offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text
                      class="px-8"
                      color="teal"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      small
                    >
                      <v-icon>mdi-account-check</v-icon>
                    </v-btn>
                  </template>
                  <v-list-item
                    v-for="(item, index) in logoutName"
                    :key="index"
                    @click="onClickLogout"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-menu>
              </v-row>
            </div>
          </div>
          <div id="header" v-else>
            <v-row justify="end" text color="teal" style="padding: 5px; width: 500px;">
               로그인 후 이용해주세요
              <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text
                    class="px-8"
                    color="teal"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    small
                  >
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </template>
                <v-btn color="black" text class="px-7" @click="login">로그인</v-btn><br/>
                <v-btn color="black" text class="px-5" @click="signUp">회원가입</v-btn>
              </v-menu>
            </v-row>
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
            <v-tab class="font-weight-black" @click="keyword">증권 뉴스</v-tab>
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
    logoutName: [
      { title: '로그아웃' }
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
      this.$router.push({ name: 'Home' }).catch(() => {})
    },
    login () {
      this.$router.push({ name: 'LoginPage' }).catch(() => {})
    },
    signUp () {
      this.$router.push({ name: 'MemberRegisterPage' }).catch(() => {})
    },
    boardList () {
      this.$router.push({ name: 'BoardListPage' }).catch(() => {})
    },
    newsList () {
      this.$router.push({ name: 'NewsList' }).catch(() => {})
    },
    keyword () {
      this.$router.push({ name: 'NewsList' }).catch(() => {})
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

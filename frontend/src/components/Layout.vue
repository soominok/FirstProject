<template>
  <v-app id="app">
    <v-card
      color="white"
      flat
      height="100px"
      title
      shrink-on-scroll
    >
      <v-toolbar extended extension-height="50">
        <!-- <v-app-bar-nav-icon color="teal"></v-app-bar-nav-icon> -->
        <v-toolbar-title class="text-h4 teal--text"><div @click="home">Stock Know</div></v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn icon color="teal">
          <v-icon>mdi-magnify</v-icon>
        </v-btn> -->

        <v-col sm="2">
          <v-text-field
            append-icon="mdi-magnify"
            color="teal"
            rows="1"
            row-height="10"
            clearable
            flat
            hide-details
            label="Search"
          ></v-text-field>
        </v-col>
        <div class= "home">
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

        <template v-slot:extension right>
          <div id="header" v-if="isAuthorized">
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
          </div>
          <div id="header" v-else>
            <v-tabs
              v-model="tab"
              color="teal"
              extension
              :right="true"
              >
                <v-tab class="font-weight-black" @click="home">홈</v-tab>
                  <!-- <v-tab-item value="/"></v-tab-item>
                <v-tab class="font-weight-black" @click="keyword">증권키워드</v-tab> -->
                <v-tab class="font-weight-black" @click="boardList">게시판</v-tab>
                <v-tab-item
                  v-for="i in tabs"
                  :key="i"
                  :value="'tab-' + i"
                >
                </v-tab-item>
            </v-tabs>
          </div>
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

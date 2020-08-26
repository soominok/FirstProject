<template>
  <v-app id="app">
    <v-app id="inspire">
      <v-card
        color="white"
        flat
        height="200px"
        title
      >
        <v-toolbar extended extension-height="100">
          <v-app-bar-nav-icon color="teal"></v-app-bar-nav-icon>
          <v-toolbar-title class="display-1 teal--text"><div @click="home">First Project</div></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon color="teal">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <slot name="menubar"></slot>
          <v-btn icon color="teal">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          <template v-slot:extension>
            <v-tabs
            color="teal"
            v-model="tab"
            fixed-tabs
            right
            >
              <v-tab class="font-weight-black" @click="$router.push({ name: 'Main' })">홈</v-tab>
              <v-tab class="font-weight-black" @click="$router.push({ name: 'Keyword' })">증권키워드</v-tab>
              <v-tab class="font-weight-black" @click.stop="$router.push({ name: 'BoardListPage' })">게시판</v-tab>

            </v-tabs>
          </template>
        </v-toolbar>
        <v-spacer></v-spacer>
        <v-container>
          <v-content id="content">
            <slot name="content" class="font">
            </slot>
          </v-content>
        </v-container>
      </v-card>
    </v-app>
  </v-app>
</template>

<script>
import router from '../router'
export default {
  data: () => ({
    drawer: false,
    left: false,
    tab: null,
    items: [
      { title: '로그인' },
      { title: '회원가입' }
    ]
  }),
  methods: {
    home () {
      (window.location.pathname !== '/') ? router.push('/') : router.go(0)
    },
    boardPage () {
      (window.location.pahtname !== '/board') ? router.push('/board') : router.go(0)
    },
    suggest () {
      (window.location.pathname !== '/suggestednews/list') ? router.push('/suggestednews/list') : router.go(0)
    }
  }
}
</script>

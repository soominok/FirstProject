<template>
  <div>
    <v-app-bar
      app
      clipped-right
      color="white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><div @click="home">개인 프로젝트</div></v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="menubar"></slot>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            :key="items.title"
            @click="() => {}"
          >
            <v-list-item-title>{{ items.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import router from '../router'

export default {
  // return 대신에 => 를 쓴 것!
  data: () => ({
    drawer: false,
    left: false,
    items: [
      { title: '로그인' },
      { title: '회원가입' }
    ]

  }),
  methods: {
    home () {
      // location.path가 router이면 /로 보내고,
      (window.location.pathname !== '/') ? router.push('/') : router.go(0)
    },
    category () {
      (window.location.pathname !== '/CrawlCategory') ? router.push('/CrawlCategory') : router.go(0)
    },
    suggest () {
      (window.location.pathname !== '/suggestednews/list') ? router.push('/suggestednews/list') : router.go(0)
    }
  }
}
</script>

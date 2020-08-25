<template>
  <div id="app">
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        clipped-right
        color="white"
        shrink-on-scroll
        prominent
        scroll-target="#scrolling-techniques"
      >
        <v-toolbar-title class="text-uppercase"><div @click="home">First Project</div></v-toolbar-title>
        <v-spacer></v-spacer>
        <slot name="menubar"></slot>
      </v-app-bar>
    </v-card>
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
      (window.location.pathname !== '/') ? router.push('/') : router.go(0)
    },
    suggest () {
      (window.location.pathname !== '/suggestednews/list') ? router.push('/suggestednews/list') : router.go(0)
    }
  }
}
</script>

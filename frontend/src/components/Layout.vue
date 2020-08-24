<template>
  <div>
    <v-app-bar
      app
      clipped-right
      color="white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><div @click="home">First Project</div></v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="menubar"></slot>
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
      (window.location.pathname !== '/') ? router.push('/') : router.go(0)
    },
    suggest () {
      (window.location.pathname !== '/suggestednews/list') ? router.push('/suggestednews/list') : router.go(0)
    }
  }
}
</script>

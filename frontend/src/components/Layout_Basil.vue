<template>
  <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text text-center"><div @click="home">개인 프로젝트</div></h1>
      </v-card-title>
    <v-spacer></v-spacer>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
/* eslint-disable no-unused-vars */
import router from '../router'

export default {
  data: () => ({
    tab: '',
    items: [
      '주식', '게시판'
    ],
    text: '시작~'
  }),
  methods: {
    home () {
      (window.location.pathname !== '/') ? router.push('/') : router.go(0)
    }
  }
}
</script>

<style>

.basil {
background-color: #FFFBE6 !important;
}
.basil--text {
color: #356859 !important;
}
</style>

<template>
  <v-app>
    <div id="header">
      <head-layout/>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import HeadLayout from '@/components/HeadLayout'
export default {
  components: {
    HeadLayout
  }
}
</script>

<style scoped>
#header {
  height: 85px;
}
#content {
  margin: 0;
  padding: 0;
  height: 100%;
  //background: #d3d3d3;
}
</style>
// background: #333333;
// background: #f9f9f9;

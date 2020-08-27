<template>
  <v-app>
    <div id="header">
      <head-layout/>
    </div>
    <div id="content" >
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
div {
  border: //1px solid #ccc;
}
#header {
  height: 200px;
}

#content {
  margin-left: 100px;
  margin-right: 200px;
}
</style>

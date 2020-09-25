<template>
  <v-main>
    <news-list-form/>
  </v-main>
</template>
<script>
import NewsListForm from '@/components/stock/NewsListForm'

export default {
  name: 'NewsList',
  data () {
    return {
      newsData: []
    }
  },
  components: {
    NewsListForm
  }
}
</script>

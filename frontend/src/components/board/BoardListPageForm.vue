<template>
  <v-container fluid>
    <v-data-iterator

    >
      <v-main id="content">
        <slot name="boardList" class="font">
        </slot>
      </v-main>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: 'BoardListPageForm',
  data () {
    return {
      pageNum: 0
    }
  },
  props: {
    listArray: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: true,
      default: 5
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1
    },
    prevPage () {
      this.pageNum -= 1
    }
  },
  computed: {
    pageCount () {
      const listLen = this.listArray.length
      const listSize = this.pageSize

      let page = Math.floor(listLen / listSize)
      // 남는 데이터가 있으면 +1을 해주고, 딱 떨어지면 그냥 page로!
      if (listLen % listSize > 0) {
        page += 1
      }
      return page
    },
    paginatedData () {
      // 전체 들어온 데이터의 길이값을 보는 것.
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
      return this.listArray.slice(start, end)
    }
  }
}
</script>

<template>
  <v-main>
    <v-simple-table>
      <thead justify="center" class="blue-grey lighten-4">
        <tr>
          <th class="text-center" width="80">No.</th>
          <th class="text-center" width="320">제목</th>
          <th class="text-center" width="100">작성자</th>
        </tr>
      </thead>
      <!-- <board-list-page-form :list-array="pageArray"/> -->
      <tbody>
        <tr v-for="board in pageArray" :key="board.boardNo">
          <td align="center">{{ board.boardNo }}</td>
          <td align="center"><router-link :to="{ name: 'BoardReadPage',
                                                params: { boardNo: board.boardNo.toString() } }">{{ board.title }}</router-link></td>
          <td align="center">{{ board.writer }}</td>
        </tr>
      </tbody>
      <!-- <tbody>
        <tr v-for="board of boards" :key="board.title">
          <td style="color: gray">{{ board.boardNo }}</td> -->
          <!-- <td><a @click="clickBoards(board.boardNo)">{{ board.title }}</a></td> -->
       <!-- </tr>
      </tbody> -->
    </v-simple-table>
    <div class="text-right">
    <br><br>
      <v-btn @click="$router.push({ name: 'BoardRegisterPage' })" color="blue-grey lighten-2">Create New Board</v-btn>
    </div>
    <div class="text-center">
    <br><br>
      <v-pagination
        color="teal"
        v-model="page"
        :length="1"
      ></v-pagination>
    </div>
  </v-main>
</template>

<script>
import axios from 'axios'

/* eslint-disable no-unused-vars */

export default {
  data () {
    return {
      pageArray: [],
      page: 1
    }
  },
  created () {
    axios.get('http://localhost:5555/boards')
      .then(res => {
        console.log(res)
        this.pageArray = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

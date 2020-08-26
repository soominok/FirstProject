<template>
  <Layout>
    <template #content>
    <br><br>
      <router-link :to="{ name: 'BoardRegisterPage' }">
        Create New Board
      </router-link>
      <v-simple-table>
        <template v-slot:default>
          <thead>
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
        </template>
      </v-simple-table>
      <div class="text-center">
        <v-pagination
          color="teal"
          v-model="page"
          :length="1"
        ></v-pagination>
      </div>
    </template>
    <!--
    <div align="center">
      <h2>Vuetify Real Board List</h2>
      <router-link :to="{ name: 'BoardRegisterPage' }">
        Create New Board
      </router-link>
      <board-list-page-form :list-array="pageArray"/>
    </div>
    -->
  </Layout>
</template>

<script>
import axios from 'axios'
// import BoardListPageForm from '@/components/BoardListPageForm.vue'
import Layout from '../components/Layout'

export default {
  name: 'BoardListPage',
  components: {
    // BoardListPageForm,
    Layout
  },
  data () {
    return {
      pageArray: [],
      page: 1
    }
  },
  // 빠르게 하기 위해서 여기에 그냥 axios 해버리기!
  // BoardListPage.vue => actions.js => axios.get 부분 가져오기
  // 원래는 actions.js에 적어줘야 함!!! 그냥 빠르게 끝내기 위해서 여기에 적기!
  // 게시판 글을 요청함. -> 요청한 것을 pageArray에 전달함.
  // actions, mutations, states 등으로 나눠서 적어주기!
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

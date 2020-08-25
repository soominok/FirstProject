import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
  FETCH_BOARD_LIST,
  FETCH_BOARD
} from './mutation-types'

import axios from 'axios'
// import router from '../router'

export default {
  login ({ commit }, payload) {
    console.log('Actions login()')
    return axios.post(`http://localhost:5555/api/authenticate?username=${payload.userId}&password=${payload.userPw}`, {
      username: payload.userId,
      userword: payload.userPw
    }).then(res => {
      console.log('Actions after post')
      const { authorization } = res.headers
      const accessToken = authorization.substring(7)
      console.log('Access Token: ', accessToken)

      commit(SET_ACCESS_TOKEN, accessToken)

      return axios.get('http://localhost:5555/users/myinfo')
    }).then(res => {
      console.log('After Get Auth Info')
      commit(SET_MY_INFO, res.data)
    })
  },
  loginByToken ({ commit }, token) {
    commit(SET_ACCESS_TOKEN, token)
    return axios.get('http://localhost:5555/users/myinfo')
      .then(res => {
        commit(SET_MY_INFO, res.data)
      })
  },
  logout ({ commit }) {
    commit(DESTROY_MY_INFO)
    commit(DESTROY_ACCESS_TOKEN)
  },
  fetchBoardList ({ commit }) {
    return axios.get('http://localhost:5555/boards')
      .then(res => {
        commit(FETCH_BOARD_LIST, res.data)
      })
  },
  fetchBoard ({ commit }, boardNo) {
    console.log('fetchBoard ' + commit + ', boardNo = ' + boardNo)
    return axios.get(`http://localhost:5555/boards/${boardNo}`)
      .then(res => {
        console.log('fetchBoard - res: ' + res.data)
        commit(FETCH_BOARD, res.data)
      })
  }
//   async boardFind ({ commit }, category) {
//    axios.get('http://localhost:5555/' + `${category}`)
//      .then(({ data }) => {
//        commit('BOARDSTART', data)
//        if (window.location.pathname !== '/board') {
//          router.push('/board')
//        }
//      })
//  },
//  async boardFindOne ({ commit }, boardNo) {
//    axios.get('http://localhost:5555/boards' + `${boardNo}`)
//      .then(({ data }) => {
//        console.log('/boards/boardNo res: ' + data)
//        commit('FINDONE', data)
//        router.push('/boards/{boardNo}')
//      })
//  }
}

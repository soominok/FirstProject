import {
  // Login & SignUp
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
  // Board 생성
  FETCH_BOARD_LIST,
  FETCH_BOARD
} from './mutation-types'

import axios from 'axios'
import cookies from 'vue-cookies'

export default {

  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) {
      state.accessToken = accessToken
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      console.log('axios Auth: ' + axios.defaults.headers.common.Authorization)

      cookies.set('accessToken', accessToken, '1h')
    }
  },
  [SET_MY_INFO] (state, myinfo) {
    if (myinfo) {
      state.myinfo = myinfo
    }
  },
  [DESTROY_ACCESS_TOKEN] (state) {
    state.accessToken = ''
    delete axios.defaults.headers.common.Authorization
    cookies.remove('accessToken')
  },
  [DESTROY_MY_INFO] (state) {
    state.myinfo = null
  },
  [FETCH_BOARD_LIST] (state, boards) {
    state.boards = boards
  },
  [FETCH_BOARD] (state, board) {
    state.board = board
  }
}

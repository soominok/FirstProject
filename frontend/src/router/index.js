import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

import LoginPage from '../views/LoginPage.vue'
import AdminSetupPage from '../views/AdminSetupPage.vue'
import MemberRegisterPage from '../views/MemberRegisterPage.vue'
import MyInfoPage from '../views/MyInfoPage.vue'

import BoardListPage from '../views/BoardListPage.vue'
import BoardRegisterPage from '../views/BoardRegisterPage.vue'
import BoardReadPage from '../views/BoardReadPage.vue'
import BoardModifyPage from '../views/BoardModifyPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/keyword',
    name: 'Keyword',
    component: Main
  },
  {
    path: '/loginPage',
    name: 'LoginPage',
    components: {
      default: LoginPage
    }
  },
  {
    path: '/adminSetupPage',
    name: 'AdminSetupPage',
    components: {
      default: AdminSetupPage
    }
  },
  {
    path: '/memberRegisterPage',
    name: 'MemberRegisterPage',
    components: {
      default: MemberRegisterPage
    }
  },
  {
    path: '/myInfoPage',
    name: 'MyInfoPage',
    components: {
      default: MyInfoPage
    }
  },
  {
    path: '/board',
    name: 'BoardListPage',
    components: {
      default: BoardListPage
    }
  },
  {
    path: '/board/create',
    name: 'BoardRegisterPage',
    components: {
      default: BoardRegisterPage
    }
  },
  {
    path: '/board/:boardNo',
    name: 'BoardReadPage',
    components: {
      default: BoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/board/boardNo/edit',
    name: 'BoardModifyPage',
    components: {
      default: BoardModifyPage
    },
    // boolean 모드 -> 이 옵션을 설정하면 route.params가 컴포넌트의 props에 자동 설정됨 (넘어갈 때 항상 참값이 자동으로 생성되는 것).
    props: {
      default: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

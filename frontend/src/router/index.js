import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

import LoginPage from '../views/LoginPage.vue'
import AdminSetupPage from '../views/AdminSetupPage.vue'
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
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    components: {
      default: LoginPage
    }
  },
  {
    path: '/AdminSetupPage',
    name: 'AdminSetupPage',
    components: {
      default: AdminSetupPage
    }
  },
  {
    path: '/MyInfoPage',
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

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cookies from 'vue-cookies'
import vuex from 'vuex'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(cookies)
Vue.use(vuex)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

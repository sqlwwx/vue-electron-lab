import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

import store from './vuex/store'
import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')

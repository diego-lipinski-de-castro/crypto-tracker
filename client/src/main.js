// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = true
Vue.config.silent = false
Vue.config.devtools = true

import router from './router'

import api from './http'
Vue.prototype.$http = api

let eHub = new Vue()
Vue.prototype.$ehub = eHub

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  name: 'root',
  router,
  template: '<App/>',
  components: { App }
})

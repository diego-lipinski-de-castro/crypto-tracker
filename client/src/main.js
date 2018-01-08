// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = true
Vue.config.silent = false
Vue.config.devtools = true

import api from './http'

Vue.prototype.$http = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  name: 'root',
  router,
  template: '<App/>',
  components: { App }
})

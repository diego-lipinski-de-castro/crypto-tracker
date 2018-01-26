// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = true
Vue.config.silent = false
Vue.config.devtools = true

import { firebase, firebaseApp } from './firebase'
Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseApp = firebaseApp

import router from './router'
import store from './store'

import { sync } from 'vuex-router-sync'
sync(store, router)

import axios from 'axios'
Vue.prototype.$http = axios

import vueTouch from 'vue-touch'

const vueTouchOptions = {
	directivesToEnable: [
		'swipe-left',
		'swipe-right',
    'tap',
		'long-press-down'
	]
}

Vue.use(vueTouch, vueTouchOptions)

import app from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  name: 'root',
  router,
  store,
  template: '<app/>',
  components: { app }
})

import Vue from 'vue'
import Router from 'vue-router'

import fail from './../pages/fail'

Vue.use(Router)

function load (path) {
  try {
    return () => import(`./../${path}`)
  } catch (error) {
    console.log(error)
    return fail
  }
}

export default new Router({
  mode: 'hash',
  scrollBehavior: () => { y: 0 },
  routes: [
    {
      path: '/',
      name: 'home',
      component: load('pages/home')
    },
    {
      path: '/coin/:coin',
      name: 'coin',
      component: load('pages/coin')
    },
    {
      path: '*',
      name: 'fail',
      component: fail
    }
  ]
})

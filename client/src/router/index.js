import Vue from 'vue'
import Router from 'vue-router'

import fail from './../views/fail'

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
  linkActiveClass: 'menu-list-item-link-active',
  scrollBehavior: () => { y: 0 },
  routes: [
    {
      path: '/',
      name: 'home',
      component: load('views/home'),
      children: [
        {
          path: 'history/',
          name: 'history',
          component: load('pages/home-pages/history')
        },
        {
          path: 'marketshare/',
          name: 'marketshare',
          component: load('pages/home-pages/marketshare')
        },
        {
          path: 'percentage/',
          name: 'percentage',
          component: load('pages/home-pages/percentage')
        },
        {
          path: 'rawdata/',
          name: 'rawdata',
          component: load('pages/home-pages/rawdata')
        }
      ]
    },
    {
      path: '*',
      name: 'fail',
      component: fail
    }
  ]
})

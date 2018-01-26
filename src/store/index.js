import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase'

Vue.use(Vuex)

const SET_ONLINE = 'SET_ONLINE'
const TOGGLE_LOAD = 'TOGGLE_LOAD'
const TOGGLE_SIDEMENU = 'TOGGLE_SIDEMENU'
const SET_USER = 'SET_USER'

export default new Vuex.Store({
  state: {
    isOnline: true,
    isLoading: false,
    isSidemenuOpen: false,
    coins: require('./../assets/coins') || [],
    user: {
      data: null,
      providers: [
        { name: 'facebook', provider: new firebase.auth.FacebookAuthProvider()},
        { name: 'google', provider: new firebase.auth.GoogleAuthProvider()},
        { name: 'twitter', provider: new firebase.auth.TwitterAuthProvider()}
      ]
    }
  },
  mutations: {
    [SET_ONLINE] (state, isOnline) {
      state.isOnline = isOnline
    },
    [TOGGLE_LOAD] (state) {
      state.isLoading = !state.isLoading
    },
    [TOGGLE_SIDEMENU] (state) {
      state.isSidemenuOpen = !state.isSidemenuOpen
    },
    [SET_USER] (state, user) {
      state.user.data = user
    }
  },
  actions: {

    setIsOnline({commit}) {
      
      const status = window.navigator.onLine

      if(typeof status === 'undefined') {
        commit(SET_ONLINE, true)
      } else {
        commit(SET_ONLINE, status)
      }

    },

    toggleSidemenu({commit}) {
      commit(TOGGLE_SIDEMENU)
    },

    async login({commit}, provider) {

      try {

        await firebase.auth().signInWithPopup(provider)

        return true

      } catch(error) {
        
        console.log(error)
        return false

      }

    },

    async removeUser({commit}) {

      try {

        await firebase.auth().signOut()

        return true

      } catch(error) {
        console.log(error)
        return false
      }

    },

    async userLinkProviders({commit}, provider) {

      try {

        const response = await firebase.auth().currentUser.linkWithPopup(provider)

        return {
          success: true,
          data: response
        }

      } catch(error) {

        return {
          success: false,
          data: error
        }

      }

    }

  },
  getters: {
    getIsOnline: state => state.isOnline,
    getIsOnlineFn: state => () => state.isOnline,

    getIsLoading: state => state.isLoading,
    getIsLoadingFn: state => () => state.isLoading,

    getIsSidemenuOpen: state => state.isSidemenuOpen,
    getIsSidemenuOpenFn: state => () => state.isSidemenuOpen,

    getCoins: state => state.coins,
    getCoinsFn: state => () => state.coins,

    getUser: state => state.user,
    getUserFn: state => () => state.user
  }
})
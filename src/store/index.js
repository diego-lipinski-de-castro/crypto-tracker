import Vue from 'vue'
import Vuex from 'vuex'

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
    user: null
  },
  mutations: {
    [TOGGLE_LOAD] (state, isOnline) {
      state.isOnline = isOnline
    },
    [TOGGLE_LOAD] (state) {
      state.isLoading = !state.isLoading
    },
    [TOGGLE_SIDEMENU] (state) {
      state.isSidemenuOpen = !state.isSidemenuOpen
    },
    [SET_USER] (state, user) {
      state.user = user
    }
  },
  actions: {
    toggleSidemenu({ commit }) {
      commit(TOGGLE_SIDEMENU)
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
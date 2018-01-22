<template>

  <div id="app" v-cloak>

    <loader/>

    <nav-menu/>

    <side-menu/>
    
    <div class="router-content">
      <transition name='fade' mode='out-in'>
        <router-view class='content-inner'/>
      </transition>
    </div>

    <offline/>

  </div>
  
</template>

<script>

  import { navmenu, sidemenu, loader, offline } from './components/'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'app',
    components: {
      'nav-menu': navmenu,
      'side-menu': sidemenu,
      'loader': loader,
      'offline': offline
    },
    computed: {
      ...mapGetters([
        'getUser',
        'getIsSidemenuOpen'
      ])
    },
    methods: {
      ...mapMutations([
        'SET_USER',
        'TOGGLE_SIDEMENU'
      ])
    },
    mounted() {

      this.$router.beforeEach((to, from, next) => {

        if(this.getIsSidemenuOpen === true) {
          this.TOGGLE_SIDEMENU()
        }        

        if(this.getUser === null && to.name !== 'signin') {
          next('signin')
        } else {
          next()
        }

      })

      this.$firebase.auth().onAuthStateChanged(user => {
        this.SET_USER(user)

        if(this.getUser === null) {
          this.$router.push('signin')
        }
      })

    }
  }

</script>

<style lang="stylus">

  @import './assets/style/app.styl'

  [v-cloak]
    display none

  .fade-enter-active
  .fade-leave-active
    transition opacity 300ms

  .fade-enter
  .fade-leave-to
    opacity 0

  .router-content
    height 100%
    padding-top 60px
    
    .content-inner
      max-height 100%
      padding 10px

</style>


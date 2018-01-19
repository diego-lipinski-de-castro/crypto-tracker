<template>

  <div id="app">

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

  export default {
    name: 'app',
    components: {
      'nav-menu': navmenu,
      'side-menu': sidemenu,
      'loader': loader,
      'offline': offline
    }
  }

</script>

<style lang="stylus">

  @import './assets/style/app.styl'

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


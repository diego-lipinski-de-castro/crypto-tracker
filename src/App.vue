<template>

  <div id="app">

    <nav-menu/>
    
    <div class="content">
      <transition name='fade' mode='out-in'>
        <router-view class='content-inner'/>
      </transition>
    </div>

  </div>
  
</template>

<script>

  import { navmenu } from './components/'

  export default {
    name: 'app',
    components: {
      'nav-menu': navmenu
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

  .content
    height 100%
    padding-top 60px
    
    .content-inner
      max-height 100%
      padding 10px

</style>


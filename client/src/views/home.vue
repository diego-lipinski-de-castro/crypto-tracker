<template>
  
  <div class='home-page'>

    <nav-menu/>
    <side-menu :menu='menu'/>

    <div class="content">
      <transition name='slide-right'>
        <router-view class='content-inner'/>
      </transition>
    </div>

  </div>

</template>

<script>

  import { navmenu, sidemenu } from './../components/'
    
  export default {
    name: 'home',
    components: {
      'nav-menu': navmenu,
      'side-menu': sidemenu
    },
    data() {
      return {
        menu: [
          { label: 'History', link: 'history', icon: 'trending_up' },
          { label: 'Marketshare', link: 'marketshare', icon: 'track_changes' },
          { label: 'Percentage', link: 'percentage', icon: 'swap_vert' },
          { label: 'Raw', link: 'rawdata', icon: 'attach_money' }
        ]
      }
    }
  }

</script>

<style lang="stylus">

  .home-page
    height 100%

    .content
      padding-top 60px

      .content-inner
        max-height 100%
        padding 10px

</style>

<template>
  
  <div class='home-page'>

    <nav-menu/>
    <side-menu :menu='menu'/>

    <div class="content">
      <transition name='slide-right'>
        <router-view/>
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
          { label: 'History', link: 'history' },
          { label: 'Marketshare', link: 'marketshare' },
          { label: 'Percentage', link: 'percentage' },
          { label: 'Raw', link: 'rawdata' }
        ]
      }
    }
  }

</script>

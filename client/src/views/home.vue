<template>
  
  <div class='home-page'>

    <nav-menu/>
    <side-menu :menu='menu'/>

    <transition name='slide-right'>
      <router-view/>
    </transition>

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
        menu: []
      }
    }
  }

</script>

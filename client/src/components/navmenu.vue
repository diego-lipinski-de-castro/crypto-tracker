<template>
  
  <div class='nav-wrapper'>
    <nav class='nav'>      

      <div class="nav-inner">
        
        <div class="toggle-slot">

          <div class="open"></div>
          
          <div class="close"></div>

        </div>

      </div>

    </nav>
  </div>

</template>

<script>

  export default {
    name: 'navmenu',
    methods: {
      toggleSidemenu() {
        this.$ehub.$emit('toggleSidemenu')
      }
    }
  }

</script>

<style lang="stylus">

  .nav-wrapper
    position fixed
    top 0
    left 0
    right 0
    height 60px

    .nav
      height 100%
      background-color #a24dd1

      .nav-inner
        display flex
        height 100%

        .toggle-slot
          background-color white

</style>

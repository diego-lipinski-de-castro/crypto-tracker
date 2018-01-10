<template>
  
  <div class='nav-wrapper'>
    <nav class='nav'>      

      <div class='nav-inner'>

        <div class='title-slot'>
          <h1 class='title'> Crypto Tracker </h1>
        </div>

      </div>

    </nav>
  </div>

</template>

<script>

  export default {
    name: 'navmenu'
  }

</script>

<style lang="stylus">

  .nav-wrapper
    position fixed
    top 0
    left 0
    right 0
    height 60px
    box-shadow 0 5px 20px -5px rgba(0, 0, 0, 0.1)
    z-index 2

    .nav
      height 100%
      background-color #a24dd1

      .nav-inner
        display flex
        height 100%
        align-items center

        .title-slot
          .title
            color white
            font-weight lighter

</style>

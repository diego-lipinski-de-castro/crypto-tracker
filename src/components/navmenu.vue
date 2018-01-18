<template>
  
  <div class='nav-wrapper'>
    <nav class='nav'>      

      <div class='nav-inner'>

        <button @click='pushBack' :class='["back-button", { "no-root": !atRoot }]'> <i class="material-icons">arrow_back</i> </button>

        <h1 v-if='atRoot' class='title'> Crypto Tracker </h1>
        <h1 v-else class='title'> {{$router.currentRoute.params.coin}} </h1>

      </div>

    </nav>
  </div>

</template>

<script>

  export default {
    name: 'navmenu',
    computed: {
      atRoot() {
        return this.$route.path === '/'
      }
    },
    methods: {
      pushBack() {
        this.$router.go(-1)
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
    box-shadow 0 5px 20px -5px rgba(0, 0, 0, 0.1)
    z-index 2

    .nav
      height 100%
      background-color #a24dd1
      position relative

      .nav-inner
        display flex
        height 100%
        width 90%
        margin 0 auto
        align-items center

        .title
          color #fbf9fc
          font-family 'Montserrat', cursive
          transform translateX(-30px)
          transition transform 250ms ease-in-out

          &.no-root
            transform translateX(0)

        .back-button
          border 0
          height 60px
          width 60px
          // background-color #a24dd1
          background-color transparent
          color white
          display flex
          justify-content center
          align-items center
          outline 0
          margin-left -30px
          transform translateX(-60px)
          transition transform 250ms ease-in-out

          &.no-root
            transform translateX(0)

          i
            font-size 1.8rem

</style>
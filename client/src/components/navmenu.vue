<template>
  
  <div class='nav-wrapper'>
    <nav class='nav'>      

      <div class='nav-inner'>

        <div class='title-slot'>
          <transition name='bounce' mode='out-in'>
            <h1 class='title' v-if='atRoot'> Crypto Tracker </h1>
            <button @click='pushBack' class="back-button" v-else> <i class="material-icons">arrow_back</i> </button>
          </transition>
        </div>

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

  .bounce-enter-active
    animation bounce-in 300ms ease-in-out

  .bounce-leave-active
    animation bounce-in 300ms ease-in-out reverse

  @keyframes bounce-in
    0%
      transform scale(0)
    50%
      transform scale(1.1)
    100%
      transform scale(1)

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

        .title-slot
          display flex

          .title
            color #fbf9fc
            font-family 'Montserrat', cursive

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
            position absolute
            top 0
            left 0

            i
              font-size 1.8rem

</style>

<template>
  
  <div class='nav-wrapper'>
    <nav class='nav'>

      <div class='nav-inner'>

        <template v-if='!isSigning'>
          <transition name='switch-icon' mode='out-in'>

            <button class='nav-inner-icon-button' key='icon-menu' v-if='isRootPath' @click='toggleSidemenu'>
              <transition name='switch-icon' mode='out-in'>
              <i v-if='!getIsSidemenuOpen' key='icon-open' class='material-icons'>menu</i>
              <i v-else key='icon-close' class='material-icons'>close</i>
              </transition>
            </button>

            <button class='nav-inner-icon-button' key='icon-back' v-else @click='goHome'>
              <i class='material-icons'>arrow_back</i>
            </button>

          </transition>
        </template>

        <div class="nav-content">
          <transition name='swipe-title' mode='out-in'>
            <h1 key='static-title' class="title" v-if='isRootPath || isSigning'> Crypto Tracker </h1>
            <h1 key='dynamic-title' class='title upper' v-else> {{titleContent}} </h1>
          </transition>
        </div>

        <button :class='["nav-inner-icon-button search-button", { "hide-search-button": !isRootPath || isSigning || getIsSidemenuOpen }]'>
          <i class='material-icons'>search</i>
        </button>

      </div>

    </nav>
  </div>

</template>

<script>

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'navmenu',
    computed: {
      ...mapGetters([
        'getIsSidemenuOpen'
      ]),
      isRootPath() {
        return this.$route.path === '/'
      },
      isSigning() {
        return this.$route.path === '/sigin'
      },
      titleContent() {
        return this.$route.params.coin
      }
    },
    methods: {
      ...mapActions([
        'toggleSidemenu'
      ]),
      goHome() {
        this.$router.push('/')
      }
    }
  }

</script>

<style lang="stylus">

  .switch-icon-enter-active
    animation switch-icon 250ms ease-in-out

  .switch-icon-leave-active
    animation switch-icon 250ms ease-in-out reverse

  @keyframes switch-icon
    0%
      transform scale(0)

    50%
      transform scale(1.5)

    100%
      transform scale(1)

  .swipe-title-leave-active
  .swipe-title-enter-active
    transition transform 300ms linear, opacity 150ms linear

  .swipe-title-enter
    opacity 1
    transform translate(30px, 0)

  .swipe-title-leave-to
    opacity 0
    transform translate(30px, 0)

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
        align-items center
        justify-content space-between

        .nav-content
          height 100%
          width calc(100% - 120px)
          margin 0 auto
          display flex
          align-items center

          .title
            color #fbf9fc
            font-family 'Montserrat', sans-serif

            &.upper
              text-transform uppercase

        .nav-inner-icon-button
          width 60px
          height 60px
          border none
          background-color transparent
          color #fbf9fc
          outline none
          position absolute
          top 0
          left 0

          &.search-button
            left auto
            right 0
            transition all 250ms ease-in-out

            &.hide-search-button
              right -60px

</style>
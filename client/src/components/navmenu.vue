<template>
  
  <div class='nav-wrapper'>
    <nav class='nav'>      

      <div class='nav-inner'>
        
        <div :class='["toggle-slot", { "toggle-slot-open": isSidemenuOpen }]' @click='toggleSidemenu'>

          <div class='open'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div class='close'>
            <span></span>
            <span></span>
          </div>

        </div>

        <div class='title-slot'>
          <h1 class='title'> Crypto Tracker </h1>
        </div>

      </div>

    </nav>
  </div>

</template>

<script>

  export default {
    name: 'navmenu',
    data() {
      return {
        isSidemenuOpen: false
      }
    },
    methods: {
      toggleSidemenu() {
        this.$ehub.$emit('toggleSidemenu')
        this.isSidemenuOpen = !this.isSidemenuOpen
      }
    },
    mounted() {

      // this.$router.beforeEach()

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

      .nav-inner
        display flex
        height 100%
        align-items center

        .title-slot
          .title
            color white

        // toggle
        .toggle-slot
          flex 0 0 auto
          width 60px
          height 60px
          cursor pointer
          position relative

          &.toggle-slot-open
            .open
              span
                &:before
                  transform translateX(100%)
                
                &:after
                  transform translateX(200%)

            .close
              span
                transition-delay 450ms
                transform translateY(50%)  rotate(45deg) scaleX(1)

                &:last-child
                  transform translateY(-50%) rotate(-45deg) scaleX(1)

          .open
          .close
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)

          .open
            span
              display block
              width 18px
              height 2px
              margin-bottom 3px
              overflow hidden
              position relative

              &:before
              &:after
                content ''
                position absolute
                width 100%
                height 100%
                background-color white
                transform translateY(-200%)
                transition transform ease 300ms              

              &:after
                transform translateX(0)

              &:nth-child(2)
                &:before
                &:after
                  transition-delay 75ms

              &:last-child
                margin 0

                &:before
                &:after
                  transition-delay 150ms

          .close
            span
              display block
              width 18px
              height 2px
              background-color white
              transform translateY(50%) rotate(45deg) scaleX(0)
              transition transform ease 200ms

              &:last-child
                transform translateY(-50%) rotate(-45deg) scaleX(0)

</style>

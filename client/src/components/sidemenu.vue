<template>
  
  <div :class='["sidemenu-wrapper", { "sidemenu-open": isOpen }]'>

    <div class="sidemenu-overlay" @click='overlayClose'></div>

    <div class="sidemenu-inner">
      <ul class='menu-list'>
        <li v-for='(item, index) in menu' :key='index' class='menu-list-item'>
          
          <router-link :to='item.link' class='menu-list-item-link'>

            <span class="icon material-icons">
              {{item.icon}}
            </span>

            <span class="label">
              {{ item.label }} 
            </span>

          </router-link>

        </li>
      </ul>
    </div>

  </div>

</template>

<script>

  export default {
    name: 'sidemenu',
    props: {
      menu: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
      this.$ehub.$on('toggleSidemenu', this.toggleSidemenu)
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleSidemenu() {
        this.isOpen = !this.isOpen
      },
      overlayClose() {
        this.$ehub.$emit('toggleSidemenuOverlay')
      }
    }
  }

</script>

<style lang="stylus">

  .sidemenu-wrapper
    position fixed
    left -100%
    top 60px
    bottom 0
    transition all 100ms linear
    z-index 1

    &.sidemenu-open
      left 0
      right 0

      .sidemenu-overlay
        background-color rgba(0, 0, 0, 0.4)

      .sidemenu-inner
        left 0

    .sidemenu-overlay
      width 100%
      height 100%
      position absolute
      z-index 1
      background-color rgba(0, 0, 0, 0)
      transition background-color 200ms ease

    .sidemenu-inner
      left -60%
      width 60%
      height 100%
      position absolute
      z-index 2
      background-color #fbf9fc
      box-shadow 20px 0 20px -15px rgba(0, 0, 0, 0.1)
      transition left 300ms ease

      .menu-list // ul
        .menu-list-item // li
          display flex

          .menu-list-item-link // a-router-link
            text-decoration none
            display flex
            width 100%
            align-items center
            padding 20px
            color #282828
            transition box-shadow ease 150ms

            &.menu-list-item-link-active
              &:after
                content ''
                display block
                background-color #a24dd1
                width 10px
                height 10px
                border-radius 50%
                position absolute
                right 20px

            &:active
            &:focus
            &:visited
              color #282828

            &:active
              box-shadow inset 0 0 10px #a24dd1 !important

            &:focus
              outline none
              box-shadow inset -5px 0 0 0 #a24dd1

            span
              display block

              &.icon
                margin-right 20px
                
</style>

<template>
  
  <div :class='["sidemenu-wrapper", { "sidemenu-open": isOpen }]'>

    <div class="sidemenu-overlay"></div>

    <div class="sidemenu-inner">
      <ul class='menu-list'>
        <li v-for='(item, index) in menu' :key='index'>
          {{item}}
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
    z-index -1
    transition all 100ms linear

    &.sidemenu-open
      left 0
      right 0

      .sidemenu-overlay
        background-color rgba(0, 0, 0, 0.2)

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

</style>

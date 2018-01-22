<template>

  <div :class='["offline-wrapper", { "offline-hidden": getIsOnline }]'>

    <button class="retry">
      Connect
    </button>

    <span class='offline-text'>
      You're offline
    </span>

  </div>

</template>

<script>

  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'offline',
    computed: {
      ...mapGetters([
        'getIsOnline'
      ])
    },
    methods: {
      ...mapActions([
        'setIsOnline'
      ])
    },
    mounted() {

      window.addEventListener('online', this.setIsOnline)
      window.addEventListener('offline', this.setIsOnline)

    }
  }

</script>

<style lang='stylus'>

  .offline-wrapper
    position fixed
    bottom 0
    left 0
    right 0
    height 60px
    display flex
    align-items center
    justify-content space-between
    background-color rebeccapurple
    transition all 250ms ease-out

    &.offline-hidden
      bottom -60px

    .retry
      border none
      background-color #a24dd1
      color white
      height 40px
      margin-left 10px
      width 150px
      font-family 'Montserrat', sans-serif
      font-weight 600
      text-transform uppercase
      box-shadow 4px 4px 0 0 darken(rebeccapurple, 20)
      outline none
      transition all 50ms linear

      &:active
        margin-top -2px
        transform translateX(2px) translateY(2px)
        box-shadow 2px 2px 0 0 darken(rebeccapurple, 20)

    .offline-text
      color #fbf9fc
      margin-right 30px
      font-size 1.2rem

</style>



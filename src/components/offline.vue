<template>

  <div class='offline-wrapper'>

    <button class="retry">
      Connect
    </button>

    <span class='offline-text'>
      You're offline
    </span>

  </div>

</template>

<script>
  
  export default {
    name: 'offline'
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

    .retry
      border none
      background-color #a24dd1
      color white
      height 50px
      margin-left 5px
      width 150px

    .offline-text
      color #fbf9fc
      margin-right 30px
      font-size 1.2rem

</style>



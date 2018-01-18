<template>
  
  <div class='page-wrapper'>

    <div class="notfound-wrapper">

      <h2 class='nf-desc'> The page you were looking for couldn't be loaded or wasn't found :( </h2>

      <button class='nf-action nf-btn' @click='reload'> Try again </button>
      <router-link class='nf-action nf-link' to='/'> Go home </router-link>
      <button class='nf-action nf-btn' @click='pushBack'> Go back </button>

    </div>

  </div>

</template>

<script>
    
  export default {
    name: 'fail',
    methods: {
      reload() {
        this.$router.go()
        // window.location.reload(true)
      },
      pushBack() {
        this.$router.go(-1)
      }
    }
  }

</script>

<style lang="stylus">

  .notfound-wrapper
    display flex
    height 100%
    flex-direction column
    align-items center
    justify-content center

    .nf-desc
      text-align center
      color #282828
      padding 20px
      margin-bottom 10px

    .nf-action
      background-color #a24dd1
      color #fbf9fc
      font-size 1rem
      text-transform uppercase
      margin 10px
      line-height 1
      padding 15px
      font-weight bold !important
      width 50%
      text-align center
      box-shadow inset -10px 0 0 0 rebeccapurple
      font-family 'Roboto', sans-serif

      &.nf-btn
        border none

      &.nf-link
        text-decoration none

</style>

<template>
  
  <div class='page-wrapper'>

    <ul class="coins-list">

      <li v-for='coin in coins' :key='coin' class='coin-card'>

        <div class="c-img-wrap">
          <img
            class='c-img'
            :src="getImagePath(coin)" 
            :alt="coin" 
            :width='`${imgSize}px`' 
            :height='`${imgSize}px`'>
        </div>        

        <h3 class='c-title'> {{coin}} </h3>

        <router-link class='c-button-link' :to='`coin/${coin}`'> Overview </router-link>

      </li>

    </ul>

  </div>

</template>

<script>
    
  export default {
    name: 'home',
    data() {
      return {
        coins: require('./../assets/coins') || [],
        imgSize: '64'
      }
    },
    methods: {
      getImagePath(path) {
        const img = require(`./../assets/icons/icon/${path}.svg`)
        return img
      }
    }
  }

</script>

<style lang="stylus">

  .page-wrapper
    padding 10px

  .coins-list
    list-style none
    display flex
    flex-wrap wrap

    .coin-card
      outline 4px solid lighten(#a24dd1, 15)
      border 2px solid #a24dd1
      margin 10px
      background-color #fbf9fc
      width calc(50% - 20px)

      .c-img-wrap
        display flex
        justify-content center
        padding 20px 0 15px 0

      .c-title
        color #282828
        text-transform uppercase
        text-align center
        padding-bottom 15px
        // font-size 1rem
        font-family 'Joti One'
        font-weight bold

      .c-button-link
        background-color #a24dd1
        color #fbf9fc
        text-decoration none
        display block
        text-align center
        padding 12px 5px
        font-size 1.15rem
        font-family 'Roboto', sans-serif
        font-weight 900

        &:active
        &:focus
        &:visited
        &:hover
          color #fbf9fc

</style>

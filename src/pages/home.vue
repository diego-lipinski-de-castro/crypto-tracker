<template>
  
  <div class='page-wrapper'>

    <ul class="coins-list" v-if='hasCoins'>

      <li v-for='(coin, index) in getCoins' :key='index' class='coin-card'>

        <div class="coin-wrap">
          <div class="c-img-wrap">
          <img
              class='c-img'
              :src="getImagePath(coin.id)" 
              :alt="coin" 
              :width='`${imgSize}px`' 
              :height='`${imgSize}px`'>
          </div>        

          <h3 class='c-title'> {{coin.id}} </h3>
          <h5 class='c-subs' v-if='coin.name'> {{coin.name}} </h5>
        </div> 

        <router-link class='c-button-link' :to='`coin/${coin.id}`'> Overview </router-link>

      </li>

    </ul>

  </div>

</template>

<script>

  import { mapGetters } from 'vuex'
    
  export default {
    name: 'home',
    data() {
      return {
        imgSize: '64'
      }
    },
    computed: {
      ...mapGetters([
        'getCoins'
      ]),
      hasCoins() {
        return this.getCoins.length > 0
      }
    },
    methods: {
      getImagePath(path) {
        const img = require(`./../assets/icons/${path}.svg`)
        return img
      }
    }
  }

</script>

<style lang="stylus">

  .coins-list
    list-style none
    display inline-flex
    flex-wrap wrap

    .coin-card      
      margin 10px
      border-radius 10px
      // height 210px
      width calc(50% - 20px)
      box-shadow 0 0 4px 1px rgba(0, 0, 0, 0.1)

      @media (min-width 540px)
        width calc(33.33333% - 20px)

      @media (min-width 698px)
        width calc(25% - 20px)

      @media (min-width 990px)
        width calc(20% - 20px)

      .coin-wrap
        height calc(100% - 55px)
        background-color #fbf9fc
        border 2px inset #a24dd1
        border-top-left-radius 10px
        border-top-right-radius 10px

        .c-img-wrap
          display flex
          justify-content center
          padding 20px 0 15px 0

        .c-title
          color #282828
          text-transform uppercase
          text-align center
          font-size 1rem
          font-family 'Joti One'
          font-weight bold

        .c-subs
          padding 5px 0
          text-align center
          font-weight lighter
          color lighten(#282828, 40)

      .c-button-link
        background-color #a24dd1
        color #fbf9fc
        text-decoration none
        display block
        text-align center
        padding 14px 7px
        font-size 1.15rem
        font-family 'Roboto', sans-serif
        font-weight 900
        border-bottom-left-radius 10px
        border-bottom-right-radius 10px

        &:active
        &:focus
        &:visited
        &:hover
          color #fbf9fc

</style>

<template>
  
  <div class='page-wrapper'>
     
    <template v-if='noData'>

      <div class='no-data-wrapper'>

        <h3 class='no-data-text'> This coin has no data yet. </h3>
        <button class='no-data-btn' @click='pushBack'> Go back </button>
        <router-link class='no-data-btn' to='/'> Go home </router-link>

      </div>

    </template>

    <template v-else>

      {{coinData}}
      
    </template>

  </div>

</template>

<script>

  import { mapGetters } from 'vuex'
    
  export default {
    name: 'coin',
    data() {
      return {
        coinId: null,
        coinData: null,
        params: {}
      }
    },
    computed: {
      ...mapGetters([
        'getIsLoading'
      ]),
      noData() {
        return this.coinData === null && this.getIsLoading === false
      }
    },
    methods: {

      fetchCoinData(coinId) {
      },
      
      pushBack() {
        this.$router.go(-1)
      }

    },
    mounted() {
      this.coinId = this.$route.params.coin
      this.fetchCoinData(this.coinId)
    }
  }

</script>

<style lang="stylus">

  .no-data-wrapper
    display flex
    height 100%
    flex-direction column
    align-items center
    justify-content center

    .no-data-text
      text-align center
      color #282828
      // padding 20px
      // margin-bottom 10px

    .no-data-btn
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
      font-family 'Roboto', sans-serif
      border none
      box-shadow inset -10px 0 0 0 rebeccapurple
      text-decoration none

</style>

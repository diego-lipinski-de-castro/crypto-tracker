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
        params: {
          currency: 'usd',
          selectedTime: []
        }
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

        let coinData = {
          cryptonator: null,
          cryptocompare: {
            price: null,
            pricehistorical: {
              today: null,
              aweek: null,
              amonth: null
            },
            histoday: null
          }
        }

        // await Promise.all[]

        this.$http(`https://api.cryptonator.com/api/full/${coinId}-${this.params.currency}`)
        .then(res => {
          coinData.cryptonator = res.data
        })
        .catch(error => {
          console.log(error)
        })

        this.$http(`https://min-api.cryptocompare.com/data/price?fsym=${coinId.toUpperCase()}&tsyms=${this.params.currency.toUpperCase()}`)
        .then(res => {
          coinData.cryptocompare.price = res.data
        })
        .catch(error => {
          console.log(error)
        })

        this.$http(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${coinId.toUpperCase()}&tsyms=${this.params.currency.toUpperCase()}&ts=${new Date().getTime()}`)
        .then(res => {
          coinData.cryptocompare.pricehistorical.today = res.data[`${coinId.toUpperCase()}`]
        })
        .catch(error => {
          console.log(error)
        })

        this.$http(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${coinId.toUpperCase()}&tsyms=${this.params.currency.toUpperCase()}&ts=${new Date().setDate(new Date().getDate() - 7)}`)
        .then(res => {
          coinData.cryptocompare.pricehistorical.aweek = res.data[`${coinId.toUpperCase()}`]
        })
        .catch(error => {
          console.log(error)
        })

        this.$http(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${coinId.toUpperCase()}&tsyms=${this.params.currency.toUpperCase()}&ts=${new Date().setDate(new Date().getMonth() - 1)}`)
        .then(res => {
          coinData.cryptocompare.pricehistorical.amonth = res.data[`${coinId.toUpperCase()}`]
        })
        .catch(error => {
          console.log(error)
        })

        // this.$http(`https://www.cryptocompare.com/api/data/coinsnapshot/?fsym=${coinId.toUpperCase()}&tsym=${this.params.currency.toUpperCase()}`)
        // .then(res => {
        //   coinData.cryptocompare.pricehistorical.amonth = res.data[`${coinId.toUpperCase()}`]
        // })
        // .catch(error => {
        //   console.log(error)
        // })

        this.$http(`https://min-api.cryptocompare.com/data/histoday?fsym=${coinId.toUpperCase()}&tsym=${this.params.currency.toUpperCase()}&limit=30&aggregate=3&e=CCCAGG`)
        .then(res => {
          coinData.cryptocompare.histoday = res.data
        })
        .catch(error => {
          console.log(error)
        })

        

        window.data = coinData

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

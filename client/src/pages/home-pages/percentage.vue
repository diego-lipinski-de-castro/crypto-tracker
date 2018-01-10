<template>
  
  <div class="page-wrapper">

    <template v-if='hasData'>

      <ul class='coin-list'>

        <template v-for='(coin, index) in 30'>

          <longpress duration='3' :value='data[coin]' :on-confirm='togglePopup' :key='index'
          pressing-text=""
          action-text="">
            <li  class='coin-tile'>
            
              <img :src='getImagePath(data[coin].id)' height='64' width='64' class='coin-img'>

              <div class="coin-subtitles">
                <h3 class="coin-symbol"> {{data[coin].symbol}} </h3>
                <span class="coin-name"> {{data[coin].name}} </span>
              </div>

            </li>
          </longpress>

        </template>

      </ul>

    </template>

  </div>

</template>

<script>

  import Longpress from 'vue-longpress'
    
  export default {
    name: 'percentage',
    components: {Longpress},
    data() {
      return {
        data: []
      }
    },
    computed: {
      hasData() {
        return this.data.length > 0
      }
    },
    methods: {

      fetchData() {

        this.$http('percentage.json')
          .then(res => {
            this.data = res.data
          })
          .catch(err => {
            console.log(err)
          })  

      },

      togglePopup(coinData) {
        console.log(coinData)
      },

      getImagePath(coinName) {
        const path = coinName.replace(/ /g, '-').toLowerCase()
        return `https://files.coinmarketcap.com/static/img/coins/64x64/${path}.png`
      },

      getCoinStats(coinData) {

        let obj = {
          color: 'inherit',
          icon: 'close'
        }

        if(coinData > 0) {

          obj.color = '#5ff442'
          obj.icon = 'trending_up'

        } else if(coinData < 0) {

          obj.color = '#f44141'
          obj.icon = 'trending_down'

        } else if(coinData == 0) {

          obj.color = '#f4f141'
          obj.icon = 'trending_flat'

        }
        
        return obj

      }

    },
    mounted() {
      this.fetchData()
    }
  }

</script>

<style lang="stylus">

  .coin-list
    list-style none
    display flex
    flex-wrap wrap
    justify-content space-around

    .coin-tile
      width 128px
      height 165px
      display flex
      justify-content center
      align-items center
      flex-direction column
      margin 10px
      padding 10px
      cursor pointer
      border 4px solid #a24dd1
      background-color #fbf9fc

      img.coin-img
        padding 5px
        margin-bottom 10px

      .coin-subtitles
        display block
        width 70%
        margin 0 auto
        padding 15px 5px 5px 5px
        text-align center
        border-top 2px solid #282828

        .coin-symbol
          color #282828

        .coin-name
          color rgba(#282828, 50%)
          font-size 0.8rem
          display block
          white-space nowrap
          overflow hidden
          text-overflow ellipsis

</style>
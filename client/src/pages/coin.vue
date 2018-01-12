<template>
  
  <div class='page-wrapper'>
     
    <template v-if='noData'>

    </template>

    <template v-else>
      
    </template>

  </div>

</template>

<script>
    
  export default {
    name: 'coin',
    data() {
      return {
        loading: false,
        coinId: null,
        coinData: null
      }
    },
    computed: {
      noData() {
        return this.coinData === null && this.loading === false
      }
    },
    methods: {
      fetchCoinData(coinId) {

        this.loading = true

        this.$http.get(`${coinId}.json`)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
        .then(() => {
          this.loading = false
        })

      }
    },
    mounted() {
      this.coinId = this.$route.params.coin
      this.fetchCoinData(this.coinId)
    }
  }

</script>

<style lang="stylus">
</style>

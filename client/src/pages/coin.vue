<template>
  
  <div class='page-wrapper'>
     
    <template v-if='noData'>

      <h3 class='no-data-text'> This coin has no data yet. </h3>
      <button class="no-data-btn" @click='pushBack'> Go back </button>

    </template>

    <template v-else>

      {{coinData}}
      
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
          this.coinData = res.data
        })
        .catch(error => {
          console.log(error)
        })
        .then(() => {
          this.loading = false
        })

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
</style>

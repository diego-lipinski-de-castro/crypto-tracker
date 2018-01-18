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
        coinId: null,
        coinData: null,
        loading: false,
        params: {

        }
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

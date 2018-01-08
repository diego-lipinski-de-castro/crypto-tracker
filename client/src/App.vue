<template>

  <div id="app" v-cloak>
    
    <transition name='fade' mode='out-in'>
      <router-view/>
    </transition>

  </div>
  
</template>

<script>

  export default {
    name: 'app'
  }

</script>

<style lang="stylus">
  @import url('./assets/style/app.styl')
</style>


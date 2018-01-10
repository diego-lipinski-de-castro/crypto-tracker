<template>

  <div id="app" v-cloak>

    <nav-menu/>
    
    <div class="content">
      <transition name='fade' mode='out-in'>
        <router-view class='content-inner'/>
      </transition>
    </div>

  </div>
  
</template>

<script>

  export default {
    name: 'app'
  }

</script>

<style lang="stylus">
  @import './assets/style/app.styl'
</style>


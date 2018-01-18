<template>
  
  <div class='page-wrapper'>

    <div class="notfound-wrapper">

      <h2> The page you were looking for couldn't be loaded or wasn't found. :( </h2>

      <button> Try again </button>
      <router-link to='/'> Go home </router-link>

    </div>

  </div>

</template>

<script>
    
  export default {
    name: 'fail'
  }

</script>

<style lang="stylus">
</style>

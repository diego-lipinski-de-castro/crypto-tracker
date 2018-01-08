<template>
  
  <div :class='["sidemenu-wrapper", { "sidemenu-open": isOpen }]'>
    <div class='sidemenu-inner'>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'sidemenu',
    props: {
      menu: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
      this.$ehub.$on('toggleSidemenu', this.toggleSidemenu)
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleSidemenu() {
        this.isOpen = !this.isOpen
      }
    }
  }

</script>
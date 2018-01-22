<template>

  <transition name='pushin'>
    <div v-if='getIsSidemenuOpen' key='menu' class='sidemenu-wrapper'>

      <div v-if='getUser === null' class="no-user">
        No user signed error
      </div>
      
      <div v-else class='user-card'>
        
        <div class='header'>
          <img :src='getUser.photoURL' alt='user-photo' height='192' width='192'>
        </div>

        <div class='info'>

          <ul class='data-info'>

            <li>
              <span class='slot-left'></span>
              <span class='slot-right'></span>
            </li>

            <li>
              <span class='slot-left'></span>
              <span class='slot-right'></span>
            </li>

            <li>
              <span class='slot-left'></span>
              <span class='slot-right'></span>
            </li>

            <li>
              <span class='slot-left'></span>
              <span class='slot-right'></span>
            </li>

          </ul>

          <ul class="providers-info">
            {{getProviderData()}}
          </ul>

        </div>

        <div class='bottom'>

        </div>

      </div>

    </div>

    <div v-else key='placeholder'></div>

  </transition>
  
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'sidemenu',
    computed: {
      ...mapGetters([
        'getIsSidemenuOpen',
        'getUser'
      ])
    },
    methods: {
      ...mapActions([
        'toggleSidemenu'
      ]),
      getProviderData() {

        let providers;

        providers = this.getUser.providerData.map(profile => {
          return {
            providerId: profile.providerId,
            uid: profile.providerId,
            displayName: profile.providerId,
            email: profile.providerId,
            photoUrl: profile.providerId,
          }
        })

        return providers

      }
    }
  }

</script>

<style lang='stylus'>

  .pushin-enter-active
    animation pushin 250ms ease-in-out

  .pushin-leave-active
    animation pushin 250ms ease-in-out reverse

  @keyframes pushin
    0%
      transform translateX(-100%)
    100%
      transform translateX(0)

  .sidemenu-wrapper
    position fixed
    left 0
    top 60px
    bottom 0
    width 100%
    background-color #fbf9fc
    z-index 3

    .user-card
      padding 40px 10px 10px 10px

      .header
        display flex
        justify-content center
        align-items center

        img
          border-radius 50%

</style>

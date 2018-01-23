<template>

  <transition name='pushin'>
    <div v-if='getIsSidemenuOpen' key='menu' class='sidemenu-wrapper'>

      <div v-if='getUser.data === null' class="no-user">
        No user signed error
      </div>
      
      <div v-else class='user-card'>
        
        <div class='header'>
          <img :src='getUser.data.photoURL' alt='user-photo' height='192' width='192'>
        </div>

        <div class='info'>

          <ul class='user-info'>

            <li>
              <span class='info-text'>
                {{getUser.data.displayName}}
              </span>
            </li>

            <li>
              <span class='info-text'>
                {{getUser.data.email}}
              </span>
            </li>

            <li>
              <span class='info-text'>
                {{getUser.data.emailVerified}}
              </span>
            </li>

          </ul>

          <div class='providers-wrapper'>

            <button class='provider facebook' @click='linkProvider("facebook")'>
              <img height='24' width='24' src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg">
              <span class='provider-text'> Facebook </span>
              <span class='status'></span>
            </button>

            <button class='provider google' @click='linkProvider("google")'>
              <img height='24' width='24' src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg">
              <span class='provider-text'> Google </span>
              <span class='status'></span>
            </button>

            <button class='provider twitter' @click='linkProvider("twitter")'>
              <img height='24' width='24' src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg">
              <span class='provider-text'> Twitter </span>
              <span class='status'></span>
            </button>

          </div>

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
        'toggleSidemenu',
        'userLinkProviders'
      ]),
      getProviderData() {

        let providers;

        providers = this.getUser.data.providerData.map(profile => {
          return {
            providerId: profile.providerId,
            uid: profile.providerId,
            displayName: profile.providerId,
            email: profile.providerId,
            photoUrl: profile.providerId,
          }
        })

        return providers

      },
      linkProvider(providerName) {

        const provider = this.getUser.providers.filter(provider => provider.name === providerName)[0].provider

        this.userLinkProviders(provider)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })

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
    overflow-y scroll

    .user-card
      padding 40px 20px

      .header
        display flex
        justify-content center
        align-items center
        margin 20px

        img
          border-radius 50%
          margin 10px 0

      .info
        padding 20px

        .user-info
          list-style none

        .providers-wrapper
          display flex
          flex-direction column
          align-items center

          .provider
            margin 10px
            border none
            text-transform uppercase
            padding 15px 25px
            color #fff
            display flex
            width 100%
            width 240px
            align-items center
            box-shadow 0 0 4px 1px rgba(0, 0, 0, 0.1)
            border-radius 3px
            outline none
            transition all 300ms ease-in

            &:active
              box-shadow 0 0 5px 3px rgba(0, 0, 0, 0.2)

            span.provider-text
              padding-left 20px
              font-family 'Roboto', sans-serif
              font-weight 500
              letter-spacing 1px

            &.facebook
              background-color #3b5998
            
            &.google
              background-color #fff
              color #757575

            &.twitter
              background-color #55acee

</style>

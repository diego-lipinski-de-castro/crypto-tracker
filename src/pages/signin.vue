<template>

  <div class="page-wrapper signin-wrapper">

    <div :class='["error-info", { "show-error": error }]'>
      <p> Operation wasn't successful. </p>
    </div>
    
    <div class="signin-card">

      <div class="header">
        <h2> Sign In </h2>
      </div>

      <div class="providers-wrapper">

        <button class='provider facebook' @click='signin("facebook")'>
          <img height='24' width='24' src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg">
          <span> Facebook </span>
        </button>

        <button class='provider google' @click='signin("google")'>
          <img height='24' width='24' src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg">
          <span> Google </span>
        </button>

        <button class='provider twitter' @click='signin("twitter")'>
          <img height='24' width='24' src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg">
          <span> Twitter </span>
        </button>

      </div>

    </div>

  </div>

</template>

<script>

  import { mapActions } from 'vuex'

  export default {
    name: 'sigin',
    data() {
      return {
        providers: [
          { name: 'facebook', provider: new this.$firebase.auth.FacebookAuthProvider()},
          { name: 'google', provider: new this.$firebase.auth.GoogleAuthProvider()},
          { name: 'twitter', provider: new this.$firebase.auth.TwitterAuthProvider()}
        ],
        error: false
      }
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      signin(providerName) {

        if(this.error) this.error = false

        const provider = this.providers.filter(provider => provider.name === providerName)[0].provider

        this.login(provider)
        .then(res => {
          
          console.log(res)

          if(res === true) {
            this.$router.push('/')
          } else {
            this.error = true
            setTimeout(() => {
              this.error = false
            }, 6000)
          }

        })
        .catch(error => {
          console.log(error)
        })

      }
    }
  }

</script>

<style lang="stylus">

  .signin-wrapper
    display flex
    flex-direction column
    justify-content center
    align-items center

    .error-info
      position absolute
      top 80px
      background-color #db4437
      padding 20px
      color #fbf9fc
      font-size 1.1rem
      border-radius 3px
      transition all 250ms ease-in
      opacity 0
      transform translateY(-50px)

      &.show-error
        opacity 1
        transform translateY(0px)

    .signin-card
      background-color #fbf9fc
      box-shadow 0 0 3px 1px rgba(0, 0, 0, 0.1)
      border-radius 3px

      .header
        border-top-left-radius 3px
        border-top-right-radius 3px
        background-color #a24dd1
        color #fbf9fc
        text-align center
        padding 14px 7px
        font-size 1.15rem
        font-family 'Roboto', sans-serif
        font-weight 900

    .providers-wrapper
      .provider
        margin 20px
        border none
        text-transform uppercase
        padding 15px 25px
        color #fff
        display flex
        width 100%
        width 200px
        align-items center
        box-shadow 0 0 4px 1px rgba(0, 0, 0, 0.1)
        border-radius 3px
        outline none
        transition all 300ms ease-in

        &:active
          box-shadow 0 0 5px 3px rgba(0, 0, 0, 0.2)

        span
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



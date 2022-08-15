<template>
  <v-app id="login" class="center">
    <v-btn id="records" icon style="--p:2.3em;">
      <!-- <img src="@/assets/icons/records.svg" alt="records" style="--bs:drop-shadow(10px 5px 12px rgba(0, 0, 0, 0.25));--w:4.5em"> -->
    </v-btn>

    <v-main>
      <v-container class="spacea divcolmobile container">
        <aside class="divcol">
          <img id="back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/')">
          <h1 class="p">HELLO</h1>
          <img id="audio2" src="@/assets/images/audio2-login.png" alt="audio image 2" style="--w:clamp(25em,29vw,29em)">
        </aside>

        <aside class="container-card relative">
          <img id="audio" src="@/assets/images/audio-login.png" alt="audio image" style="--w:12em">

          <v-card class="card divcol jcenter" style="--w:100%;--h:29em;gap:4em;--bs:7px 8px 24px rgba(0, 0, 0, 0.25);--bg:rgba(245, 245, 245, 0.47);--br:0;--p:3em">
            <h3 class="p" style="max-width: 16ch">SIGN UP AND START LISTENING</h3>
            <div class="divcol gap1 font2">
              <v-btn class="btn" style="--mr:.5em" @click="prueba()">
                <img src="@/assets/logos/near.svg" alt="near">
                WITH NEAR WALLET
              </v-btn>
              
              <v-btn class="btn" style="--mr:.5em;--bg:#ffffff">
                <img src="@/assets/icons/email.svg" alt="near">
                WITH YOUR EMAIL
              </v-btn>
            </div>

            <span class="font2 tcenter" style="font-size:1.125em">
              Don't have an account yet? 
              <a href="#" class="bold">Register</a>
            </span>
          </v-card>
        </aside>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import * as nearAPI from 'near-api-js'
const { connect, keyStores, WalletConnection } = nearAPI

const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
  networkId: "testnet",
  keyStore, 
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

export default {
  name: "login",
  data() {
    return {
    }
  },
  mounted() {
    this.isSigned()
    this.getData()
  },
  methods: {
    prueba() {localStorage.setItem('logKey', 'in');this.$router.push('/')},
    async getData () {
      this.account = {}
      // connect to NEAR
      const near = await connect(config);
      // create wallet connection
      const wallet = new WalletConnection(near)
      this.accountId= wallet.getAccountId()

      if (wallet.isSignedIn()) {
        const url = "api/v1/profile/?wallet=" + this.accountId
        this.axios.defaults.headers.common.Authorization='token'
        this.axios.get(url)
          .then((response) => {
            if (response.data[0]){
              this.avatar = response.data[0].avatar
              this.$store.commit("Avatar", this.avatar)
            }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    async signIn () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      wallet.requestSignIn(
        'contract.nearbase.testnet'
      )
    },
    async isSigned () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        localStorage.setItem('logKey', 'in')
        this.$store.state.user.login = false
      }
    },
    async signOut () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      wallet.signOut()
      localStorage.setItem('logKey', 'out')
      this.$store.state.user.login = true
      this.$router.push({ path: '/' })
    },
  }
}
</script>

<style src="./Login.scss" lang="scss"></style>

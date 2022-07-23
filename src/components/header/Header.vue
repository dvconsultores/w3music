<template>
  <section id="header">
    <MenuHeader ref="menu"></MenuHeader>
    <v-app-bar id="headerApp" color="transparent" height="100px" fixed class="font2 isolate">
      <aside class="acenter gap2" style="padding-left:calc(48px + 2em">
        <aside class="sidebar divcol acenter jspace isolate" :class="{active: sidebar}">
          <v-btn icon @click="toggleFunc()">
            <img :src="require(`@/assets/icons/menu${positionFocus==0||positionFocus==16?'':'-active-sidebar'}.svg`)" alt="toggle">
          </v-btn>

          <div class="focus" :style="`--distanceInitial:${initialFocus};--distance:${positionFocus}px`" />

          <v-btn v-show="sidebar" v-for="(item,i) in dataSidebar" :key="i" icon @click="positionFocus=item.position" :class="{openMenuMarket: item.key=='market'}">
            <img :src="require(`@/assets/icons/${item.icon}.svg`)" alt="side bar icons">
          </v-btn>
        </aside>

        <v-text-field id="search" hide-details solo style="--max-w: 14.6875em;--p: 0 1.5em" class="eliminarmobile">
          <template v-slot:append>
            <img src="@/assets/icons/lupa.svg" alt="search">
          </template>
        </v-text-field>
      </aside>

      <v-btn icon style="--p:2.3em;">
        <img src="@/assets/icons/records.svg" alt="records" style="--bs:drop-shadow(10px 5px 12px rgba(0, 0, 0, 0.25));--w:4.5em">
      </v-btn>

      <aside class="acenter gap2">
        <v-btn class="btn eliminarmobile" @click="$router.push('/login')">LOG IN WITH NEAR</v-btn>
        <v-btn icon @click="$router.push('/login')">
          <img :src="require(`@/assets/icons/account.svg`)" alt="account" class="eliminarmobile">
          <img :src="require(`@/assets/icons/account-mobile.svg`)" alt="account" class="vermobile">
        </v-btn>
      </aside>
    </v-app-bar>
  </section>
</template>

<script>
import MenuHeader from "./MenuHeader.vue"
import * as nearAPI from 'near-api-js'

const theme = localStorage.getItem("theme");

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
  name: "header",
  components: { MenuHeader },
  i18n: require("./i18n"),
  created() {
    this.element = document.getElementById("theme");
    if (theme) {this.CambiarTheme(theme); this.$store.commit('OverlayMethod', theme)}
    if (theme == "light") {this.themeButton = true}
    if (theme == "dark") {this.themeButton = false}
  },
  computed: {
    perfil() {return this.$store.state.user.perfil},
  },
  data() {
    return {
      accountId: null,
      user: true,
      messages: 1,
      sidebar: false,
      initialFocus: 0,
      positionFocus: 0,
      dataSidebar: [
        { key:"market", icon: "market-active", position: 120 },
        { key:"stats", icon: "stats", position: 240 },
        { key:"chats", icon: "chats", position: 360 },
        { key:"settings", icon: "settings", position: 480  },
        { key:"faq", icon: "faq", position: 600  },
      ]
    };
  },
  mounted() {
    // responsive
    // this.responsive()
    // document.addEventListener('resize', this.responsive())

    this.isSigned()
    this.getData()
    this.LogState();
    
    /* search function */
    const search = document.getElementById('search')
    const filterItems = document.querySelectorAll('.filterItems')
    search.addEventListener('keyup',e=>{
      filterItems.forEach(item=>{
        item.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ?item.style.display='block':item.style.display='none'
        if (e.key=='Escape') {e.target.value = ''}
        // to delete at empty text field
        if (e.target.value == '') {item.style.display='none'}
      })
    })
    // to delete for default
    document.querySelectorAll('.filterItems').forEach(item=>{
      if (search.textContent == '') {item.style.display='none'}
    })
  },
  methods: {
    toggleFunc() {
      if (window.innerWidth <= 880) {
        this.$refs.menu.drawer=true
      } else {
        this.sidebar=!this.sidebar
        this.positionFocus=0
        if (this.sidebar==false) {this.initialFocus=0}
        else {this.initialFocus=16}
      }
    },
    // responsive() {
    //   if (window.innerWidth <= 880) {
    //     console.log('mobile')
    //   } else {
    //     console.log('desktop')
    //   }
    // },
    CambiarTheme(theme) {
      this.$store.dispatch("CambiarTheme", { theme, element: this.element });
      this.themeButton = !this.themeButton;
    },
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
    // use for update account log states
    LogState() {
      if (localStorage.getItem('logKey') == 'in') {this.user = false}
      if (localStorage.getItem('logKey') == 'out') {this.user = true}
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
        this.user = false
      }
    },
    async signOut () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      wallet.signOut()
      localStorage.setItem('logKey', 'out')
      this.user = true
      this.$router.push({ path: '/' })
    },
  },
};
</script>

<style src="./Header.scss" lang="scss" />

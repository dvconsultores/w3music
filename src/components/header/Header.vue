<template>
  <section id="header">
    <MenuHeader ref="menu"></MenuHeader>
    <v-app-bar id="headerApp" color="transparent" height="100px" absolute class="font2 isolate">
      <aside class="acenter gap2" style="padding-left:calc(48px + 2em">
        <aside class="sidebar divcol acenter jspace isolate" :class="{active: sidebar}">
          <v-btn icon @click="toggleFunc()">
            <img :src="require(`@/assets/icons/menu${positionFocus==0||positionFocus==16?'':'-active-sidebar'}.svg`)" alt="toggle">
          </v-btn>

          <div class="focus" :style="`--distanceInitial:${initialFocus};--distance:${positionFocus}px`" />

          <v-tooltip v-for="(item,i) in dataSidebar" :key="i" right color="var(--primary)">
            <template v-slot:activator="{ on, attrs}">
              <v-btn v-show="sidebar" icon @click="positionFocus=item.position; dataSidebar.forEach(e=>{e.active=false});item.active=true"
                :class="{openMenuMarket: item.key=='market', active: item.active}" v-on="item.active?null:on" v-bind="item.active?null:attrs">
                <img :src="require(`@/assets/icons/${item.icon}.svg`)" alt="side bar icons">
              </v-btn>
            </template>

            <span class="h9_em">{{item.name}}</span>
          </v-tooltip>
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
        <v-btn v-show="!user" class="btn eliminarmobile" @click="$router.push('/login')">LOG IN WITH NEAR</v-btn>

        <div :class="{acenter: user, contents: !user}" style="cursor:pointer;border-radius:4vmax" @click="()=>{console.log('hola')}">
          <v-btn icon @click="user?null:$router.push('/login')">
            <img :src="user?$store.state.user.img:require(`@/assets/icons/account.svg`)" alt="account" class="eliminarmobile"
              :style="`--w:3em;${user?'--br:50%;--b:2px solid #000000;--p:4px':null}`">
            <img :src="user?$store.state.user.img:require(`@/assets/icons/account-mobile.svg`)" alt="account" class="vermobile"
              :style="`--w:3em;${user?'--br:50%;--b:2px solid #000000;--p:4px':null}`">
          </v-btn>
          <v-icon v-show="user">mdi-menu-down</v-icon>
        </div>
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
        { key:"market", icon: "market-active", name:"Marketplace", position: 120, active: false },
        { key:"stats", icon: "stats", name:"stats", position: 240, active: false },
        { key:"chats", icon: "chats", name:"chats", position: 360, active: false },
        { key:"settings", icon: "settings", name:"settings", position: 480, active: false  },
        { key:"faq", icon: "faq", name:"faq", position: 600, active: false  },
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
        this.dataSidebar.forEach(e=>{e.active=false})
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

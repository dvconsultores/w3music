<template>
  <section id="header">
    <MenuHeader ref="menu"></MenuHeader>
    <v-app-bar id="headerApp" color="transparent" height="100px" absolute class="font2 isolate">
      <aside class="acenter gap2" style="padding-left:calc(48px + 2em)">
        <aside class="sidebar divcol acenter jspace isolate" :class="{active: sidebar}">
          <v-btn icon @click="toggleFunc()">
            <img :src="require(`@/assets/icons/menu${positionFocus==0||positionFocus==16?'':'-active-sidebar'}.svg`)" alt="toggle">
          </v-btn>

          <div class="focus" :style="`--distanceInitial:${initialFocus};--distance:${positionFocus}px`" />

          <v-tooltip v-for="(item,i) in dataSidebar" :key="i" right color="var(--primary)">
            <template v-slot:activator="{ on, attrs}">
              <v-btn v-show="sidebar" icon @click="positionFocus=item.position;activeSidebarIcons(item)" :to="item.to"
                :class="{openMenuMarket: item.key=='market', active: item.active}" v-on="item.active?null:on" v-bind="item.active?null:attrs">
                <img :src="require(`@/assets/icons/${item.icon}${item.active?'-active':''}.svg`)" alt="side bar icons">
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

      <!-- <v-btn icon style="--p:2.3em;">
        <img src="@/assets/icons/records.svg" alt="records" style="--bs:drop-shadow(10px 5px 12px rgba(0, 0, 0, 0.25));--w:4.5em">
      </v-btn> -->

      <aside class="acenter gap2">
        <v-btn v-show="!$store.state.user.login" class="btn eliminarmobile" @click="modalConnect = true">LOG IN</v-btn>

        <div v-show="$store.state.user.login" :class="{acenter: $store.state.user.login, contents: !$store.state.user.login}" style="cursor:pointer;border-radius:4vmax" class="openMenuLogin">
          <v-btn icon @click="$store.state.user.login?null:$router.push('/login')">
            <img :src="nearSocialAvatar || require(`@/assets/icons/account.svg`)" alt="account" class="eliminarmobile"
              :style="`--w:3em;${$store.state.user.login?'--br:50%;--b:2px solid #000000;--p:4px':null}`">
            <img :src="nearSocialAvatar || require(`@/assets/icons/account-mobile.svg`)" alt="account" class="vermobile"
              :style="`--w:3em;${$store.state.user.login?'--br:50%;--b:2px solid #000000;--p:4px':null}`">
          </v-btn>
          <v-icon v-show="$store.state.user.login">mdi-menu-down</v-icon>
        </div>
      </aside>
    </v-app-bar>
    <v-dialog v-model="modalConnect" content-class="modal-connect divcol relative isolate">
      <aside class="space">
        <span class="h9_em" style="color:#fff !important">Connect Wallet</span>
        
        <v-btn icon @click="closeDialog()">
          <v-icon size="1.5em">mdi-close</v-icon>
        </v-btn>
      </aside>

      <v-sheet class="grid" color="transparent">
        <v-btn plain color="hsl(0 0% 0% / .5)" @click="logIn()">
          <img src="@/assets/sources/logos/ramper.svg" alt="near">
          
          <div class="divcol astart" style="gap: 5px">
            <span class="h12_em bold" style="color:#fff !important">Email</span>
            <span class="h13_em">ramper.xyz</span>
          </div>
        </v-btn>
        <v-btn plain @click="walletSelector()">
          <img src="@/assets/sources/logos/near-wallet-icon.svg" alt="near">
          
          <div class="divcol astart" style="gap: 5px">
            <span class="h12_em bold" style="color:#fff !important">WALLET</span>
            <span class="h13_em">near</span>
          </div>
        </v-btn>
      </v-sheet>
    </v-dialog>
  </section>
</template>

<script>
import "@near-wallet-selector/modal-ui/styles.css"
import MenuHeader from "./MenuHeader.vue"
import * as nearAPI from "near-api-js";
const { Contract } = nearAPI;

const theme = localStorage.getItem("theme");

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
      modalConnect: false,
      nearSocialAvatar: null,
      accountId: null,
      messages: 1,
      sidebar: false,
      initialFocus: 0,
      positionFocus: 0,
      modeConnect: localStorage.getItem("modeConnect"),
      dataSidebar: [
        { key:"market", icon: "market", name:"Marketplace", position: 120, active: false },
        { key:"stats", icon: "stats", name:"stats", to:"/stats", position: 240, active: false },
        { key:"chats", icon: "chats", name:"chats", to: "/chats", position: 360, active: false },
        { key:"settings", icon: "settings", name:"settings", position: 480, active: false  },
        { key:"faq", icon: "faq", name:"faq", position: 600, active: false  },
      ]
    };
  },
  async mounted() {
    console.log(this.$selector.selector.isSignedIn())
    console.log(this.$ramper.getUser())
    if (this.$selector.selector.isSignedIn()) {
      this.getNearSocial(this.$selector.getAccountId())
      localStorage.setItem('modeConnect', 'walletSelector')
      this.$store.state.user.login = true
    } else if (this.$ramper.getUser()) {
      this.getNearSocial(this.$ramper.getAccountId())
      localStorage.setItem('modeConnect', 'ramper')
      this.$store.state.user.login = true
    }
    
    
    // responsive
    // this.responsive()
    // document.addEventListener('resize', this.responsive())
    // this.LogState();

    const el = document.querySelector(".sidebar");
    document.addEventListener("click", (e) => {
      // if click outisde
      if (!el.contains(e.target)&&this.sidebar==true) {this.toggleFunc()}
    })
    
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
    closeDialog(){
      this.modalConnect = false
    },
    async walletSelector() {
      this.modalConnect = false
      localStorage.setItem('modeConnect', 'walletSelector')

      this.$selector.modal.show();
    },
    async getNearSocial(accountId) {
      const account = await this.$near.account(accountId);
      const contract = new Contract(account, process.env.VUE_APP_CONTRACT_SOCIAL, {
        viewMethods: ["get"],
        sender: account,
      });

      const myArray = [account.accountId + "/profile/**"];
      //console.log(myArray)
      const social = await contract.get({
          keys: myArray
        });
      
      Object.entries(social).forEach(([key, value]) => {
        localStorage.setItem("nearSocialAvatar", value.profile.image.ipfs_cid);
        this.nearSocialAvatar = process.env.VUE_APP_API_BASE_URL_SOCIAL + localStorage.getItem("nearSocialAvatar")

        if (value.profile.backgroundImage?.ipfs_cid) {
          localStorage.setItem("nearSocialBanner", value.profile.backgroundImage.ipfs_cid);
        }
      });
    },
    async logIn() {
      this.modalConnect = false
      const login = await this.$ramper.signIn()
      if (login) {
        if (login.user) {
          localStorage.setItem('modeConnect', 'ramper')
          localStorage.setItem('logKey', 'in')
          location.reload()
        }
      }
    },
    activeSidebarIcons(item) {
      this.dataSidebar.forEach(e=>{e.active=false});
      setTimeout(() => {
        item.active=true
      }, 500);
    },
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
    // CambiarTheme(theme) {
    //   this.$store.dispatch("CambiarTheme", { theme, element: this.element });
    //   this.themeButton = !this.themeButton;
    // },
    // use for update account log states
    LogState() {
      if (localStorage.getItem('logKey') == 'out') {this.$store.state.user.login = false}
      if (localStorage.getItem('logKey') == 'in') {this.$store.state.user.login = true}
    },
  },
};
</script>

<style src="./Header.scss" lang="scss">

<template>
  <section id="header">
    <ModalConnect ref="ModalConnect"></ModalConnect>
    <MenuHeader ref="menu"></MenuHeader>
    <v-app-bar id="headerApp" color="transparent" height="100px" absolute class="font2 isolate">
      <aside class="acenter gap2" style="padding-left:calc(48px + 2em)">
        <router-link to="/" style="transform: translateY(4px);">
          <img src="@/assets/logos/logo-w3music.svg" alt="logo w3music" style="width: 45px; height: 45px;">
        </router-link>

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

        <v-autocomplete 
          v-model="artist"
          :items="artistList"
          placeholder="Search artist"
          @change="searchArtist(artist)"
          item-text="name"
          item-value="wallet"
          id="search" hide-details solo style="--max-w: 14.6875em;--p: 0 1.5em" class="eliminarmobile">
          <template v-slot:append>
            <img src="@/assets/icons/lupa.svg" alt="search">
          </template>

          <template v-slot:item="data">
            <template>
              <v-list-item-avatar>
                <v-img :src="data.item.img" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ data.item.name }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
      </aside>

      <!-- <v-btn icon style="--p:2.3em;">
        <img src="@/assets/icons/records.svg" alt="records" style="--bs:drop-shadow(10px 5px 12px rgba(0, 0, 0, 0.25));--w:4.5em">
      </v-btn> -->

      <aside class="acenter gap2">
        <!-- <v-btn v-show="!$store.state.user.login" class="btn eliminarmobile" @click="$refs.ModalConnect.modalConnect = true">LOG IN</v-btn> -->
        <v-btn v-show="!$store.state.user.login" class="btn eliminarmobile" @click="walletSelector">LOG IN</v-btn>

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
  </section>
</template>

<script>
import gql from "graphql-tag";
import ModalConnect from "../modals/connect.vue"
import "@near-wallet-selector/modal-ui/styles.css"
import MenuHeader from "./MenuHeader.vue"
import * as nearAPI from "near-api-js";
import { eventBus } from '@/main';
const { Contract } = nearAPI;

const theme = localStorage.getItem("theme");

export default {
  name: "header",
  components: { MenuHeader, ModalConnect },
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
      imgAux: null,
      artist: null,
      artistList: [],
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
        { key:"settings", icon: "settings", name:"settings", to:"/coming-soon", position: 480, active: false  },
        { key:"faq", icon: "faq", name:"faq", position: 600, to:"/faq", active: false  },
      ]
    };
  },
  created() {
    const queryString = window.location.search; // tomo mi url
    const urlParams = new URLSearchParams(queryString)
    if (urlParams.get("transactionHashes") !== null) {
      let urlTx
      if (process.env.VUE_APP_NETWORK === "mainnet") {
        urlTx = "https://nearblocks.io/txns/" + urlParams.get("transactionHashes")
      } else {
        urlTx = "https://testnet.nearblocks.io/txns/" + urlParams.get("transactionHashes")
      }

      this.transactionHashes = urlParams.get("transactionHashes")
      history.replaceState(null, location.href.split("?")[0], '/#/');
      localStorage.setItem("results", true)
      localStorage.setItem("linkHash", urlTx)
      this.$router.push('/results')
    }
    if (urlParams.get("errorCode") !== null) {
      // error de transaccion
      history.replaceState(null, location.href.split("?")[0], '/#/');
      this.$router.push('/results')
    }
  },
  async mounted() {
    console.log(this.$selector.selector.isSignedIn())
    console.log(this.$ramper.getUser())
    if (this.$selector.selector.isSignedIn()) {
      this.getNearSocial(this.$selector.getAccountId())
      this.initUser(this.$selector.getAccountId())
      localStorage.setItem('modeConnect', 'walletSelector')
      this.$store.state.user.login = true
      this.getCollection()
    } else if (this.$ramper.getUser()) {
      this.getNearSocial(this.$ramper.getAccountId())
      this.initUser(this.$ramper.getAccountId())
      localStorage.setItem('modeConnect', 'ramper')
      this.$store.state.user.login = true
      this.getCollection()
    }

    this.getArtists()
    
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
    async walletSelector() {
      this.modalConnect = false
      localStorage.setItem('modeConnect', 'walletSelector')

      this.$selector.modal.show();
    },
    searchArtist(item) {
      localStorage.setItem("artist", item)
      this.artist = null
      this.$router.push('/artist-details')
        .catch(() => {
          // location.reload()
          eventBus.$emit('artist-selected', item);
        })
    },
    async getArtists() {
      const getUser = gql`
        query MyQuery {
          users {
            description
            id
            wallet
            artist_name
          }
        }
      `;
      const res = await this.$apollo.query({
        query: getUser
      })

      const data = res.data.users

      // this.artistList = []
      
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
  
        const item = { 
          id: element.id,
          name: element.artist_name, 
          wallet: element.wallet, 
          creator: element.wallet, 
          img: await this.getNearSocialFn(element.wallet)
        }

        this.imgAux = null

        this.artistList.push(item)
      }
    },
    async getCollection() {
      this.axios.post(process.env.VUE_APP_NODE_API + "/api/get-collection/", {wallet: this.$ramper.getAccountId() || this.$selector.getAccountId()})
        .then(async (res) => {
          const dataCollection = []
          const nfts = res.data
          for (let i = 0; i < nfts.length; i++) {
            const nft = nfts[i];
            const sonido = document.createElement("audio");
            sonido.src = nft.trackFull;
            sonido.setAttribute("preload", "auto");
            sonido.setAttribute("controls", "none");
            sonido.style.display = "none"; // <-- oculto
            document.body.appendChild(sonido);
            const item = { 
              index: i,
              tokenId: nft.id,
              img: nft.metadata.media, 
              name: nft.metadata.title, 
              nameNft: nft.title, 
              by: await this.getArtistName(nft.metadata.creator_id), 
              creator: nft.metadata.creator_id, 
              track: sonido,
              play: false,
              type: "full",
            }
            dataCollection.push(item)
          }      
          this.$store.dispatch('updateLibrary', dataCollection); 
        })
        .catch((err) => {
          console.log(err)
       
        })
    },
    async getArtistName(wallet) {
      
      const getDataUser = gql`
        query MyQuery($wallet: String!) {
          users(where: {wallet: $wallet}) {
            artist_name
            wallet
          }
        }
      `;

      const res = await this.$apollo.query({
        query: getDataUser,
        variables: {wallet: wallet},
      })

      const data = res.data

      return data.users[0].artist_name || null
    },
    initUser(wallet) {
      this.axios.post(process.env.VUE_APP_NODE_API + "/api/get-user-by-wallet/", {wallet})
        .then((res) => {
          if (!res.data) {
            this.axios.post(process.env.VUE_APP_NODE_API + "/api/create-user/", {wallet})
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getNearSocialFn(accountId) {
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
        this.imgAux = process.env.VUE_APP_API_BASE_URL_SOCIAL + value.profile.image.ipfs_cid
      });

      if (this.imgAux) {
        return this.imgAux
      } else {
        let img = require("@/assets/miscellaneous/track.jpg")
        return img
      }
    },
    async getNearSocial(accountId) {
      localStorage.removeItem("nearSocialAvatar");
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

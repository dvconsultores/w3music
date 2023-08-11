<template>
  <section id="buy" class="grid gap2">
    <ModalConnect ref="ModalConnect"></ModalConnect>
    <aside class="divcol eliminarmobile">
      <div class="section-header">
        <h2>CATEGORIES</h2>

        <v-expansion-panels accordion class="font2">
          <!-- <v-list class="fill_w" color="transparent">
            <v-list-item :class="{activeClass2: dataCategories.every(e=>e.selection.every(e2=>e2.active==true))}" @click="allFilter=!allFilter;
              dataCategories.forEach(e=>{e.selection.forEach(e2=>{allFilter?e2.active=true:e2.active=false})})">
              <v-list-item-title>ALL</v-list-item-title>
            </v-list-item>
          </v-list> -->

          <v-list class="fill_w" color="transparent">
            <v-list-item :class="{activeClass2: allFilter}" @click="clickCategories({name: 'ALL'})" >
              <v-list-item-title>ALL</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="(item2,i2) in dataCategories" :key="i2" :class="{activeClass2: item2.active}" @click="clickCategories(item2)">
                <v-list-item-title>{{item2.name.toUpperCase()}}</v-list-item-title>
              </v-list-item>
          </v-list>

          <!-- <v-expansion-panel v-for="(item,i) in dataCategories" :key="i">
            <v-expansion-panel-header>{{item.name}}
              <template v-slot:actions>
                  <v-icon>mdi-menu-down</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list color="transparent">
                <v-list-item v-for="(item2,i2) in item.selection" :key="i2" :class="{activeClass2: item2.active}" @click="item2.active=!item2.active">
                  <v-list-item-title>{{item2.name}}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel> -->
        </v-expansion-panels>
      </div>
    </aside>

    <aside id="container-right" class="divcol gap2">
      <div class="section-header">
        <h3>FILTERS</h3>

        <aside class="space wrap gap1">
          <div class="fwrap gap1" style="--fb: 1 1">
            <v-select
              v-model="all"
              :items="dataAll"
              item-text="all"
              placeholder="ALL"
              hide-details
              solo
              class="vermobile"
            ></v-select>
            <v-select
              v-model="recent"
              :items="dataRecent"
              item-text="recent"
              @change="selectRecent()"
              placeholder="RECENT"
              hide-details
              solo
            ></v-select>
            <v-select
              v-model="atribute"
              :items="dataAtribute"
              item-text="atribute"
              placeholder="Sort by Price"
              @change="getData()"
              hide-details
              solo
            ></v-select>
          </div>

          <v-btn class="btn font2 eliminarmobile" style="--h:2.75em;--bg:hsl(0, 0%, 96%, .75);--b:2.5px solid var(--primary)" @click="$router.push('/buy/checkout')">
            <span class="acenter" style="gap:.5em;font-size: 20px">
              <img src="@/assets/icons/market-active.svg" alt="market icon" style="--w:25px">
              <span>CART: {{ cart.quantity }}</span>
            </span>

            <!-- <span class="acenter margin2left" style="gap:.2em;font-size:17px">
              {{ cart.totalPrice }} <img src="@/assets/logos/near.svg" alt="near" style="--w:13px;--t:translateY(-2px)">
            </span> -->

            <span class="acenter margin2left" style="gap:.2em;font-size:17px">
              {{ cart.totalPrice }}$<span style="font-size:0.875em"> ≈ {{ convertPrice(cart.totalPrice) }}<img src="@/assets/logos/near.svg" alt="near" style="--w:0.75em"></span>
            </span>
          </v-btn>
        </aside>
      </div>
      
      <aside class="section-content grid gap2">
        <v-card v-for="(item,i) in dataAfrofusion" :key="i" class="isolate">
          <v-btn id="play" class="play" icon @click="item.play?item.play=!item.play:dataAfrofusion.forEach(e=>{e.play=false;item.play=true}); playPreview(item)">
            <img :src="require(`@/assets/icons/${item.play?'pause':'play'}-simple.svg`)" alt="play button" :style="`transform:${item.play?'translatex(0)':'translateX(3px)'}`">
          </v-btn>

          <v-avatar size="4.8125em">
            <img :src="item.img" alt="profile image" style="--w:100%">
          </v-avatar>

          <v-sheet color="var(--primary)" class="fill_w divcol center gap1 padd2">
            <div class="divcol marginaright">
              <h6 class="p">{{item.name}}</h6>
              <span class="font2" style="font-size:0.875em">by <a :title="item.by" class="not_typography" href="#" @click="goArtistDetails(item)">{{limitStr(item.by, 25)}}</a></span>
            </div>

            <!-- <span class="font2 bold acenter" style="gap:.2em">
              FLOOR PRICE {{item.price}} <img src="@/assets/logos/near.svg" alt="near" style="--w:0.75em">
            </span> -->

            <span class="font2 bold acenter" style="gap:.2em">
              PRICE {{item.price}}$<span style="font-size:0.875em"> ≈ {{ convertPrice(item.price) }}<img src="@/assets/logos/near.svg" alt="near" style="--w:0.75em"></span>
            </span>

            <div class="center gap1">
              <v-btn class="btn align font2" :disabled="item.disabled" style="--bg:#000000;--c:var(--primary);--fs:1.2em" @click="addToCart(item)">{{ item.status == "success" ? "SUCCESS " : item.status == "error" ? "FAILED " : "ADD TO CART"}} <v-icon>{{ item.status == "success" ? "mdi-check-circle" : item.status == "error" ? "mdi-close-circle" : null }}</v-icon></v-btn>
              <v-btn icon style="--b:1px solid #000000" @click="createLikeTrack(item)">
                <img :src="require(`@/assets/icons/like${item.like?'-active':''}.svg`)" alt="like button">
              </v-btn>
            </div>
          </v-sheet>
        </v-card>
      </aside>
    </aside>
  </section>
</template>

<script>
import gql from "graphql-tag";
import axios from 'axios';
import ModalConnect from "../../components/modals/connect.vue"
import * as nearAPI from "near-api-js";
const { Contract } = nearAPI;

export default {
  name: "buy",
  components: { ModalConnect },
  data() {
    return {
      track: null,
      allFilter: true,
      dataCategories: [
        // {
        //   title: "Afrobeats",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "Pop",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "Reggae",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "Instrumental",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "Hip Hop",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "Rap",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "Jazz",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "Latin",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "EDM",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "Country",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "Blues",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
        // {
        //   title: "Classical",
        //   selection: [
        //     {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
        //     {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
        //   ],
        // },
      ],
      recent: "Recent",
      dataRecent: ["any","recent", "latest"],
      atribute: null,
      dataAtribute: ["any","asc", "desc"],
      categoriesFilter: [],
      cart: {
        quantity: "0",
        totalPrice: "0"
      },
      all: "ALL",
      dataAll: [],
      nearPrice: 0,
      likesTrack: [],
      dataAfrofusion: [
        // { img: require("@/assets/avatars/a2.jpg") ,name: "LOVE ARROW", by: "Travis Poll", price: "10", play: false, like: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
      ],
    }
  },
  computed: {
    route() {
      return this.$router.currentRoute.name
    }
  },
  async mounted() {
    this.$emit('RouteValidator')
    this.getNearPrice()
    this.likesTrack = await this.getAllLikeTrack()
    this.getShoppingCart()
    this.getGenders()
    
  },
  methods: {
    selectRecent() {
      if (this.recent === "recent") {
        if (this.atribute) {
          this.atribute = "any"
        }
        this.getData()
        
      } else if (this.recent === "latest") {
        this.dataAfrofusion = this.dataAfrofusion.reverse()
        if (this.atribute) {
          this.atribute = "any"
        }
      } else {
        this.getData()
      }
    },
    goArtistDetails(item) {
      localStorage.setItem("artist", item.creator)
      this.$router.push('/artist-details')
    },
    getAllLikeTrack() {
      if (this.$ramper.getAccountId() || this.$selector.getAccountId()) {
        let wallet = this.$ramper.getAccountId() || this.$selector.getAccountId()
        const resp = this.axios.post(process.env.VUE_APP_NODE_API + "/api/get-all-like-track/", {wallet})
          .then((res) => {
            if (res.data) {
              return res.data
            } else {
              return []
            }
          })
          .catch((err) => {
            console.log(err)
            return []
          })
        return resp
      } else {
        return []
      }
    },
    getLikeTrack(tokenId) {
      if (this.likesTrack.length > 0) {
        const like = this.likesTrack.find((element) => element.tokenId === tokenId)
        if (like) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }   
    },
    createLikeTrack(item) {
      console.log(item)
      if (this.$ramper.getAccountId() || this.$selector.getAccountId()) {
        let wallet = this.$ramper.getAccountId() || this.$selector.getAccountId()
        if (!item.like) {
          this.axios.post(process.env.VUE_APP_NODE_API + "/api/create-like-track/", {wallet, tokenId: item.token_id, creatorId: item.creator})
            .then((res) => {
              console.log(res)
              item.like=!item.like
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          this.axios.post(process.env.VUE_APP_NODE_API + "/api/delete-like-track/", {wallet, tokenId: item.token_id, creatorId: item.creator})
            .then((res) => {
              console.log(res)
              item.like=!item.like
            })
            .catch((err) => {
              console.log(err)
            })
        }     
      } else {
        this.$refs.ModalConnect.modalConnect = true
      }   
    },
    convertPrice(price) {
      return (price / this.nearPrice).toFixed(3) || 0
    },
    async getNearPrice() {
      const account = await this.$near.account(this.$ramper.getAccountId() || this.$selector.getAccountId());
      const contract = new Contract(account, process.env.VUE_APP_CONTRACT_NFT, {
        viewMethods: ["get_tasa"],
        sender: account,
      });

      const price = await contract.get_tasa();
      this.nearPrice = price
    },
    getShoppingCart() {
      this.axios.post(process.env.VUE_APP_NODE_API + "/api/get-all-shopping-cart/", {wallet: this.$ramper.getAccountId() || this.$selector.getAccountId()})
        .then((res) => {
          let totalPrice = 0
          for (let i = 0; i < res.data.length; i++) {
            const element = res.data[i];
            totalPrice += Number(element.price)
          }
          this.cart.totalPrice = String(totalPrice)
          this.cart.quantity = String(res.data.length)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addToCart(item) {
      item.disabled = true
      this.axios.post(process.env.VUE_APP_NODE_API + "/api/add-shopping-cart/", {wallet: this.$ramper.getAccountId() || this.$selector.getAccountId(), tokenId: item.token_id})
        .then((res) => {
          console.log(res.data)
          item.status = "success"
          this.getShoppingCart()
          // setTimeout(item.status = null, 1500);
          setTimeout(() => {
            item.status = null
            item.disabled = false
          }, 3000);
        })
        .catch((err) => {
          item.status = "error"
          setTimeout(() => {
            item.status = null
            item.disabled = false
          }, 2000);
          // setTimeout(item.status = null, 1500);
        })
    },
    playPreview(item) {
      this.track = item
      if (item.play) {
        this.$store.dispatch('updateTrack', item);
        let wallet = this.$ramper.getAccountId() || this.$selector.getAccountId()
        this.axios.post(process.env.VUE_APP_NODE_API + "/api/play-track/", {wallet, tokenId: item.token_id, creatorId: item.creator})
      } else {
        this.$store.dispatch('updateTrack', item);
      }
    },
    clickCategories(item) {
      if (item.name === "ALL") { 
        this.allFilter = true
        this.categoriesFilter = []
        this.dataCategories.forEach(element => {
          element.active = false
          this.categoriesFilter.push(element.name)
        })
      } else {
        this.allFilter = false
        item.active = !item.active

        this.categoriesFilter = []
        this.dataCategories.forEach(element => {
          if (element.active) {
            this.categoriesFilter.push(element.name)
          }
        })

        if (this.dataCategories.filter(function(element) { return element.active === true }).length === 0) {
          this.allFilter = true
          this.dataCategories.forEach(element => {
            element.active = false
            this.categoriesFilter.push(element.name)
          })
        }
      }
      this.getData()
    },
    limitStr(item, num) {
      if (item) {
        if (item.length > num) {
          return item.substring(0, num) + "...";
        }
      }
      return item;
    },
    async getGenders() {
      const getGendersUser = gql`
        query MyQuery {
          genders(where: {id_gt: "0"}) {
            id
            name
          }
        }
      `;

      const res = await this.$apollo.query({
        query: getGendersUser
      })

      const data = res.data.genders

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const item = { 
          name: element.name, 
          active: false 
        }

        this.dataCategories.push(item)
        this.categoriesFilter.push(item.name)
      }
      this.getData()
    },
    getSeriesGQL() {
      if (this.atribute === "asc" || this.atribute === "desc") {
        if (this.recent) {
          this.recent = "any"
        }
        return gql`
          query MyQuery($categories: [String!]) {
            series(orderBy: price, orderDirection: ${this.atribute}, where: {reference_in: $categories, is_mintable: true}) {
              aproved_event
              aproved_objects
              copies
              creator_id
              description
              expires_at
              extra
              fecha
              id
              is_mintable
              issued_at
              media
              nft_amount_sold
              nftsold
              object_event
              price
              price_near
              redeemerevents
              redeemerobjects
              reference
              starts_at
              supply
              title
              typetoken_id
              updated_at
            }
          }
        `;
      } else {
        return gql`
          query MyQuery($categories: [String!]) {
            series(where: {reference_in: $categories, is_mintable: true}) {
              aproved_event
              aproved_objects
              copies
              creator_id
              description
              expires_at
              extra
              fecha
              id
              is_mintable
              issued_at
              media
              nft_amount_sold
              nftsold
              object_event
              price
              price_near
              redeemerevents
              redeemerobjects
              reference
              starts_at
              supply
              title
              typetoken_id
              updated_at
            }
          }
        `;
      }
    },
    async getData() {
      const getSeries = this.getSeriesGQL()
      const res = await this.$apollo.query({
        query: getSeries,
        variables: {categories: this.categoriesFilter}
      })

      const data = res.data.series

      this.dataAfrofusion = []
      const dataAfrofusionAux = []
      
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const extra = JSON.parse(element.extra)
        const trackPreview = extra.find(element => { return element.trait_type === "track_preview"})

        const sonido = document.createElement("audio");
        sonido.src = trackPreview.value;
        sonido.setAttribute("preload", "auto");
        sonido.setAttribute("controls", "none");
        sonido.style.display = "none"; // <-- oculto
        document.body.appendChild(sonido);

        const item = { 
          token_id: element.id,
          img: element.media,
          name: element.title, 
          preview: trackPreview.value,
          by: await this.getArtistName(element.creator_id), 
          creator: element.creator_id, 
          price: element.price, 
          play: false, 
          like: this.getLikeTrack(element.id),
          track: sonido,
          type: "preview",
          status: null,
          disabled: false
        }

        if (this.track?.play && this.track?.token_id === item.token_id) {
          item.play = true
        }

        dataAfrofusionAux.push(item)
      }
      this.dataAfrofusion = dataAfrofusionAux.sort(this.compararPorLike)
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
    compararPorLike(a, b) {
      if (a.like && !b.like) {
        return -1; // a viene antes que b en el orden de clasificación
      } else if (!a.like && b.like) {
        return 1; // a viene después que b en el orden de clasificación
      } else {
        return 0; // mantener el orden actual si ambos tienen el mismo valor 'like'
      }
    }
  }
};
</script>

<style src="./Buy.scss" lang="scss" />
<template>
  <section id="artistDetails" class="divcol margin_global overflow gap2 isolate">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/home')">

      <div class="acenter" style="gap:48px">
        <v-avatar size="7.3125em">
          <img :src="nearSocialArtist" alt="profile image" style="--w:100%">
        </v-avatar>

        <h1 class="p" style="max-width:14ch">{{ artistName || limitStr(artistId, 16) }}</h1>
      </div>

      <section class="space gap1 wrap">
        <aside class="wrap gap1 font2">
          <v-chip v-for="(item,i) in dataActions" :key="i" :class="{active: item.active}" :disabled="item.disabled"
            @click="dataActions.forEach(e=>{e.active=false});item.active=true">
            {{item.name}} {{item.amount}}
          </v-chip>
        </aside>

        <aside class="wrap gap1 font1">
          <div class="acenter gap1">
            <div class="acenter" style="gap:.2em">
              <img src="@/assets/icons/near.svg" alt="near" style="--w:1.4em">
              <span>{{ artistWallet }}</span>
            </div>
            <span>Joined {{ date }}</span>
          </div>
          <!-- <div class="acenter">
            <v-btn icon>
              <img src="@/assets/icons/share.svg" alt="share button">
            </v-btn>
            <v-btn icon @click="like=!like">
              <img :src="require(`@/assets/icons/like${like?'-active':''}.svg`)" alt="like button">
            </v-btn>
          </div> -->
        </aside>
      </section>
    </section>

    <section class="container-content grid gap2" :class="{tracks: dataActions[dataActions.findIndex(e=>e.key=='tracks')].active}">
      <v-data-table
        v-show="dataActions[dataActions.findIndex(e=>e.key=='activity')].active"
        id="dataTable"
        :headers="headersTable"
        :items="dataTable"
        hide-default-footer
      >
        <template v-slot:[`item.name`]="{ item }">
          <div class="center gap2 tstart">
            <img :src="item.img" alt="track image" style="--w:4.1875em">
            <span>{{item.name}}</span>
          </div>
        </template>

        <template v-slot:[`item.price`]="{ item }">
          <div class="center gap2 tstart">
            <span>{{item.price}}$</span>
            
          </div>
        </template>

        <template v-slot:[`item.plays`]="{ item }">
          <div class="center" style="gap:.5em">
            <img class="play" :src="require(`@/assets/icons/${item.play?'pause':'play'}.svg`)" alt="play/pause icon" style="--w:3.095625em"
              @click="item.play?item.play=!item.play:dataTable.forEach(e=>{e.play=false;item.play=true}); playPreview(item)">
            <span>{{item.plays}}</span>
          </div>
        </template>
        
        <template v-slot:[`item.time`]="{ item }">
          {{item.time}}
        </template>
      </v-data-table>

      <section id="dataTableMobile" class="font2" v-show="dataActions[dataActions.findIndex(e=>e.key=='activity')].active">
        <v-card v-for="(item,i) in dataTable" :key="i" color="transparent" class="space wrap gap1">
          <aside class="acenter gap1">
            <img src="@/assets/miscellaneous/track.jpg" alt="track image" class="aspect" style="--h:100%">
            <div class="divcol gap1">
              <span>
                <b>PRICE: </b>{{item.price}}
              </span>
              <span>
                <b>GENRE: </b>{{item.genre}}
              </span>
              <span>
                <b>TO: </b>{{item.to}}
              </span>
            </div>
          </aside>

          <aside class="space gap2 marginaleft">
            <div class="divcol center">
              <img class="play" :src="require(`@/assets/icons/${item.play?'pause':'play'}.svg`)" alt="play/pause button" style="--w:1.9em"
                @click="item.play?item.play=!item.play:dataTable.forEach(e=>{e.play=false;item.play=true}); playPreview(item)">
              <span>{{item.plays}}</span>
            </div>

            <span>{{item.time}} ago</span>
          </aside>
        </v-card>
      </section>

      <v-card v-show="dataActions[dataActions.findIndex(e=>e.key=='tracks')].active" class="isolate"
          v-for="(item,i) in dataTable" :key="i">
        <v-btn id="play" class="play" icon @click="item.play?item.play=!item.play:dataTable.forEach(e=>{e.play=false;item.play=true}); playPreview(item)">
          <img :src="require(`@/assets/icons/${item.play?'pause':'play'}-simple.svg`)" alt="play button" :style="`transform:${item.play?'translatex(0)':'translateX(3px)'}`">
        </v-btn>

        <v-avatar size="4.8125em">
          <img :src="item.img" alt="profile image" style="--w:100%">
        </v-avatar>

        <v-sheet color="var(--primary)" class="fill_w divcol center gap1 padd2">
          <div class="divcol marginaright">
            <h6 class="p">{{item.name}}</h6>
            <span class="font2 bold acenter" style="gap:.2em">
              PRICE {{item.price}}$
            </span>
          </div>

          <v-btn class="btn align font2" :disabled="item.disabled" style="--bg:#000000;--c:var(--primary);--fs:1.2em" @click="addToCart(item)">{{ item.status == "success" ? "SUCCESS " : item.status == "error" ? "FAILED " : "ADD TO CART"}} <v-icon>{{ item.status == "success" ? "mdi-check-circle" : item.status == "error" ? "mdi-close-circle" : null }}</v-icon></v-btn>
        </v-sheet>
      </v-card>
    </section>
  </section>
</template>

<script>
import gql from "graphql-tag";
import moment from 'moment'
import * as nearAPI from "near-api-js";
import { eventBus } from '@/main';
const { Contract } = nearAPI;

export default {
  name: "artistDetails",
  data() {
    return {
      dataArtist: {},
      nearSocialArtist: null,
      artistName: " ",
      artistWallet: " ",
      artistId: localStorage.getItem("artist"),
      like: false,
      avatar: require("@/assets/avatars/a2.jpg"),
      dataActions: [
        { key:"tracks", name:"GRID", active: true, disabled: false },
        { key:"activity", name:"LIST", active: false, disabled: false },
        { key:"followers", name:"FOLLOWERS", amount:"", active: false, disabled: true },
        { key:"following", name:"FOLLOWING", amount: "", active: false, disabled: true },
      ],
      headersTable: [
        { value:"name", text:"TRACK", align:"center" },
        { value:"price", text:"PRICE", align:"center" },
        { value:"genre", text:"GENRE", align:"center" },
        { value:"plays", text:"PLAYS", align:"center" },
        // { value:"to", text:"TO", align:"center" },
        { value:"time", text:"TIME", align:"center" },
      ],
      dataTable: [
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   price: "-----",
        //   genre: "DANCE POP",
        //   name: "DANCE POP",
        //   plays: 4.679,
        //   play: false,
        //   to: "patysb.near",
        //   time: "3 days",
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   price: "-----",
        //   genre: "DANCE POP",
        //   name: "DANCE POP",
        //   plays: 4.679,
        //   play: false,
        //   to: "patysb.near",
        //   time: "3 days",
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   price: "-----",
        //   genre: "DANCE POP",
        //   name: "DANCE POP",
        //   plays: 4.679,
        //   play: false,
        //   to: "patysb.near",
        //   time: "3 days",
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   price: "-----",
        //   genre: "DANCE POP",
        //   name: "DANCE POP",
        //   plays: 4.679,
        //   play: false,
        //   to: "patysb.near",
        //   time: "3 days",
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   price: "-----",
        //   name: "DANCE POP",
        //   genre: "DANCE POP",
        //   plays: 4.679,
        //   play: false,
        //   to: "patysb.near",
        //   time: "3 days",
        // },
      ],
      track: null,
      dataTracks: [
        // { img: require("@/assets/avatars/a2.jpg") ,name: "LOVE ARROW", price: "20", play: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
        // { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
      ],
      date: null,
      tracks: []
    }
  },
  created() {
    // Escuchar el evento y actualizar la información del artista
    eventBus.$on('artist-selected', artist => {
      this.artistId = localStorage.getItem("artist")
      this.getArtist()
      this.getData()
    });
  },
  async mounted() {
    this.getArtist()
    
    this.$emit('RouteValidator')
    this.getData()
  },
  methods: {
    addToCart(item) {
      item.disabled = true
      this.axios.post(process.env.VUE_APP_NODE_API + "/api/add-shopping-cart/", {wallet: this.$ramper.getAccountId() || this.$selector.getAccountId(), tokenId: item.token_id})
        .then((res) => {
          item.status = "success"
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
    getTracksByCreator() {
      if (this.artistId) {
        const resp = this.axios.post(process.env.VUE_APP_NODE_API + "/api/get-tracks-creator/", {wallet: this.artistId})
          .then((res) => {
            if (res.data) {
              return res.data
            } else {
              return []
            }
          })
          .catch((err) => {
            return []
          })
        return resp
      } else {
        return []
      }
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
    async getData() {
      this.dataTable = []
      this.tracks = await this.getTracksByCreator()

      const getSeries = gql`
        query MyQuery($wallet: String) {
          series(where: {creator_id: $wallet, is_mintable: true}) {
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
      const res = await this.$apollo.query({
        query: getSeries,
        variables: {wallet: this.artistId}
      })

      const data = res.data.series
      
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
          price: element.price,
          name: element.title,
          genre: element.reference,
          creator: element.creator_id, 
          preview: trackPreview.value,
          plays: await this.getPlaysTrack(element.id),
          play: false,
          track: sonido,
          type: "preview",
          to: "patysb.near",
          time: moment(element.fecha/1000000).format('LL'),
          status: null,
          disabled: false
        }

        if (this.track?.play && this.track?.token_id === item.token_id) {
          item.play = true
        }

        this.dataTable.push(item)
      }
    },
    getPlaysTrack(tokenId) {
      const track = this.tracks.find((element) => element.tokenId === tokenId)
      if (track) {
        return track.plays
      } else {
        return "---"
      }
    },
    getUser(wallet) {
      this.axios.post(process.env.VUE_APP_NODE_API + "/api/get-user-by-wallet/", {wallet})
        .then((res) => {
          if (res.data) {
            const month = moment(res.data.createdAt).format('MMMM');
            const year = moment(res.data.createdAt).format('YYYY')

            this.date = month + " " + year
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    limitStr(item, num) {
      if (item) {
        if (item.length > num) {
          return item.substring(0, num) + "...";
        }
      }
      return item;
    },
    async getArtist() {
      const getDataUser = gql`
        query MyQuery($wallet: String!) {
          users(where: {wallet: $wallet}) {
            artist_name
            description
            id
            location
            wallet
            youare
            public_url
            music_genre
            age
          }
        }
      `;;

      const res = await this.$apollo.query({
        query: getDataUser,
        variables: {wallet: this.artistId},
      })

      const data = res.data

      this.nearSocialArtist = null
      this.getNearSocial(this.artistId)
      this.getUser(this.artistId)

      this.dataArtist.youAre = data.users[0].youare || null,
      this.dataArtist.location= data.users[0].location || null,
      this.dataArtist.musicGenre= String(data.users[0].music_genre) || "0",
      this.dataArtist.age= Number(data.users[0].age) || null,
      this.artistName= data.users[0].artist_name || null,
      this.artistWallet = this.artistId
      this.dataArtist.publicUrl= data.users[0].public_url || null
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
        this.nearSocialArtist = process.env.VUE_APP_API_BASE_URL_SOCIAL + value.profile.image.ipfs_cid

        // if (value.profile.backgroundImage?.ipfs_cid) {
        //   localStorage.setItem("nearSocialBanner", value.profile.backgroundImage.ipfs_cid);
        // }
      });

      if (!this.nearSocialArtist) {
        this.nearSocialArtist = require("@/assets/miscellaneous/track.jpg")
      }
    },
  }
};
</script>

<style src="./ArtistDetails.scss" lang="scss" />

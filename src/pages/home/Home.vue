<template>
  <section id="home" class="divcol overflow margin_global gap2 isolate">
    <ModalConnect ref="ModalConnect"></ModalConnect>
    <section class="contup">
      <span class="tag">RADAR</span>

      <aside class="divcol">
        <h1>GOOD MORNING!</h1>

        <div id="container-new-tracks" class="aend">
          <div class="divcol" style="width:100%">
            <img @click="$router.push('/buy')" id="track" src="@/assets/miscellaneous/track.svg" alt="track" style="--w:clamp(17em, 24vw, 24.375em)">
            <!-- <div class="center align gap1" style="transform:translateY(-15px)">
              <img class="play" src="@/assets/icons/next-music.svg" alt="previous">
              <img class="play" :src="require(`@/assets/icons/${playMusic?'pause':'play'}-white.svg`)" alt="play/pause icon"
                @click="playMusic=!playMusic">
              <img class="play rotate" src="@/assets/icons/next-music.svg" alt="next">
            </div> -->
          </div>

          <div class="divcol jspace" style="max-width:42.5em;margin-bottom:6em;gap:clamp(2em, 3vw, 3em)">
            <div class="divcol">
              <h3 style="font-size:2.63125em;line-height:.8" class="p">NEW TRACKS</h3>
              <span style="font-size:2.63125em">release</span>
            </div>

            <div class="divcol">
              <div class="divcol">
                <div class="acenter">
                  <h4 class="p">{{mainTrack}}</h4>
                  <v-btn icon @click="getCreateLikeTrack()">
                    <img :src="require(`@/assets/icons/like${like?'-active':''}.svg`)" alt="like">
                  </v-btn>
                </div>
                <span style="font-size: 1.5em;transform:translateY(-5px)">{{mainArtist}}</span>
              </div>
              <p class="p font2" style="font-size:1em;">{{mainDesc}}</p>
            </div>
          </div>
        </div>
      </aside>

      <aside class="divcol gap2">
        <p class="p font2" style="font-size:1.25em">Meet new artists and songwriters with these recent releases</p>

        <section class="container-slide fnowrap scrollx">
          <blockquote v-for="(item,i) in dataRecentRelease" :key="i" class="divcol gap1 isolate">
            <v-card :style="`--bg-img:${item.img}`" @click="goArtistDetails(item)">
              <!-- <img class="play" :src="require(`@/assets/icons/${item.play?'pause':'play'}.svg`)" alt="play/pause icon"
                @click="item.play?item.play=!item.play:dataRecentRelease.forEach(e=>{e.play=false;item.play=true}); playPreview(item)"> -->
              <img id="decoration" src="@/assets/miscellaneous/track.png" alt="decoration track" style="--w:10.4375em">
            </v-card>
            <h6 class="p">{{item.name}}</h6>
          </blockquote>
        </section>
      </aside>
    </section>

    <section class="fwrap gap2 divcolmobile">
      <aside class="divcol">
        <h2>TRENDING NOW</h2>

        <v-data-table
          id="dataTable"
          :headers="headersTable"
          :items="dataTable"
          hide-default-footer
          :mobile-breakpoint="525"
        >
          <template v-slot:[`item.name`]="{ item }">
            <div class="center gap2" @click="goArtistDetails(item)" style="cursor:pointer;-border-radius:4vmax">
              <div class="astart gap1">
                <h3>{{dataTable.indexOf(item)>8?null:0}}{{dataTable.indexOf(item)+1}}</h3>
                <img :src="item.img" alt="track image" style="--w:4.1875em">
              </div>

              <div class="divcol tstart">
                <h6 class="font1 p">{{item.name}}</h6>
                <span>{{item.by}}</span>
              </div>
            </div>
          </template>

          <template v-slot:[`item.plays`]="{ item }">
            <div class="center" style="gap:.5em">
              <img class="play" :src="require(`@/assets/icons/${item.play?'pause':'play'}.svg`)" alt="play/pause icon" style="--w:3.095625em"
                @click="item.play?item.play=!item.play:dataTable.forEach(e=>{e.play=false;item.play=true}); playPreview(item)">
              <span>{{item.plays}}</span>
            </div>
          </template>

          <template v-slot:[`item.add`]="{ item }">
            <v-btn icon @click="createLikeTrack(item)">
              <img :src="require(`@/assets/icons/like${item.like?'-active':''}.svg`)" alt="like button">
            </v-btn>
          </template>
        </v-data-table>
      </aside>

      <aside class="divcol">
        <h2>NEW BEATS</h2>

        <section class="grid" style="--gtc:repeat(auto-fit,minmax(min(100%,12.5em),1fr));gap:2em">
          <blockquote v-for="(item,i) in dataNewBeats" :key="i">
            <img :src="item.img || image" alt="track image" style="--w:max(100%,12.5625em)">
            <h6 class="p">{{item.name}}</h6>
          </blockquote>
        </section>

        <v-btn class="btn marginaleft margin2top font2" @click="$router.push('/buy')">
          EXPLORE
        </v-btn>
      </aside>
    </section>
  </section>
</template>

<script>
import gql from "graphql-tag";
import ModalConnect from "../../components/modals/connect.vue"
import * as nearAPI from "near-api-js";
const { Contract } = nearAPI;

export default {
  name: "home",
  components: { ModalConnect },
  data() {
    return {
      like: false,
      playMusic: false,
      dataRecentRelease: [
        // { img: "", name: "TRAVIS POLL", play: false },
        // { img: "", name: "PAUL SMITH", play: false },
        // { img: "", name: "SUSY MILLER", play: false },
      ],
      headersTable: [
        { value:"name", text:"TRACK/ARTIST", align:"center" },
        { value:"genre", text:"GENRE", align:"center" },
        { value:"plays", text:"PLAYS", align:"center", sortable:false },
        { value:"add", text:"ADD", align:"center", sortable:false },
      ],
      image: require("@/assets/miscellaneous/track-white.png"),
      dataTable: [
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   like: false,
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   like: false,
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   like: false,
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   like: false,
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   like: false,
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   like: false,
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   like: false,
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   like: false,
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   like: false,
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   like: false,
        // },
      ],
      dataNewBeats: [
        // { img: require("@/assets/miscellaneous/track-white.png"), name: "TRAVIS POLL" },
        // { img: require("@/assets/miscellaneous/track-white.png"), name: "TRAVIS POLL" },
        // { img: require("@/assets/miscellaneous/track-white.png"), name: "TRAVIS POLL" },
        // { img: require("@/assets/miscellaneous/track-white.png"), name: "TRAVIS POLL" },
      ],
      track: null,
      likesTrack: [],
      imgAux: null,
      mainTrack: "-",
      mainArtist: "-",
      mainDesc: "-",
      mainCreatorId: null,
      mainTokenId: null,
    }
  },
  async mounted() {
    this.likesTrack = await this.getAllLikeTrack()
    this.getArtists()
    this.getTracksPlays()
    this.getNewBeats()
    this.$emit('RouteValidator')
    const el = document.querySelectorAll(".scrollx");
    el.forEach((el) => {el.addEventListener("wheel", (e) => {
      e.preventDefault();el.scrollLeft += e.deltaY
    })})
  },
  methods: {
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
        this.imgAux = process.env.VUE_APP_API_BASE_URL_SOCIAL + value.profile.image.ipfs_cid
      });

      if (this.imgAux) {
        return this.imgAux
      } else {
        let img = require("@/assets/miscellaneous/track.jpg")
        return img
      }
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

      console.log(data, "AQUI JUAN")

      this.dataRecentRelease = []
      
      for (let i = 0; i < data.length; i++) {
        if (i>9) {
          return
        }
        const element = data[i];
  
        const item = { 
          id: element.id,
          name: element.artist_name, 
          wallet: element.wallet, 
          creator: element.wallet, 
          img: await this.getNearSocial(element.wallet)
        }

        this.imgAux = null

        this.dataRecentRelease.push(item)
      }
    },
    goArtistDetails(item) {
      localStorage.setItem("artist", item.creator)
      this.$router.push('/artist-details')
    },
    async getNewBeats() {
      const getSeries = gql`
        query MyQuery {
          series(where: {is_mintable: true}) {
            creator_id
            extra
            fecha
            id
            description
            is_mintable
            media
            price
            reference
            title
            typetoken_id
          }
        }
      `;
      const res = await this.$apollo.query({
        query: getSeries
      })

      const data = res.data.series

      this.dataNewBeats = []
      
      for (let i = 0; i < data.length; i++) {
        const element = data[i];

        if (i>3) {
          return
        }
        if (i===0) {
          this.like = this.getLikeTrack(element.id)
          this.mainArtist = await this.getArtistName(element.creator_id),
          this.mainTrack = element.title
          this.mainDesc = element.description
          this.mainCreatorId = element.creator_id
          this.mainTokenId = element.typetoken_id
        }
  
        const item = { 
          token_id: element.id,
          img: element.media,
          name: element.title, 
          creator: element.creator_id, 
        }

        this.dataNewBeats.push(item)
      }
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
    createLikeTrack(item) {
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
        // this.$refs.ModalConnect.modalConnect = true
        localStorage.setItem('modeConnect', 'walletSelector')

        this.$selector.modal.show();
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
    getTracksPlays() {
      this.axios.get(process.env.VUE_APP_NODE_API + "/api/get-tracks-plays/")
        .then(async (res) => {
          for (let i = 0; i < res.data.length; i++) {
            if (i > 9) {
              return
            }
            const track = res.data[i];
            let element = await this.getSeriesTrack(track.tokenId)

            if (element) {
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
                by: await this.getArtistName(element.creator_id),
                img: element.media,
                price: element.price,
                name: element.title,
                genre: element.reference,
                creator: element.creator_id, 
                owner: element.creator_id, 
                preview: trackPreview.value,
                plays: track.plays,
                like: this.getLikeTrack(element.id),
                play: false,
                track: sonido,
                type: "preview",
                status: null,
                disabled: false
              }

              if (this.track?.play && this.track?.token_id === item.token_id) {
                item.play = true
              }

              this.dataTable.push(item)
            } else {
              continue
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
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
    async getSeriesTrack(tokenId) {
      const getSeries = gql`
        query MyQuery($tokenId: String) {
          series(where: {id: $tokenId, is_mintable: true}) {
            creator_id
            extra
            fecha
            id
            is_mintable
            media
            price
            reference
            title
            typetoken_id
          }
        }
      `;
      const res = await this.$apollo.query({
        query: getSeries,
        variables: {tokenId: tokenId}
      })

      const data = res.data.series

      if (data.length > 0) {
        return data[0]
      } else {
        return null
      }
    },
    async getCreateLikeTrack() {
      const data = {
        token_id: this.mainTokenId,
        creator: this.mainCreatorId,
        like: this.like,
      }
      console.log(data);

      // FIXME failed request
      this.createLikeTrack(data)
      this.like = data.like
    }
  }
};
</script>

<style src="./Home.scss" lang="scss" />
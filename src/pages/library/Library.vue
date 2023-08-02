<template>
  <section id="library" class="divcol margin_global gap2 overflow isolate">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/home')">
      
      <div class="divcol">
        <span class="font2" style="font-size:16px">LIBRARY</span>
        <h1 class="p">YOUR COLLECTION</h1>
      </div>
    </section>

    <aside class="container-actions space gap2">
      <div class="wrap gap1 acenter font2" style="height:2.75em">
        <v-select
          v-model="dataActions.value"
          label="ORDER BY"
          :items="dataActions.data"
          hide-details
          solo
          style="max-width: 20ch"
        ></v-select>
        <!-- <v-btn v-for="(item,i) in dataActions.filter" :key="i" class="btn clickable"
          :class="{inactive: !item.active}" style="--max-h:2.75em" @click="item.active=!item.active">
          {{item.name}}
        </v-btn> -->
      </div>

      <div class="acenter gap1">
        <v-btn icon style="--bg:var(--primary);--p:1.4em">
          <img src="@/assets/icons/lupa.svg" alt="search button" style="--w:1.5625em">
        </v-btn>
        <!-- <v-btn icon style="--bg:var(--primary);--p:1.4em">
          <img src="@/assets/icons/new-chat.svg" alt="new chat button" style="--w:1.5625em">
        </v-btn> -->
      </div>
    </aside>

    <section class="container-content grid" style="--gtc: repeat(auto-fit,minmax(min(100%,14.0625em),1fr));gap:clamp(4em, 5vw, 5em)">
      <v-card v-for="(item,i) in dataCollection" :key="i" color="transparent" class="divcol gap1">
        <div class="relative">
          <img :src="require(`@/assets/icons/${item.play?'pause-white':'play-white'}.svg`)" alt="like button" id="like" style="--w:4.279375em"
          @click="item.play?item.play=!item.play:dataCollection.forEach(e=>{e.play=false;item.play=true}); playTrack(item)">
          <img :src="item.img" alt="track image" style="--f: drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25));--w:100%">
        </div>
        <div class="divcol">
          <h6 class="bold p">{{item.name}}</h6>
          <span>{{item.by}}</span>
        </div>
      </v-card>
    </section>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "library",
  data() {
    return {
      track: null,
      dataActions: {
        key:"by",
        value:"RECENT",
        active:false,
        data: [
          "RECENT", "LATEST", "POPULAR"
        ],
        filter: [
          { name: "ARTISTS", active: false },
          { name: "LIST", active: false },
        ]
      },
      dataCollection: [
        { img: require("@/assets/tracks/track2.jpg"), name: "Tracks & Beats you like", track: "List- 459", like: false },
        { img: require("@/assets/tracks/track1.jpg"), name: "Travis Poll", track: "Sunset dream", like: false }
      ],
    }
  },
  mounted() {
    // if (!this.$ramper.getUser()) {this.$router.push("/")}
    this.$emit('RouteValidator')
    this.getCollection()
  },
  methods: {
    async getCollection() {
      this.axios.post(process.env.VUE_APP_NODE_API + "/api/get-collection/", {wallet: this.$ramper.getAccountId() || this.$selector.getAccountId()})
        .then(async (res) => {
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
              tokenId: nft.id,
              img: nft.metadata.media, 
              name: nft.metadata.title, 
              nameNft: nft.title, 
              by: await this.getArtistName(nft.metadata.creator_id), 
              creator: nft.metadata.creator_id, 
              track: sonido,
              play: false,
              type: "preview",
            }
            this.dataCollection.push(item)
          }       
        })
        .catch((err) => {
          console.log(err)
       
        })
    },
    playTrack(item) {
      this.track = item
      if (item.play) {
        this.$store.dispatch('updateTrack', item);
      } else {
        this.$store.dispatch('updateTrack', item);
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
  }
};
</script>

<style src="./Library.scss" lang="scss" />
<template>
  <section id="stats" class="divcol margin_global overflow gap2 isolate">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/home')">
      
      <div class="divcol">
        <span class="font2" style="font-size: 16px">STATS</span>
        <h1 class="p">HOTTEST TRACKS</h1>
      </div>
    </section>

    <aside class="container-actions wrap gap1 font2">
      <v-select
        v-for="(item,i) in dataActions" :key="i" v-show="i !== 0"
        :class="{active: item.active}"
        v-model="item.value"
        :label="item.key=='genre'?'GENRE':null"
        :items="item.data"
        @change="item.key=='genre'?getTracksPlays():selectGenre(item.value)"
        hide-details
        solo
        :style="
          item.key=='by'?'max-width: 28ch'
          :item.key=='genre'?'max-width: 20ch'
          :null
        "
      ></v-select>
    </aside>

    <v-data-table
      id="dataTable"
      :headers="headersTable"
      :items="dataTable"
      hide-default-footer
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
          <span>{{item.plays}}</span>
          <img class="play" :src="require(`@/assets/icons/${item.play?'pause':'play'}.svg`)" alt="play/pause icon" style="--w:3.095625em"
            @click="item.play?item.play=!item.play:dataTable.forEach(e=>{e.play=false;item.play=true});playPreview(item)">
        </div>
      </template>
      <template v-slot:[`item.price`]="{ item }">
        <div class="center" style="gap:.5em">
          <span>{{item.price}}$</span>
        </div>
      </template>
      <template v-slot:[`item.owner`]="{ item }">
        <div class="center" style="gap:.5em">
          <span>{{limitStr(item.owner, 17)}}</span>
        </div>
      </template>
    </v-data-table>

    <section id="dataTableMobile" class="font2">
      <v-card v-for="(item,i) in dataTable" :key="i" color="transparent" class="space wrap gap1">
        <aside class="acenter gap1" @click="goArtistDetails(item)">
          <img src="@/assets/miscellaneous/track.jpg" alt="track image" class="aspect" style="--h:100%">
          <div class="divcol gap1">
            <div class="divcol tstart">
              <h6 class="font1 p">{{item.name}}</h6>
              <span>{{item.track}}</span>
            </div>
            <span>
              <b>GENRE: </b>{{item.genre}}
            </span>
            <span>
              <b>OWNER: </b>{{item.owner}}
            </span>
          </div>
        </aside>

        <aside class="space gap2 marginaleft">
          <div class="divcol center">
            <img class="play" :src="require(`@/assets/icons/${item.play?'pause':'play'}.svg`)" alt="play/pause button" style="--w:1.9em"
              @click="item.play?item.play=!item.play:dataTable.forEach(e=>{e.play=false;item.play=true});playPreview(item)">
            <span>{{item.plays}}</span>
          </div>

          <div class="divcol center">
            <h6 class="p">PRICE</h6>
            <span>{{item.price}}</span>
          </div>
        </aside>
      </v-card>
    </section>
  </section>
</template>

<script>
import selector from "../../services/wallet-selector-api";
import gql from "graphql-tag";

export default {
  name: "stats",
  data() {
    return {
      track: null,
      dataActions: [
        {
          key:"by",
          value:"LAST 24 HOURS",
          active:true,
          data: [
            "LAST 24 HOURS", "LAST WEEK", "LAST 3 DAYS"
          ],
        },
        {
          key:"genre",
          value:null,
          active: false,
          data: [
            "Any"
          ],
        },
      ],
      headersTable: [
        { value:"name", text:"TRACK/ARTIST", align:"center" },
        { value:"genre", text:"GENRE", align:"center" },
        { value:"plays", text:"PLAYS", align:"center" },
        { value:"price", text:"PRICE", align:"center" },
        { value:"owner", text:"OWNER", align:"center" },
      ],
      dataTable: [
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   price: 50,
        //   owner: "patysb.near"
        // },
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   name: "TRAVIS POLL",
        //   track: "Sunset dream",
        //   genre: "POP DANCE",
        //   plays: 4.007,
        //   play: false,
        //   price: 50,
        //   owner: "patysb.near"
        // },
      ],
    }
  },
  async mounted() {
    await selector()
    this.getGenders()
    this.getTracksPlays()
    this.$emit('RouteValidator')
  },
  methods: {
    goArtistDetails(item) {
      localStorage.setItem("artist", item.creator)
      this.$router.push('/artist-details')
    },
    selectGenre(item) {
      console.log(item)
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

        this.dataActions[1].data.push(element.name)
      }
      // this.getData()
    },
    getTracksPlays() {
      this.axios.get(process.env.VUE_APP_NODE_API + "/api/get-tracks-plays/")
        .then(async (res) => {
          console.log(res.data)
          const tracksAux = []
          for (let i = 0; i < res.data.length; i++) {
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
                play: false,
                track: sonido,
                type: "preview",
                status: null,
                disabled: false
              }

              tracksAux.push(item)
            } else {
              continue
            }
          }
          if (this.dataActions[1].value === "Any" || !this.dataActions[1].value) {
            this.dataTable = tracksAux
          } else {
            this.dataTable = tracksAux.filter((element) => element.genre === this.dataActions[1].value)
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
    async getArtistName(wallet) {
      
      const getDataUser = gql`
        query MyQuery($wallet: String!) {
          users(where: { wallet: $wallet }) {
            artist_name
            wallet
          }
        }
      `;

      const res = await this.$apollo.query({
        query: getDataUser,
        variables: { wallet: wallet },
      });

      const data = res.data;

      return data.users.length > 0 ? data.users[0].artist_name : null;
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
    playPreview(item) {
      this.track = item
      if (item.play) {
        this.$store.dispatch('updateTrack', item);
        let wallet = this.$selector.getAccountId()
        this.axios.post(process.env.VUE_APP_NODE_API + "/api/play-track/", {wallet, tokenId: item.token_id, creatorId: item.creator})
      } else {
        this.$store.dispatch('updateTrack', item);
      }
    },
  }
};
</script>

<style src="./Stats.scss" lang="scss" />
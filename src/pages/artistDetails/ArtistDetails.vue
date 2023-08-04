<template>
  <section id="artistDetails" class="divcol margin_global overflow gap2 isolate">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/home')">

      <div class="acenter" style="gap:48px">
        <v-avatar size="7.3125em">
          <img :src="avatar" alt="profile image" style="--w:100%">
        </v-avatar>

        <h1 class="p" style="max-width:14ch">{{ dataArtist.artistName || dataArtist.wallet  }}</h1>
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
              <span>0x4050...1f56</span>
            </div>
            <span>Joined April 2022</span>
          </div>
          <div class="acenter">
            <v-btn icon>
              <img src="@/assets/icons/share.svg" alt="share button">
            </v-btn>
            <v-btn icon @click="like=!like">
              <img :src="require(`@/assets/icons/like${like?'-active':''}.svg`)" alt="like button">
            </v-btn>
          </div>
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
        <template v-slot:[`item.price`]="{ item }">
          <div class="center gap2 tstart">
            <img :src="item.img" alt="track image" style="--w:4.1875em">
            <span>{{item.price}}</span>
          </div>
        </template>

        <template v-slot:[`item.plays`]="{ item }">
          <div class="center" style="gap:.5em">
            <img class="play" :src="require(`@/assets/icons/${item.play?'pause':'play'}.svg`)" alt="play/pause icon" style="--w:3.095625em"
              @click="item.play?item.play=!item.play:dataTable.forEach(e=>{e.play=false;item.play=true})">
            <span>{{item.plays}}</span>
          </div>
        </template>
        
        <template v-slot:[`item.time`]="{ item }">
          {{item.time}} ago
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
                @click="item.play?item.play=!item.play:dataTable.forEach(e=>{e.play=false;item.play=true})">
              <span>{{item.plays}}</span>
            </div>

            <span>{{item.time}} ago</span>
          </aside>
        </v-card>
      </section>

      <v-card v-show="dataActions[dataActions.findIndex(e=>e.key=='tracks')].active" class="isolate"
          v-for="(item,i) in dataTracks" :key="i">
        <v-btn id="play" class="play" icon @click="item.play?item.play=!item.play:dataTracks.forEach(e=>{e.play=false;item.play=true})">
          <img :src="require(`@/assets/icons/${item.play?'pause':'play'}-simple.svg`)" alt="play button" :style="`transform:${item.play?'translatex(0)':'translateX(3px)'}`">
        </v-btn>

        <v-avatar size="4.8125em">
          <img :src="item.img" alt="profile image" style="--w:100%">
        </v-avatar>

        <v-sheet color="var(--primary)" class="fill_w divcol center gap1 padd2">
          <div class="divcol marginaright">
            <h6 class="p">{{item.name}}</h6>
            <span class="font2 bold acenter" style="gap:.2em">
              FLOOR PRICE {{item.price}} <img src="@/assets/logos/near.svg" alt="near" style="--w:0.75em">
            </span>
          </div>

          <v-btn class="btn align font2" style="--bg:#000000;--c:var(--primary);--fs:1.2em">ADD TO CART</v-btn>
        </v-sheet>
      </v-card>
    </section>
  </section>
</template>

<script>
export default {
  name: "artistDetails",
  data() {
    return {
      dataArtist: {},
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
        { value:"price", text:"PRICE", align:"center" },
        { value:"genre", text:"GENRE", align:"center" },
        { value:"plays", text:"PLAYS", align:"center" },
        { value:"to", text:"TO", align:"center" },
        { value:"time", text:"TIME", align:"center" },
      ],
      dataTable: [
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          price: "-----",
          genre: "DANCE POP",
          plays: 4.679,
          play: false,
          to: "patysb.near",
          time: "3 days",
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          price: "-----",
          genre: "DANCE POP",
          plays: 4.679,
          play: false,
          to: "patysb.near",
          time: "3 days",
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          price: "-----",
          genre: "DANCE POP",
          plays: 4.679,
          play: false,
          to: "patysb.near",
          time: "3 days",
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          price: "-----",
          genre: "DANCE POP",
          plays: 4.679,
          play: false,
          to: "patysb.near",
          time: "3 days",
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          price: "-----",
          genre: "DANCE POP",
          plays: 4.679,
          play: false,
          to: "patysb.near",
          time: "3 days",
        },
      ],
      dataTracks: [
        { img: require("@/assets/avatars/a2.jpg") ,name: "LOVE ARROW", price: "20", play: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", price: "20", play: false },
      ],
    }
  },
  mounted() {
    this.getArtist()
    this.$emit('RouteValidator')
  },
  methods: {
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

      console.log(data)
      this.dataArtist.youAre = data.users[0].youare || null,
      this.dataArtist.location= data.users[0].location || null,
      this.dataArtist.musicGenre= String(data.users[0].music_genre) || "0",
      this.dataArtist.age= Number(data.users[0].age) || null,
      this.dataArtist.artistName= data.users[0].artist_name || null,
      this.dataArtist.description= data.users[0].description || null,
      this.dataArtist.publicUrl= data.users[0].public_url || null,

      console.log(this.dataArtist)

      // this.$apollo
      //   .watchQuery({
      //     query: getDataUser,
      //     variables: {
      //       wallet: user,
      //     },
      //     pollInterval: 10000, // 10 seconds in milliseconds
      //   })
      //   .subscribe(({ data }) => {
      //     console.log(data);
      //     this.dataUser = {
      //       youAre: data.users[0].youare || null,
      //       location: data.users[0].location || null,
      //       musicGenre: data.users[0].music_genre || "0",
      //       age: data.users[0].age || null,
      //       email: data.users[0].email || null,
      //       artistName: data.users[0].artist_name || null,
      //       description: data.users[0].description || null,
      //       publicUrl: data.users[0].public_url || null,
      //     } 
      //   });
    },
  }
};
</script>

<style src="./ArtistDetails.scss" lang="scss" />

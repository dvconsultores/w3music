<template>
  <section id="home" class="divcol overflow margin_global gap2 isolate">
    <section class="contup">
      <span class="tag">RADAR</span>

      <aside class="divcol">
        <h1>GOOD MORNING!</h1>

        <div class="aend">
          <div class="divcol">
            <img src="@/assets/miscellaneous/track.svg" alt="track" style="--w:clamp(17em, 24vw, 24.375em)">
            <div class="center align gap1" style="transform:translateY(-15px)">
              <img class="play" src="@/assets/icons/next-music.svg" alt="previous">
              <img class="play" :src="require(`@/assets/icons/${playMusic?'pause':'play'}-white.svg`)" alt="play/pause icon"
                @click="playMusic=!playMusic">
              <img class="play rotate" src="@/assets/icons/next-music.svg" alt="next">
            </div>
          </div>

          <div class="divcol jspace" style="max-width:42.5em;margin-bottom:6em;gap:clamp(2em, 3vw, 3em)">
            <div class="divcol">
              <h3 style="font-size:2.63125em;line-height:.7" class="p">NEW TRACKS</h3>
              <span style="font-size:2.63125em">release</span>
            </div>

            <div class="divcol">
              <div class="acenter">
                <div class="divcol">
                  <h4 class="p" style="line-height:.7">MANDY BAXTER</h4>
                  <span style="font-size: 1.5em">arrow</span>
                </div>
                <v-btn icon @click="like=!like">
                  <img :src="require(`@/assets/icons/like${like?'-active':''}.svg`)" alt="like">
                </v-btn>
              </div>
              <p class="p font2" style="font-size:1em;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </aside>

      <aside class="divcol gap2">
        <p class="p font2" style="font-size:1.25em">Meet new artists and songwriters with these recent releases</p>

        <section class="container-slide fnowrap scrollx">
          <blockquote v-for="(item,i) in dataRecentRelease" :key="i" class="divcol gap1 isolate">
            <v-card :style="`--bg-img:${item.img}`">
              <img class="play" :src="require(`@/assets/icons/${item.play?'pause':'play'}.svg`)" alt="play/pause icon"
                @click="item.play?item.play=!item.play:dataRecentRelease.forEach(e=>{e.play=false;item.play=true})">
              <img id="decoration" src="@/assets/miscellaneous/track.png" alt="decoration track">
            </v-card>
            <h6 class="p">{{item.name}}</h6>
          </blockquote>
        </section>
      </aside>
    </section>

    <section class="fwrap gap2">
      <aside class="divcol">
        <h2>TRENDING NOW</h2>

        <v-data-table
          id="dataTable"
          :headers="headersTable"
          :items="dataTable"
          hide-default-footer
        >
          <template v-slot:[`item.name`]="{ item }">
            <div class="center gap2" @click="$router.push('/artist-details')" style="cursor:pointer;-border-radius:4vmax">
              <div class="astart gap1">
                <h3>{{dataTable.indexOf(item)>8?null:0}}{{dataTable.indexOf(item)+1}}</h3>
                <img :src="item.img" alt="track image" style="--w:4.1875em">
              </div>

              <div class="divcol tstart">
                <h6 class="font1 p">{{item.name}}</h6>
                <span>{{item.track}}</span>
              </div>
            </div>
          </template>

          <template v-slot:[`item.plays`]="{ item }">
            <div class="center" style="gap:.5em">
              <img class="play" :src="require(`@/assets/icons/${item.play?'pause':'play'}.svg`)" alt="play/pause icon" style="--w:3.095625em"
                @click="item.play?item.play=!item.play:dataTable.forEach(e=>{e.play=false;item.play=true})">
              <span>{{item.plays}}</span>
            </div>
          </template>

          <template v-slot:[`item.add`]="{ item }">
            <v-btn icon @click="item.like=!item.like">
              <img :src="require(`@/assets/icons/like${item.like?'-active':''}.svg`)" alt="like button">
            </v-btn>
          </template>
        </v-data-table>
      </aside>

      <aside class="divcol">
        <h2>NEW BEATS</h2>

        <section class="grid" style="--gtc:repeat(auto-fit,minmax(min(100%,12.5em),1fr));gap:2em">
          <blockquote v-for="(item,i) in dataNewBeats" :key="i">
            <img :src="item.img" alt="track image" style="--w:max(100%,12.5625em)">
            <h6 class="p">{{item.name}}</h6>
          </blockquote>
        </section>

        <v-btn class="btn marginaleft margin2top font2">
          EXPLORE
        </v-btn>
      </aside>
    </section>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      like: false,
      playMusic: false,
      dataRecentRelease: [
        { img: "", name: "TRAVIS POLL", play: false },
        { img: "", name: "PAUL SMITH", play: false },
        { img: "", name: "SUSY MILLER", play: false },
      ],
      headersTable: [
        { value:"name", text:"TRACK/ARTIST", align:"center" },
        { value:"genre", text:"GENRE", align:"center" },
        { value:"plays", text:"PLAYS", align:"center", sortable:false },
        { value:"add", text:"ADD", align:"center", sortable:false },
      ],
      dataTable: [
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          like: false,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          like: false,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          like: false,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          like: false,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          like: false,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          like: false,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          like: false,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          like: false,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          like: false,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          like: false,
        },
      ],
      dataNewBeats: [
        { img: require("@/assets/miscellaneous/track-white.png"), name: "TRAVIS POLL" },
        { img: require("@/assets/miscellaneous/track-white.png"), name: "TRAVIS POLL" },
        { img: require("@/assets/miscellaneous/track-white.png"), name: "TRAVIS POLL" },
        { img: require("@/assets/miscellaneous/track-white.png"), name: "TRAVIS POLL" },
      ],
    }
  },
  mounted() {
    this.$emit('RouteValidator')
    const el = document.querySelectorAll(".scrollx");
    el.forEach((el) => {el.addEventListener("wheel", (e) => {
      e.preventDefault();el.scrollLeft += e.deltaY
    })})
  },
  methods: {
  }
};
</script>

<style src="./Home.scss" lang="scss" />
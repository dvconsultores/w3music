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

          <div class="divcol jspace gap1" style="max-width:42.5em;margin-bottom:6em">
            <h3 style="font-size:2.63125em">NEW TRACKS release</h3>

            <div class="divcol">
              <div class="acenter">
                <h4 class="p">MANDY BAXTER arrow</h4>
                <v-btn icon>
                  <img src="@/assets/icons/like.svg" alt="like">
                </v-btn>
              </div>
              <p class="p font2" style="font-size:1em">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

    <section class="space">
      <aside class="divcol">
        <h2>TRENDING NOW</h2>

        <v-data-table
          id="dataTable"
          :headers="headersTable"
          :items="dataTable"
          hide-default-footer
        >
          <template v-slot:[`item.track`]="{ item }">
            <div class="center gap2">
              <div class="astart gap1">
                <h3>{{dataTable.indexOf(item)>8?null:0}}{{dataTable.indexOf(item)+1}}</h3>
                <img :src="item.img" alt="track image" style="--w:4.1875em">
              </div>

              <div class="divcol">
                <h6 class="font1 p">{{item.name}}</h6>
                <span>{{item.track}}</span>
              </div>
            </div>
          </template>

          <template v-slot:[`item.plays`]="{ item }">
            <div class="acenter" style="gap:.5em">
              <img class="play" src="@/assets/icons/play.svg" alt="play icon" style="--w:3.095625em">
              <span>{{item.plays}}</span>
            </div>
          </template>

          <template v-slot:[`item.add`]>
            <v-btn icon>
              <img src="@/assets/icons/like.svg" alt="like">
            </v-btn>
          </template>
        </v-data-table>
      </aside>

      <aside class="divcol">
        <h2>NEW BEATS</h2>
      </aside>
    </section>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      playMusic: false,
      dataRecentRelease: [
        { img: "", name: "TRAVIS POLL", play: false },
        { img: "", name: "PAUL SMITH", play: false },
        { img: "", name: "SUSY MILLER", play: false },
      ],
      headersTable: [
        { value:"track", text:"TRACK/ARTIST", align:"center" },
        { value:"gender", text:"GENDER", align:"center" },
        { value:"plays", text:"PLAYS", align:"center" },
        { value:"add", text:"ADD", align:"center" },
      ],
      dataTable: [
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          gender: "POP DANCE",
          plays: 4.007,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          gender: "POP DANCE",
          plays: 4.007,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          gender: "POP DANCE",
          plays: 4.007,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          gender: "POP DANCE",
          plays: 4.007,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          gender: "POP DANCE",
          plays: 4.007,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          gender: "POP DANCE",
          plays: 4.007,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          gender: "POP DANCE",
          plays: 4.007,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          gender: "POP DANCE",
          plays: 4.007,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          gender: "POP DANCE",
          plays: 4.007,
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          gender: "POP DANCE",
          plays: 4.007,
        },
      ],
    }
  },
  mounted() {
    this.$emit('WrapperSpace')
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
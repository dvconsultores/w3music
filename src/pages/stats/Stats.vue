<template>
  <section id="stats" class="divcol margin_global gap2 isolate">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/home')">
      
      <div class="divcol">
        <span class="font2">STATS</span>
        <h1 class="p">HOTTEST TRACKS</h1>
      </div>
    </section>

    <aside class="wrap gap1 font2">
      <v-select
        v-for="(item,i) in dataActions" :key="i"
        :class="{active: item.active}"
        v-model="item.value"
        :label="item.key=='genre'?'GENRE':null"
        :items="item.data"
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
          <span>{{item.plays}}</span>
          <img class="play" :src="require(`@/assets/icons/${item.play?'pause':'play'}.svg`)" alt="play/pause icon" style="--w:3.095625em"
            @click="item.play?item.play=!item.play:dataTable.forEach(e=>{e.play=false;item.play=true})">
        </div>
      </template>
    </v-data-table>
  </section>
</template>

<script>
export default {
  name: "stats",
  data() {
    return {
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
            "DANCE POP", "LATIN"
          ],
        },
      ],
      headersTable: [
        { value:"name", text:"TRACK/ARTIST", align:"center" },
        { value:"genre", text:"GENRE", align:"center" },
        { value:"plays", text:"PLAYS", align:"center" },
        { value:"price", text:"FLOOR PRICE", align:"center" },
        { value:"owner", text:"OWNER", align:"center" },
      ],
      dataTable: [
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          price: 50,
          owner: "patysb.near"
        },
        {
          img: require("@/assets/miscellaneous/track.jpg"),
          name: "TRAVIS POLL",
          track: "Sunset dream",
          genre: "POP DANCE",
          plays: 4.007,
          play: false,
          price: 50,
          owner: "patysb.near"
        },
      ],
    }
  },
  mounted() {
    this.$emit('RouteValidator')
  },
  methods: {
  }
};
</script>

<style src="./Stats.scss" lang="scss" />
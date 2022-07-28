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
        <v-btn v-for="(item,i) in dataActions.filter" :key="i" class="btn clickable"
          :class="{inactive: !item.active}" style="--max-h:2.75em" @click="item.active=!item.active">
          {{item.name}}
        </v-btn>
      </div>

      <div class="acenter gap1">
        <v-btn icon style="--bg:var(--primary);--p:1.4em">
          <img src="@/assets/icons/lupa.svg" alt="search button" style="--w:1.5625em">
        </v-btn>
        <v-btn icon style="--bg:var(--primary);--p:1.4em">
          <img src="@/assets/icons/new-chat.svg" alt="new chat button" style="--w:1.5625em">
        </v-btn>
      </div>
    </aside>

    <section class="container-content grid" style="--gtc: repeat(auto-fit,minmax(min(100%,14.0625em),1fr));gap:clamp(4em, 5vw, 5em)">
      <v-card v-for="(item,i) in dataCollection" :key="i" color="transparent" class="divcol gap1">
        <div class="relative">
          <img :src="require(`@/assets/icons/like-button${item.like?'-active':''}.svg`)" alt="like button" id="like" style="--w:4.279375em"
            @click="item.like=!item.like">
          <img :src="item.img" alt="track image" style="--f: drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.25));--w:100%">
        </div>
        <div class="divcol">
          <h6 class="bold p">{{item.name}}</h6>
          <span>{{item.track}}</span>
        </div>
      </v-card>
    </section>
  </section>
</template>

<script>
export default {
  name: "library",
  data() {
    return {
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
        { img: require("@/assets/tracks/track1.jpg"), name: "Travis Poll", track: "Sunset dream", like: false },
        { img: require("@/assets/tracks/track1.jpg"), name: "Tracks & Beats you like", track: "List- 459", like: false },
        { img: require("@/assets/tracks/track1.jpg"), name: "Travis Poll", track: "Sunset dream", like: false },
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

<style src="./Library.scss" lang="scss" />
<template>
  <section id="buy" class="grid gap2">
    <aside class="divcol">
      <div class="section-header">
        <h2>CATEGORIES</h2>

        <v-expansion-panels accordion class="font2">
          <v-list class="fill_w" color="transparent">
            <v-list-item :class="{activeClass2: !allFilter}" @click="allFilter=!allFilter;
              dataCategories.forEach(e=>{e.selection.forEach(e2=>{allFilter?e2.active=false:e2.active=true})})">
              <v-list-item-title>ALL</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-expansion-panel v-for="(item,i) in dataCategories" :key="i">
            <v-expansion-panel-header>{{item.title}}
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
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </aside>

    <aside class="divcol gap2" style="transform:translateY(64px)">
      <div class="section-header">
        <h3>AFOFUSION</h3>

        <aside class="space wrap gap1">
          <div class="fwrap gap1" style="--fb: 1 1">
            <v-select
              v-model="recent"
              :items="dataRecent"
              item-text="recent"
              placeholder="RECENT"
              hide-details
              solo
            ></v-select>
            <v-select
              v-model="atribute"
              :items="dataAtribute"
              item-text="atribute"
              placeholder="ATRIBUTE"
              hide-details
              solo
            ></v-select>
          </div>

          <v-btn class="btn font2" style="--max-w:13.9375em;--h:2.75em;--bg:hsl(0, 0%, 96%, .75);--b:2.5px solid var(--primary)" @click="$router.push('/buy/checkout')">
            <span class="acenter" style="gap:.5em">
              <img src="@/assets/icons/market-active.svg" alt="market icon" style="--w:25px">
              <span>CART:</span>
              <span>1</span>
            </span>

            <span class="acenter" style="gap:.2em">20 <img src="@/assets/logos/near.svg" alt="near" style="--w:13px;--t:translateY(-2px)"></span>
          </v-btn>
        </aside>
      </div>
      
      <aside class="section-content grid gap2">
        <v-card v-for="(item,i) in dataAfrofusion" :key="i" class="isolate">
          <v-btn id="play" class="play" icon @click="item.play?item.play=!item.play:dataAfrofusion.forEach(e=>{e.play=false;item.play=true})">
            <img :src="require(`@/assets/icons/${item.play?'pause':'play'}-simple.svg`)" alt="play button" :style="`transform:${item.play?'translatex(0)':'translateX(3px)'}`">
          </v-btn>

          <v-avatar size="4.8125em">
            <img :src="item.img" alt="profile image" style="--w:100%">
          </v-avatar>

          <v-sheet color="var(--primary)" class="fill_w divcol center gap1 padd2">
            <div class="divcol marginaright">
              <h6 class="p">{{item.name}}</h6>
              <span class="font2" style="font-size:0.875em">by {{item.by}}</span>
            </div>

            <span class="font2 bold acenter" style="gap:.2em">
              FLOOR PRICE {{item.price}} <img src="@/assets/logos/near.svg" alt="near" style="--w:0.75em">
            </span>

            <div class="center gap1">
              <v-btn class="btn align font2" style="--bg:#000000;--c:var(--primary);--fs:1.2em">ADD TO CART</v-btn>
              <v-btn icon style="--b:1px solid #000000" @click="item.like=!item.like">
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
export default {
  name: "buy",
  data() {
    return {
      allFilter: false,
      dataCategories: [
        {
          title: "Afrobeats",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "Pop",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "Reggae",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "Instrumental",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "Hip Hop",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "Rap",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "Jazz",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "Latin",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "EDM",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "Country",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "Blues",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
        {
          title: "Classical",
          selection: [
            {name:"Afropop", active:false}, {name:"Afrofusion", active:false}, {name:"Alté Vibes", active:false}, {name:"Afro-Soul", active:false},
            {name:"Hight-life", active:false}, {name:"Fuji", active:false}, {name:"Juju", active:false}, {name:"Apala", active:false}, {name:"Amapiano", active:false}
          ],
        },
      ],
      recent: "RECENT",
      dataRecent: [],
      atribute: "ATRIBUTE",
      dataAtribute: [],
      dataAfrofusion: [
        { img: require("@/assets/avatars/a2.jpg") ,name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
        { img: require("@/assets/avatars/a2.jpg"), name: "LOVE ARROW", by: "Travis Poll", price: "20", play: false, like: false },
      ],
    }
  },
  computed: {
    route() {
      return this.$router.currentRoute.name
    }
  },
  mounted() {
    this.$emit('RouteValidator')
  },
  methods: {
  }
};
</script>

<style src="./Buy.scss" lang="scss" />
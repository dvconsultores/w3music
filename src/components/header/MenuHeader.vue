<template>
  <section id="menuHeader">
    <!-- drawer -->
    <v-navigation-drawer
      id="toggleBar"
      v-model="drawer"
      height="100%"
      fixed right
      temporary
      :overlay-opacity="$store.state.overlay.opacity"
      :overlay-color="$store.state.overlay.color"
      color="var(--secondary)"
      class="font2"
    >
      <section class="container-header end">
        <v-btn icon @click="drawer=false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:2.375em">
        </v-btn>
      </section>

      <section class="container-content divcol jspace gap2">
        <v-expansion-panels focusable accordion class="anim_moveleft">
          <template v-if="dataDrawer.expansion">
            <v-expansion-panel v-for="(item, index) in dataDrawer.expansion" :key="index">
              <!-- title -->
              <v-expansion-panel-header hide-actions @click="ActiveClass('expansion', item);">
                <v-col class="conttitle acenter gap1 h10_em">
                  <img :src="require(`@/assets/icons/${item.icon}${item.active?'-active':''}.svg`)" :alt="item.alt" class="icon" :class="{active: item.active}">
                  <span class="normal" style="max-width: max-content">{{ item.name }}</span>
                  <v-icon small color="#ffffff" :class="{active_rotate: item.active}">mdi-menu-down</v-icon>
                </v-col>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-list>
                  <!-- ciclo for items -->
                  <v-list-item-group active-class="activeText">
                    <v-list-item v-for="(item2,i) in item.selection" :key="i" :ripple="false" :to="item2.to">
                      <v-list-item-title class="center h10_em">
                        <span class="normal">{{ item2.name}}</span>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </template>


          <template v-if="dataDrawer.list">
            <v-list class="fill_w">
              <!-- ciclo for items -->
              <v-list-item v-for="(item,i) in dataDrawer.list" :key="i" link :to="(item.to)" :ripple="false">
                <v-list-item-content @click="ActiveClass('list', item)">
                  <v-col class="conttitle acenter gap1 h10_em">
                    <img :src="require(`@/assets/icons/${item.icon}${item.active?'-active':''}.svg`)" class="icon" :alt="item.alt" :class="{active: item.active}">
                    <span style="max-width: max-content">
                      {{ item.name }}
                    </span>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </template>
        </v-expansion-panels>

        <section class="container-footer divcol center gap2">
          <v-btn class="btn" style="--max-w:9.1875em;--p:0 1.2em">LOG IN WITH NEAR</v-btn>

          <div class="center">
            <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.url" target="_blank">
              <img :src="require(`@/assets/icons/${item.icon}.svg`)" alt="social red">
            </v-btn>
          </div>
        </section>
      </section>
    </v-navigation-drawer>

    <!-- menu market -->
    <v-menu activator=".openMenuMarket" right offset-x>
      <v-list id="menuMarket" class="font2">
        <v-list-item-group active-class="activeClass">
          <v-list-item disabled>
            <v-list-item-title>MARKETPLACE</v-list-item-title>
          </v-list-item>

          <v-list-item v-for="(item,i) in dataDrawer.expansion[0].selection" :key="i" :to="`/${item.key}`">
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <!-- menu login -->
    <v-menu activator=".openMenuLogin" right offset-x>
      <v-list id="menuLogin" class="font2">
        <v-list-item-group active-class="activeClass">
          <v-list-item v-for="(item,i) in dataMenuLogin" :key="i" :to="item.to" @click="goTo(item.key)">
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </section>
</template>

<script>
import { i18n } from "@/plugins/i18n";
export default {
  name: "headerMenu",
  i18n: require("./i18n"),
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   this.OverlayMethod(theme);
  // },
  data() {
    return {
      // responsive: false,
      messages: 1,
      drawer: false,
      dataDrawer: {
        list: [
          {
            key: "stats",
            icon: "stats",
            name: "STATS",
            to: "/stats",
            active: false,
          },
          {
            key: "chats",
            icon: "chats",
            name: "CHATS",
            to: "/chats",
            active: false,
          },
          {
            key: "settings",
            icon: "settings",
            name: "SETTINGS",
            active: false,
          },
          {
            key: "faq",
            icon: "faq",
            name: "FAQ",
            active: false,
          },
        ],
        expansion: [
          {
            icon: "market",
            name: "MARKETPLACE",
            active: false,
            selection: [
              {name: "Buy", key: "buy", to: "/buy"},
              {name: "Sell", key: "sell", to: "/sell"},
            ],
          },
        ],
      },
      dataSocial: [
        { icon:"twitter", url:"#" },
        { icon:"instagram", url:"#" },
        { icon:"twitch", url:"#" }
      ],
      dataMenuLogin: [
        { key:"profile", name:"Profile", to:"/profile" },
        { key:"library", name:"Library", to:"/library" },
        { key:"logout", name:"Log out" },
      ],
    };
  },
  mounted() {
    // responsive
    // this.Responsive()
    // document.addEventListener('resize', this.Responsive());
  },
  methods: {
    ActiveClass(key, item) {
      // mejorar hace falta
      if (key=='expansion') {
        if (item.active) {
          item.active=!item.active
        } else {
          this.dataDrawer.list.forEach(e=>{e.active=false})
          this.dataDrawer.expansion.forEach(e=>{e.active=false})
          item.active=true
        }
      } else if (key=='list') {
        this.dataDrawer.expansion.forEach(e=>{e.active=false})
        this.dataDrawer.list.forEach(e=>{e.active=false})
        item.active=true
      }
    },
    goTo(key) {
      if (key=='logout') {
        this.$ramper.signOut()
        // setTimeout(() => this.$router.go(0), 100)
        this.$router.go(0)
      }
    },
    // Responsive() {
    //   if (window.innerWidth <= 880) {
    //     this.responsive = true
    //   } else {
    //     this.responsive = false
    //   }
    // },
    CambiarLanguage(lang) {
      if (lang === "ES") {
        localStorage.language = lang;
        i18n.locale = lang;
      } else {
        localStorage.language = lang;
        i18n.locale = lang;
      }
    },
  },
};
</script>

<style src="./Header.scss" lang="scss"></style>

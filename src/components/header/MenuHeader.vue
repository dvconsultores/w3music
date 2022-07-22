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

      <v-expansion-panels focusable accordion class="anim_moveleft divcol_inv">
        <template v-if="dataDrawer.list">
          <v-list class="fill_w">
            <!-- ciclo for items -->
            <v-list-item v-for="(item,i) in dataDrawer.list" :key="i" link :to="(item.to)">
              <v-list-item-content>
                <v-col class="conttitle acenter gap1 h10_em">
                  <img :src="require(`@/assets/icons/${item.icon}.svg`)" :alt="item.alt">
                  <span style="max-width: max-content">
                    {{ item.name }}
                  </span>
                </v-col>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>

        <template v-if="dataDrawer.expansion">
          <v-expansion-panel v-for="(item, index) in dataDrawer.expansion" :key="index">
            <!-- title -->
            <v-expansion-panel-header hide-actions @click="item.active?item.active=!item.active:dataDrawer.expansion.forEach(e=>{e.active=false;item.active=true})">
              <v-col class="conttitle acenter gap1 h10_em">
                <img :src="require(`@/assets/icons/${item.icon}.svg`)" :alt="item.alt" class="icon">
                <span class="normal" style="max-width: max-content">{{ item.name }}</span>
                <v-icon small color="#ffffff" :style="item.active?'transform:rotate(0deg)':'transform:rotate(180deg)'">mdi-menu-down</v-icon>
              </v-col>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-list>
                <!-- ciclo for items -->
                <v-list-item v-for="(item2,i) in item.selection" :key="i" @click="CambiarLanguage(item2.key)">
                  <v-list-item-title class="center h10_em">
                    <span class="normal">{{ item2.name}}</span>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
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
    </v-navigation-drawer>
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
      messages: 1,
      drawer: false,
      dataDrawer: {
        list: [
          {
            key: "stats",
            icon: "stats",
            name: "STATS",
            to: "",
          },
          {
            key: "chats",
            icon: "chats",
            name: "CHATS",
            to: "",
          },
          {
            key: "settings",
            icon: "settings",
            name: "SETTINGS",
          },
          {
            key: "faq",
            icon: "faq",
            name: "FAQ",
          },
        ],
        expansion: [
          {
            icon: "market-active",
            name: "MARKETPLACE",
            active: false,
            selection: [
              {name: "1", key: "1"},
              {name: "2", key: "2"},
              {name: "3", key: "3"},
              {name: "4", key: "4"},
            ],
          },
        ],
      },
      dataSocial: [
        { icon:"twitter", url:"#" },
        { icon:"instagram", url:"#" },
        { icon:"twitch", url:"#" }
      ]
    };
  },
  methods: {
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

<template>
  <section id="checkout" class="divcol">
    <v-card class="card divcol" style="--bg:hsl(0, 0%, 96%, .47);--p:1em 2em;--max-w:23.75em;--br:0">
      <h3 class="p" style="font-size:3em">NICOLEBROWN.NEAR</h3>
      <span class="font2" style="font-size:1.5em">Balance: 100</span>
    </v-card>

    <section class="divcol" style="gap:3em">
      <v-card v-for="(item,i) in dataCart" :key="i" color="transparent" class="space wrap acenter gap2">
        <div class="isolate acenter">
          <v-card class="card center" style="--br:0">
            <v-avatar size="clamp(calc(7em - 3em), 7vw, 7em)">
              <img :src="item.img" :alt="`${item.name} image`" style="--w:100%">
            </v-avatar>

            <img id="decoration" src="@/assets/miscellaneous/track.png" alt="track image" style="--w:clamp(calc(13.625em - 4em), 13vw, 13.625em)">
          </v-card>

          <v-sheet class="divcol" color="var(--primary)">
            <h6 class="p">{{item.name}}</h6>
            <span class="font2">by <a class="not_typography" href="#">{{item.by}}</a></span>
          </v-sheet>
        </div>

        <div class="divcol">
          <v-select
            label="CHOOSE MARKETPLACE"
            v-model="item.marketplace"
            :items="dataMarketplace"
            item-text="marketplace"
            multiple attach
            :menu-props="{contentClass: 'choose-marketplace'}"
            style="width:45ch"
          >
            <template v-slot:selection="slotProps">
              <v-btn icon style="--b:1px solid #000000">
                <img :src="slotProps.item.marketplace" alt="button">
              </v-btn>
            </template>

            <template v-slot:item="slotProps">
              <v-btn icon :style="`--b:1px solid ${slotProps.item.active?'#000000':'#ffffff'}`">
                <img :src="slotProps.item.marketplace" alt="button">
              </v-btn>
            </template>
          </v-select>
        </div>

        <div class="acenter not_fwrap" style="gap:.1em">
          <span style="font-size:clamp(2.5em,3vw,3em)">{{item.price}}</span>
          <img src="@/assets/icons/near.svg" alt="near" style="--w:clamp(2em,2.5vw,2.5em)">
        </div>

        <v-btn id="close" icon style="--bg:#000000;--bs:0px 4px 4px rgba(0, 0, 0, 0.25)" class="not_fwrap">
          <img src="@/assets/icons/x-yellow.svg" alt="delete button" style="--w:clamp(1em, 1.25vw, 1.25em)">
        </v-btn>
      </v-card>
    </section>

    <div class="marginaleft divcol aend gap2">
      <v-card class="card divcol" style="--bg:hsl(0, 0%, 96%, .47);--p:1em 2em;--max-w:17.0625em;box-shadow: 7px 8px 24px rgba(0, 0, 0, 0.25) !important;--br:0">
        <h3 class="p" style="font-size:3em">1 IN CART</h3>
        <span class="font2 acenter" style="font-size:1.5em;gap:.1em">
          Total: 20 <img src="@/assets/logos/near.svg" alt="near">
        </span>
      </v-card>

      <v-btn class="btn center font2" style="--w:max-content" @click="$router.push('/results')">PROCEED</v-btn>
    </div>
  </section>
</template>

<script>
export default {
  name: "checkout",
  data() {
    return {
      dataMarketplace: [
        {marketplace: require("@/assets/icons/auto.svg")},
        {marketplace: require("@/assets/icons/doge.svg")},
        {marketplace: require("@/assets/icons/dlt.svg")},
        {marketplace: require("@/assets/icons/xdn.svg")}
      ],
      dataCart: [
        {
          img: require("@/assets/avatars/a2.jpg"),
          name: "SUMMER DAYS",
          by: "Travis Poll",
          marketplace: null,
          price: 20,
        },
        {
          img: require("@/assets/avatars/a2.jpg"),
          name: "SUMMER DAYS",
          by: "Travis Poll",
          marketplace: null,
          price: 20,
        },
      ],
    }
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style src="./Buy.scss" lang="scss" />
<template>
  <section id="marketplaceBuy" class="divcol overflow margin_global gap2 isolate">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.currentRoute.name=='buy'?$router.push('/home'):$router.push('/buy')">

      <div class="space wrap" style="gap: 1em 0">
        <div id="container-title" class="divcol" :class="{checkoutClass: $router.currentRoute.name=='checkout'}">
          <span class="font2" style="font-size:16px">MARKETPLACE</span>
          <h1 class="p">{{$router.currentRoute.name === 'buy' ? 'BUY' : $router.currentRoute.name === 'genres' ? 'DESCRIPTION' :  'CHECKOUT'}}</h1>
        </div>

        <v-btn v-show="$router.currentRoute.name=='buy'" class="btn font2 vermobile marginaleft" style="--max-w:13.9375em;--h:2.75em;--bg:hsl(0, 0%, 96%, .75);--b:2.5px solid var(--primary)" @click="$router.push('/buy/checkout')">
          <div class="acenter" style="gap:.5em">
            <img src="@/assets/icons/market-active.svg" alt="market icon" style="--w:1.5625em;--t:translateY(-2px)">
            <span>CART: 1</span>
          </div>

          <span class="acenter margin2left" style="gap:.2em;font-size:17px">
            20 <img src="@/assets/logos/near.svg" alt="near" style="--w:13px;--t:translateY(-2px)">
          </span>
        </v-btn>
      </div>
    </section>

    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "marketplace",
  data() {
    return {
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
<template>
  <section id="marketplaceBuy" class="divcol overflow margin_global gap2 isolate">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.currentRoute.name=='buy'?$router.push('/home'):$router.push('/buy')">

      <div class="divcol">
        <span class="font2">MARKETPLACE</span>
        <h1 class="p" style="max-width:14ch">{{$router.currentRoute.name=='buy'?'BUY':'CHECKOUT'}}</h1>
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
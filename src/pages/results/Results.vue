<template>
  <section id="results" class="divcol margin_global">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back-market.svg" alt="back" style="--w:231px" @click="$router.push('/buy')">

      <div class="divcol">
        <span class="font2">{{results?'YOUR PURCHASE WAS':'THERE IS AN'}}</span>
        <h1 class="p">{{results?'SUCCESSFUL':'ERROR'}}</h1>
      </div>
    </section>

    <section class="container-content acenter isolate" :class="{errorClass: !results}">
      <img :src="require(`@/assets/miscellaneous/${results?'success':'error'}.png`)" :alt="`${results?'success':'error'} image`">

      <v-card class="card acenter gap1" style="--bg:hsl(0, 0%, 96%, .47);--p:2em;--bs:7px 8px 24px rgba(0, 0, 0, 0.25)">
        <img :src="require(`@/assets/icons/${results?'like':'warning'}-icon.svg`)" :alt="`${results?'success':'error'} icon`" style="--w:min(100%, 5.388125em)">
        <h3 class="p">{{results?'THANK YOU FOR YOUR PURCHASE!':'SORRY, AN ERROR OCCURRED'}}</h3>
      </v-card>
    </section>
  </section>
</template>

<script>
export default {
  name: "results",
  data() {
    return {
      results: true,
    }
  },
  mounted() {
    this.$emit('RouteValidator')
  },
  methods: {
  }
};
</script>

<style src="./Results.scss" lang="scss" />
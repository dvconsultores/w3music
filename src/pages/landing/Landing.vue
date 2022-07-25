<template>
  <section id="landing" class="divcol center overflow" ref="hero">
    <h1 class="tcenter">WHO ARE YOU?</h1>
    <img class="eliminarmobile" src="@/assets/images/hero.png" alt="hero" style="--w:85.5em;--h:47.125em">
    <img class="vermobile" src="@/assets/images/hero-mobile.png" alt="hero" style="--w:max(100%,24.375em);--h:37.4375em">

    <img id="artist" class="floating" src="@/assets/miscellaneous/artist.svg" alt="artist" @click="$router.push('/home')">
    <img id="other" class="floating" src="@/assets/miscellaneous/other.svg" alt="other" @click="$router.push('/home')">
    <img id="fan" class="floating" src="@/assets/miscellaneous/fan.svg" alt="fan" @click="$router.push('/home')">
  </section>
</template>

<script>
export default {
  name: "landing",
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

<style src="./Landing.scss" lang="scss" />

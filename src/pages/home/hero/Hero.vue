<template>
  <section id="hero" class="divcol center overflow" ref="hero">
    <h1>WHO ARE YOU?</h1>
    <img class="eliminarmobile" src="@/assets/images/hero.png" alt="hero" style="--w:85.5em;--h:47.125em">
    <img class="vermobile" src="@/assets/images/hero-mobile.png" alt="hero" style="--w:max(100%,24.375em);--h:37.4375em">

    <img id="artist" class="floating" src="@/assets/miscellaneous/artist.svg" alt="fan">
    <img id="other" class="floating" src="@/assets/miscellaneous/other.svg" alt="fan">
    <img id="fan" class="floating" src="@/assets/miscellaneous/fan.svg" alt="fan">
  </section>
</template>

<script>
export default {
  name: "hero",
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

<style src="./Hero.scss" lang="scss" />

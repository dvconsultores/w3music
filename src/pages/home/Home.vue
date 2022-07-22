<template>
  <section id="home" class="divcol" style="font-size: 16px; gap:4em">
    <Hero ref="hero"></Hero>
  </section>
</template>

<script>
import Hero from './hero/Hero'

export default {
  name: "home",
  components: { Hero },
  data() {
    return {
    }
  },
  methods: {
  }
};
</script>

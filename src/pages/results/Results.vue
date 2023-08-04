<template>
  <section id="results" class="divcol overflow margin_global">
    <section class="container-header divcol" style="gap:2em" :class="{errorClass: !results}">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:231px" @click="back()">

      <div class="divcol">
        <span class="font2">{{results?'YOUR TRANSACTION WAS':'THERE IS AN'}}</span>
        <h1 class="p">{{results?'SUCCESSFUL':'ERROR'}}</h1>
        <a v-if="hash" class="font2" :href="hash" target="_blank" style="color: blue !important;">{{'VIEW TRANSACTION'}}</a>
      </div>
    </section>

    <section class="container-content acenter isolate" :class="{errorClass: !results}">
      <div class="container-wrapper">
        <img id="bg-image" :src="require(`@/assets/miscellaneous/${results?'success':'error'}.png`)" :alt="`${results?'success':'error'} image`">

        <v-card class="card acenter gap1" style="--bg:hsl(0, 0%, 96%, .47);--p:2em;--bs:7px 8px 24px rgba(0, 0, 0, 0.25)">
          <img :src="require(`@/assets/icons/${results?'like':'warning'}-icon.svg`)" :alt="`${results?'success':'error'} icon`" style="--w:min(100%, 5.388125em)">
          <h3 class="p">{{results?textInferior:'SORRY, AN ERROR OCCURRED'}}</h3>
        </v-card>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "results",
  data() {
    return {
      results: false,
      hash: null,
      textInferior: "SUCCESSFUL OPERATION!"
    }
  },
  created(){
    const result = localStorage.getItem("results")
    this.hash = localStorage.getItem("linkHash")
    const typeResult = localStorage.getItem("typeResult")

    if (result === "true") {
      this.results = true
    } else {
      this.results = false
    }
    
    if (typeResult === "profile") {
      this.textInferior = "PROFILE SAVED SUCCESSFULY"
    } else {
      this.textInferior = "SUCCESSFUL OPERATION!"
    }

    localStorage.removeItem("results")
    localStorage.removeItem("linkHash")
    localStorage.removeItem("typeResult")
  },
  mounted() {
    this.$emit('RouteValidator')
  },
  methods: {
    back() {
      window.history.go(-1);
    },
  }
};
</script>

<style src="./Results.scss" lang="scss" />
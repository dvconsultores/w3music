<template>
  <v-app id="layout" class="relative">
    <Header ref="header" />
    <v-main :class="wrapperSpace?'with':'without'" class="parent">
      <router-view @WrapperSpace="WrapperSpace()"></router-view>
    </v-main>
    <Footer ref="footer"></Footer>
  </v-app>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./Layout.scss";

export default {
  name: "layout",
  components: { Header, Footer },
  data() {
    return { wrapperSpace: true }
  },
  methods: {
    WrapperSpace() {
      if (this.$router.currentRoute.name=='landing') {this.wrapperSpace=false}
      else {this.wrapperSpace=true}
    }
  }
}
</script>

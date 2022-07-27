<template>
  <v-app id="layout" class="relative">
    <Header ref="header" />
    <v-main :class="wrapperSpace?'with':'without'" class="parent">
      <router-view @RouteValidator="RouteValidator()"></router-view>
    </v-main>
    <Footer :footerStyle="footerStyle" ref="footer"></Footer>
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
    return { wrapperSpace: true, footerStyle: false }
  },
  methods: {
    RouteValidator() {
      const route = this.$router.currentRoute.name
      if (route=='landing'||route=='results'||route=='chats') {this.wrapperSpace=false}
      else {this.wrapperSpace=true}
      //
      if (route=='landing'||route=='profile'||route=='results'||route=='chats') {this.footerStyle=false}
      else {this.footerStyle=true}
    },
  }
}
</script>

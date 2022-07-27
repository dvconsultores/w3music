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
  computed: {
    route() {
      return this.$router.currentRoute.name
    },
  },
  methods: {
    RouteValidator() {
      if (this.route=='landing'||this.route=='results'||this.route=='chats') {this.wrapperSpace=false}
      else {this.wrapperSpace=true}
      //
      if (this.route=='landing'||this.route=='profile'||this.route=='results'||this.route=='chats') {this.footerStyle=false}
      else {this.footerStyle=true}
    },
  }
}
</script>

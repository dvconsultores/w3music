<template>
  <v-app id="layout" class="relative">
    <Header ref="header" />
    <v-main :class="wrapperSpace?'with':'without'" class="parent">
      <router-view @WrapperSpace="WrapperSpace()"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/header/Header";
import "./Layout.scss";

export default {
  name: "layout",
  components: { Header },
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

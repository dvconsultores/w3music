<template>
  <section id="alerts">
    <v-snackbar
      v-for="(item,i) in dataAlerts" :key="i"
      v-model="item.model"
      centered top
      transition="slide-Y-reverse-transition"
      :style="`--color-snackbar: ${item.color}`"
    >
      <img :src="item.icon" :alt="`${item.key} Icon`">
      <div class="divcol">
        <h3 class="font1">{{$t(item.title)}}</h3>
        <p class="font2 p">{{$t(item.desc)}}</p>
      </div>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  name: "alerts",
  i18n: require("./i18n"),
  data() {
    return {
      alert: true,
      dataAlerts: [
        {
          key: "success",
          title: "success",
          desc: "textSuccess",
          icon: require('@/assets/icons/success.svg'),
          color: "#0F43D5",
          model: false,
        },
        {
          key: "cancel",
          title: "cancel",
          desc: "textCancel",
          icon: require('@/assets/icons/cancel.svg'),
          color: "#F16211",
          model: false,
        }
      ]
    };
  },
  methods: {
    Alerts(key, title, desc) {
      const index = this.dataAlerts.findIndex(data=>data.key==key);
      this.dataAlerts[index].model = true
      if (title) {this.dataAlerts[index].title=title}
      if (desc) {this.dataAlerts[index].desc=desc}
    },
  }
};
</script>

<style src="./Alerts.scss" lang="scss"></style>

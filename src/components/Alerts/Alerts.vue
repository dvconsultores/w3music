<template>
  <section id="alerts">
    <v-snackbar
      v-for="(item,i) in dataAlerts" :key="i"
      v-model="item.model"
      centered top
      transition="slide-Y-reverse-transition"
      :style="`--color-snackbar: ${item.color}`"
    >
      <!-- <v-icon :style="`color: ${item.color} !important`" size="2.5rem">{{ item.icon }}</v-icon> -->
      <img :src="require(`@/assets/icons/${item.icon}.svg`)" :alt="`${item.key} Icon`">
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
      dataAlerts: []
    };
  },
  methods: {
    ClearAlerts() {this.dataAlerts=[]},
    Alerts(key, title, desc) {

      // clear alerts
      setTimeout(() => {
        this.ClearAlerts()
      }, 5000);

      // create alert
      if (title&&desc) {
        var alert = {
          key: key,
          title: title,
          desc: desc,
          // icon: key=='success'?'mdi-check-circle':key=='cancel'?'mdi-close-circle':null,
          icon: key=='success'?'success':key=='cancel'?'cancel':null,
          color: key=='success'?'#A4FDDF':key=='cancel'?'rgb(200, 0, 0)':null,
          model: true,
        }
      } else if (title) {
        var alert = {
          key: key,
          title: title,
          desc: `text${key.replace(/^\w/, (c) => c.toUpperCase())}`,
          // icon: key=='success'?'mdi-check-circle':key=='cancel'?'mdi-close-circle':null,
          icon: key=='success'?'success':key=='cancel'?'cancel':null,
          color: key=='success'?'#A4FDDF':key=='cancel'?'rgb(200, 0, 0)':null,
          model: true,
        }
      } else if (desc) {
        var alert = {
          key: key,
          title: key,
          desc: desc,
          // icon: key=='success'?'mdi-check-circle':key=='cancel'?'mdi-close-circle':null,
          icon: key=='success'?'success':key=='cancel'?'cancel':null,
          color: key=='success'?'#A4FDDF':key=='cancel'?'rgb(200, 0, 0)':null,
          model: true,
        }
      } else {
        var alert = {
          key: key,
          title: key,
          desc: `text${key.replace(/^\w/, (c) => c.toUpperCase())}`,
          // icon: key=='success'?'mdi-check-circle':key=='cancel'?'mdi-close-circle':null,
          icon: key=='success'?'success':key=='cancel'?'cancel':null,
          color: key=='success'?'#A4FDDF':key=='cancel'?'rgb(200, 0, 0)':null,
          model: true,
        }
      }
      this.dataAlerts.push(alert)
    },
  }
};
</script>

<style src="./Alerts.scss" lang="scss"></style>

_<template>
  <v-footer id="footer" :color="footerStyle?'var(--primary)':'transparent'" fixed>
    <v-row no-gutters class="align">
      <!-- content -->
      <div v-if="!footerStyle" class="marginaleft center">
        <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.url" target="_blank">
          <img id="social" :src="require(`@/assets/icons/${item.icon}.svg`)" :alt="`${item.icon} icons`" style="--w:1.5625em">
        </v-btn>
      </div>

      <section v-else class="fill_w space gap2">
        <blockquote class="center gap1">
          <img id="track" src="@/assets/miscellaneous/track-white.png" alt="track image" style="--w:3.06625em">
          <div class="divcol">
            <h6 class="p" style="font-size:clamp(1em, 1.4vw, 1.4em)">{{ track.name || "-" }}</h6>
            <span class="font2" style="font-size:clamp(1em, 1.2vw, 1.2em)">{{ track.by || "-" }}</span>
          </div>
        </blockquote>

        <aside class="acenter gap1">
          <v-btn v-for="(item,i) in dataActions" :key="i" icon style="--p:clamp(1.2em ,1.5vw, 1.5em)" @click="item.key=='play'?item.play=!item.play:null" :class="{eliminarmobile: item.deleteMobile}">
            <img :src="require(`@/assets/icons/${item.key=='play'?item.play?'pause-simple':'play-simple':item.icon}.svg`)" :alt="`${item.key} icon`"
              :style="`transform: ${item.key=='next'?'rotate(180deg)':null}
              ${item.key=='play'?item.icon=='play-simple'?'translateX(2px)':'translateX(0)':null};
              --w: clamp(1.46em - .4em, 1.4vw, 1.46em)`">
          </v-btn>
        </aside>

        <aside class="center gap1 font2 eliminarmobile" style="width:min(100%,18.6875em)">
          <span>{{sliderValue}}</span>
          <v-slider
            v-model="sliderValue"
            color="#000000"
            :min="0"
            :max="sliderMax"
            hide-details
            track-color="hsl(0, 0%, 0%, .22)"
          ></v-slider>
          <span>{{sliderMax}}</span>
        </aside>

        <aside class="center gap1" style="width:min(100%,6.875em)">
          <img src="@/assets/icons/sound.svg" alt="sound" style="--w:clamp(1.6875em - .4em, 1.6vw, 1.6875em)">
          <v-slider
            v-model="soundValue"
            color="#000000"
            :min="0"
            :max="100"
            :thumb-label="soundValue"
            hide-details
            track-color="hsl(0, 0%, 0%, .22)"
            class="font2"
          ></v-slider>
        </aside>
      </section>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  computed: {
    track() {
      return this.$store.getters.getTrack;
    }
  },
  props: {
    footerStyle: Boolean,
  },
  data() {
    return {
      dataSocial: [
        { icon:"twitter", url:"#" },
        { icon:"instagram", url:"#" },
        { icon:"twitch", url:"#" },
      ],
      dataActions: [
        { keY:"shuffle", icon:"shuffle", deleteMobile:true },
        { key:"previous", icon:"next-music" },
        { key:"play", icon:"play-simple", play: false },
        { key:"next", icon:"next-music" },
        { key:"repeat", icon:"repeat", deleteMobile:true },
      ],
      sliderValue: 0,
      sliderMax: 20,
      soundValue: 50,
    }
  },
  mounted() {
    console.log("HI JUAN")
    console.log(this.track)
  },
  methods: {
  }
}
</script>

<style src="./Footer.scss" lang="scss" />

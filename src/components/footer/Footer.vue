_<template>
  <v-footer id="footer" color="var(--primary)" fixed>
    <v-row no-gutters class="align">
      <!-- content -->
      <section class="fill_w space gap2">
        <blockquote class="center gap1">
          <img src="@/assets/miscellaneous/track-white.png" alt="track image" style="--w:3.06625em">
          <div class="divcol">
            <h6 class="p" style="font-size:1.4em">TRAVIS POLL</h6>
            <span class="font2" style="font-size:1.2em">Sunset dream</span>
          </div>
        </blockquote>

        <aside class="acenter gap1">
          <v-btn v-for="(item,i) in dataActions" :key="i" icon style="--p:1.5em" @click="item.key=='play'?item.play=!item.play:null">
            <img :src="require(`@/assets/icons/${item.key=='play'?item.play?'pause-simple':'play-simple':item.icon}.svg`)" :alt="`${item.key} icon`"
              :style="`transform: ${item.key=='next'?'rotate(180deg)':null}
              ${item.key=='play'?item.icon=='play-simple'?'translateX(2px)':'translateX(0)':null}`">
          </v-btn>
        </aside>

        <aside class="center gap1" style="width:min(100%,18.6875em)">
          <span>{{sliderValue}}</span>
          <v-slider
            v-model="sliderValue"
            color="#000000"
            :min="1"
            :max="sliderMax"
            hide-details
            track-color="hsl(0, 0%, 0%, .22)"
            class="font2"
          ></v-slider>
          <span>{{sliderMax}}</span>
        </aside>

        <aside class="center gap1" style="width:min(100%,6.875em)">
          <img src="@/assets/icons/sound.svg" alt="sound" style="--w:1.6875em">
          <v-slider
            v-model="soundValue"
            color="#000000"
            :min="1"
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
  data() {
    return {
      dataActions: [
        { keY:"shuffle", icon:"shuffle" },
        { key:"previous", icon:"next-music" },
        { key:"play", icon:"play-simple", play: false },
        { key:"next", icon:"next-music" },
        { key:"repeat", icon:"repeat" },
      ],
      sliderValue: 0,
      sliderMax: 20,
      soundValue: 50,
    }
  },
  methods: {
  }
}
</script>

<style src="./Footer.scss" lang="scss" />

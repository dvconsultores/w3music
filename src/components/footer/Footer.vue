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
            <span class="font2" style="font-size:clamp(1em, 1.2vw, 1.2em)">{{ visibleText || "-" }}</span>
            <!-- <span class="font2" style="font-size:clamp(1em, 1.2vw, 1.2em)">{{ visibleText || "-" }}</span> -->
          </div>
        </blockquote>

        <aside class="acenter gap1">
          <v-btn v-for="(item,i) in dataActions" :key="i" icon style="--p:clamp(1.2em ,1.5vw, 1.5em)" @click="clickPlayer(item)" :class="{eliminarmobile: item.deleteMobile}">
            <img :src="require(`@/assets/icons/${item.key=='play'?player.play?'pause-simple':'play-simple':item.icon}.svg`)" :alt="`${item.key} icon`"
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
            @input="changeSound()"
            :thumb-label="false"
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
      this.fullText =this.$store.getters.getTrack?.by
      this.startAnimation();
      return this.$store.getters.getTrack;
    },
    player() {
      this.soundValue = this.$store.getters.getPlayer?.volume * 100 || 50
      this.playTrack = this.$store.getters.getPlayer?.play || false
      console.log(this.playTrack)
      return this.$store.getters.getPlayer;
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
        { key:"play", icon:"play-simple"},
        { key:"next", icon:"next-music" },
        { key:"repeat", icon:"repeat", deleteMobile:true },
      ],
      playTrack: null,
      fullText: "",
      visibleText: '',
      maxChars: 25,
      currentIndex: 0,
      sliderValue: 0,
      sliderMax: 20,
      soundValue: null,
    }
  },
  mounted() {
    this.soundValue = this.player.volume * 100 || 50
  },
  methods: {
    clickPlayer(item) {
      const player = this.player
      if (item.key === "play") {
        player.play = !player.play
        this.$store.dispatch('updatePlayer', player);
      }
    },
    changeSound() {
      this.$store.dispatch('updateVolume', this.soundValue / 100);
    },
    startAnimation() {
      const animationInterval = setInterval(() => {
        if (this.currentIndex + this.maxChars <= this.fullText?.length) {
          this.visibleText = this.fullText.substring(
            this.currentIndex,
            this.currentIndex + this.maxChars
          );
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
          this.visibleText = this.fullText?.substring(
            this.currentIndex,
            this.currentIndex + this.maxChars
          );
          this.currentIndex++;
        }
      }, 1800); // Intervalo de tiempo entre cada iteración
    }
  }
}
</script>

<style src="./Footer.scss" lang="scss">
  .text-slide-enter-active {
    animation: slide-in 1s;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>

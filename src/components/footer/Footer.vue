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
          <img id="track" :src="track.img || require('@/assets/miscellaneous/track-white.png')" alt="track image" style="--w:3.06625em">
          <div class="divcol">
            <h6 class="p" style="font-size:clamp(1em, 1.4vw, 1.4em)">{{ track.name || "-" }}</h6>
            <span class="font2" style="font-size:clamp(1em, 1.2vw, 1.2em)">{{ visibleText || "-" }}</span>
            <!-- <span class="font2" style="font-size:clamp(1em, 1.2vw, 1.2em)">{{ visibleText || "-" }}</span> -->
          </div>
        </blockquote>

        <aside class="acenter gap1">
          <v-btn v-for="(item,i) in dataActionsLeft" :key="i" icon :disabled="disabledTrack && ((item.key === 'previous' || item.key === 'next') || (item.key === 'shuffle' || item.key === 'repeat'))" style="--p:clamp(1.2em ,1.5vw, 1.5em)" @click="btnLeft"
          :class="{ 'activeBtn': isPressedLeft }">
            <img :src="require(`@/assets/icons/${item.key=='play'?player.play?'pause-simple':'play-simple':item.icon}.svg`)" :alt="`${item.key} icon`"
              :style="`transform: ${item.key=='next'?'rotate(180deg)':null}
              ${item.key=='play'?item.icon=='play-simple'?'translateX(2px)':'translateX(0)':null};
              --w: clamp(1.46em - .4em, 1.4vw, 1.46em)`">
          </v-btn>
          <v-btn v-for="(item,i) in dataActions" :key="i" icon :disabled="disabledTrack && ((item.key === 'previous' || item.key === 'next') || (item.key === 'shuffle' || item.key === 'repeat'))" style="--p:clamp(1.2em ,1.5vw, 1.5em)" @click="clickPlayer(item)" :class="{eliminarmobile: item.deleteMobile}">
            <img :src="require(`@/assets/icons/${item.key=='play'?player.play?'pause-simple':'play-simple':item.icon}.svg`)" :alt="`${item.key} icon`"
              :style="`transform: ${item.key=='next'?'rotate(180deg)':null}
              ${item.key=='play'?item.icon=='play-simple'?'translateX(2px)':'translateX(0)':null};
              --w: clamp(1.46em - .4em, 1.4vw, 1.46em)`">
          </v-btn>
          <v-btn v-for="(item,i) in dataActionsRight" :key="i" icon :disabled="disabledTrack && ((item.key === 'previous' || item.key === 'next') || (item.key === 'shuffle' || item.key === 'repeat'))" style="--p:clamp(1.2em ,1.5vw, 1.5em)" @click="btnRight"
          :class="{ 'activeBtn': isPressedRight }">
            <img :src="require(`@/assets/icons/${item.key=='play'?player.play?'pause-simple':'play-simple':item.icon}.svg`)" :alt="`${item.key} icon`"
              :style="`transform: ${item.key=='next'?'rotate(180deg)':null}
              ${item.key=='play'?item.icon=='play-simple'?'translateX(2px)':'translateX(0)':null};
              --w: clamp(1.46em - .4em, 1.4vw, 1.46em)`">
          </v-btn>
        </aside>

        <aside v-if="timeTrack" class="center gap1 font2 eliminarmobile" style="width:min(100%,18.6875em)">
          <span>{{getConvertTime(sliderValue)}}</span>
          <v-slider
            v-model="sliderValue"
            color="#000000"
            :min="0"
            :max="timeTrack"
            @change="changeTimeSlider()"
            @input="inputTimeSlider()"
            hide-details
            track-color="hsl(0, 0%, 0%, .22)"
          ></v-slider>
          <span>{{getConvertTime(timeTrack)}}</span>
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
      if (typeof this.$store.getters.getTrack?.index !== "number") {
        this.disabledTrack = true
      } else {
        this.disabledTrack = false
      }
    
      this.fullText =this.$store.getters.getTrack?.by
      this.startAnimation();
      let track = this.$store.getters.getTrack?.track
      if (track) {
        this.timeTrack = track.duration || 0
        if (this.$store.getters.getPlayer?.play) {
          clearInterval(this.interval)
          this.interval = setInterval(() => {
            this.sliderValue = track.currentTime
            if (track.currentTime >= track.duration) {
              if (this.isPressedRight) {
                track.play()
              } else if (this.isPressedLeft) {
                this.$store.dispatch('arrowPlayer', "nextRandom");
              } else {
                this.$store.dispatch('arrowPlayer', "next");
              }
            }
          }, 500);
        }
      }      
      
      return this.$store.getters.getTrack;
    },
    player() {
      this.soundValue = this.$store.getters.getPlayer?.volume * 100 || 50
      this.playTrack = this.$store.getters.getPlayer?.play || false
      return this.$store.getters.getPlayer;
    }
  },
  props: {
    footerStyle: Boolean,
  },
  data() {
    return {
      isPressedRight: false,
      isPressedLeft: false,
      dataSocial: [
        { icon:"twitter", url:"#" },
        { icon:"instagram", url:"#" },
        { icon:"twitch", url:"#" },
      ],
      dataActions: [
        { key:"previous", icon:"next-music" },
        { key:"play", icon:"play-simple"},
        { key:"next", icon:"next-music" },
      ],
      dataActionsRight: [
        { key:"repeat", icon:"repeat", deleteMobile:true },
      ],
      dataActionsLeft: [
        { key:"shuffle", icon:"shuffle", deleteMobile:true },
      ],
      disabledTrack: true,
      playTrack: 0,
      timeTrack: 0,
      timeTrackStr: "-",
      fullText: "",
      visibleText: '',
      maxChars: 25,
      currentIndex: 0,
      sliderValue: 0,
      sliderValueStr: "-",
      sliderMax: 20,
      soundValue: null,
    }
  },
  mounted() {
    this.soundValue = this.player.volume * 100 || 50
  },
  methods: {
    btnRight() {
      this.isPressedRight = !this.isPressedRight;


      if (this.isPressedRight) {
        this.isPressedLeft = false
      }
    },
    btnLeft() {
      this.isPressedLeft = !this.isPressedLeft;

      if (this.isPressedLeft) {
        this.isPressedRight = false
      }
    },
    inputTimeSlider() {
      // clearInterval(this.interval)
    },
    changeTimeSlider() {
      clearInterval(this.interval)
      this.track.track.currentTime = this.sliderValue

      this.interval = setInterval(() => {
        this.sliderValue = this.track.track.currentTime
        if (this.track.track.currentTime >= this.track.track.duration) {
          if (this.isPressedRight) {
            this.track.track.play()
          } else if (this.isPressedLeft) {
            this.$store.dispatch('arrowPlayer', "nextRandom");
          } else {
            this.$store.dispatch('arrowPlayer', "next");
          }
        }
      }, 500);
    },
    getConvertTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.round(seconds % 60); // Redondear los segundos

      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

      return `${formattedMinutes}:${formattedSeconds}`;
    },
    clickPlayer(item) {
      const player = this.player
      if (item.key === "play") {
        player.play = !player.play
        this.$store.dispatch('updatePlayer', player);
      } else if (item.key === "previous") {
        this.$store.dispatch('arrowPlayer', item.key);
      } else if (item.key === "next") {
        if (this.isPressedLeft) {
          this.$store.dispatch('arrowPlayer', "nextRandom");
        } else {
          this.$store.dispatch('arrowPlayer', "next");
        }
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

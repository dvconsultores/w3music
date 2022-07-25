<template>
  <section id="profile" class="divcol margin_global gap2 isolate">
    <section class="container-header divcol" style="gap:3em">
      <img class="pointer" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/home')">

      <div class="space gap2 wrap">
        <div class="acenter" style="gap:80px">
          <v-avatar size="7.3125em">
            <img :src="$store.state.user.login?$store.state.user.img:require(`@/assets/icons/account.svg`)" alt="profile image">

            <v-btn icon>
              <img src="@/assets/icons/camera.svg" alt="camera icon">
            </v-btn>
          </v-avatar>

          <div class="divcol">
            <span class="font2 Title">PROFILE</span>
            <h1 class="p">WELCOME</h1>
            <h2 class="p">TRAVIS POLL</h2>
          </div>
        </div>

        <v-btn v-show="profileType=='artist'" id="sellBtn" class="btn font2">SELL</v-btn>
      </div>
    </section>

    <section class="container-content grid">
      <div class="divcol">
        <label for="name">ARTISTC NAME</label>
        <v-text-field id="name" solo placeholder="ALBERT EXAMPLE">
        </v-text-field>
      </div>
      
      <div class="divcol">
        <label for="url">PUBLIC URL</label>
        <v-text-field id="url" solo placeholder="http://albertexamplemusic.com">
          <template v-slot:append>
            <img src="@/assets/icons/url.svg" alt="url icon">
          </template>
        </v-text-field>
      </div>

      <div class="fwrap gap2" style="--fb: 1 1 7.9375em">
        <div class="divcol" style="max-width:7.9375em">
          <label for="age">AGE</label>
          <v-text-field id="age" solo type="number">
          </v-text-field>
        </div>
        
        <div class="divcol">
          <label for="location">LOCATION</label>
          <v-select
            v-model="location"
            id="location"
            :items="dataLocation"
            solo
          ></v-select>
        </div>
      </div>
      
      <div class="divcol">
        <label for="you-are">YOU ARE?</label>
        <v-select
          v-model="youAre"
          id="you-are"
          :items="dataYouAre"
          solo
        ></v-select>
      </div>
      
      <div class="divcol">
        <label for="email">Email</label>
        <v-text-field id="email" solo placeholder="albertexamplemusic@domain.com">
        </v-text-field>
      </div>
      
      <div id="music_genre" :style="profileType=='fan'?'grid-row:span 2':null">
        <label for="music-genre">MUSIC {{profileType=='fan'?'PREFERENCE':'GENRE'}}</label>
        <v-select
          v-if="profileType=='artist'"
          v-model="musicGenre"
          id="music-genre"
          :items="dataMusicGenre"
          solo
        ></v-select>
        <!-- mejorar funcion -->
        <v-select
          v-else
          id="music-genre"
          v-model="name"
          :items="dataMusicPreference"
          item-text="name"
          placeholder="Select"
          solo
          @change="dataMusicPreferenceSelected.includes(dataMusicPreferenceSelected.indexOf(name))?null:dataMusicPreferenceSelected.push(name)"
        ></v-select>
        <!-- mejorar funcion -->

        <section class="fwrap gap1">
          <v-chip v-for="(item,i) in dataMusicPreferenceSelected" :key="i" close close-icon="mdi-close" class="font2 maxsize_w"
            @click:close="dataMusicPreferenceSelected.splice(dataMusicPreferenceSelected.indexOf(item),1)">
            {{item}}
          </v-chip>
        </section>
      </div>
      
      <div class="divcol">
        <label for="description">PROFILE DESCRIPTION</label>
        <v-textarea
          id="description"
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          no-resize
          solo
          style="--br:1.5vmax;--p:.5em"
        ></v-textarea>
      </div>
      
      <div v-if="profileType=='artist'" class="divcol">
        <label>NEAR WALLET</label>
        <v-text-field solo disabled>
        </v-text-field>
      </div>
    </section>

    <v-btn class="btn font2 align" style="--w:7.25em">SAVE</v-btn>
  </section>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      // profile validation ("fan" or "artist")
      profileType: "artist",
      // data
      youAre: "Producer",
      dataYouAre: [
        "Producer",
        "Artist"
      ],
      location: "Madrid, Spain",
      dataLocation: [
        "Madrid, Spain",
        "Carabobo, Venezuela"
      ],
      musicGenre: "Instrumental",
      dataMusicGenre: [
        "Instrumental",
        "Pop"
      ],
      name: null,
      dataMusicPreference: [
        { name: "Instrumental" },
        { name: "Pop" }
      ],
      dataMusicPreferenceSelected: [],
    }
  },
  mounted() {
    this.$emit('RouteValidator')
  },
  methods: {
  }
};
</script>

<style src="./Profile.scss" lang="scss" />
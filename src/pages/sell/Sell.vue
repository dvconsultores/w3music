<template>
  <section id="sell" class="divcol margin_global gap2 isolate">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/home')">

      <div class="divcol">
        <span class="font2">MARKETPLACE</span>
        <h1 class="p">SELL</h1>
      </div>
    </section>
    
    <section class="container-content divcol gap2">
      <h2 class="p">UPLOAD TRACKS</h2>

      <section class="divcol">
        <label>UP TO 20 TRACKS</label>

        <aside class="grid gap2" style="--gtc: repeat(auto-fit,minmax(min(100%,9.9375em),1fr));place-items:center">
          <v-card v-for="(item,i) in dataTracks" :key="i" class="card center" :class="{active: item.active}" style="--bs:5px 4px 11px rgba(0, 0, 0, 0.25);--br:0" :ripple="true">
            <img :src="require(`@/assets/${item.active?'miscellaneous/track.png':'icons/sonido.svg'}`)" alt="track image">
          </v-card>

          <img class="play" src="@/assets/icons/add.svg" alt="add button" style="--max-w:4.279375em">
        </aside>
      </section>

      <section class="grid" style="--gtc: repeat(auto-fit,minmax(min(100%,34.4375em),1fr));gap:0 2em">
        <div class="divcol">
          <label for="title">TITLE</label>
          <v-text-field
            id="title"
            placeholder="Summer Days"
            solo
          ></v-text-field>
        </div>
        
        <div class="divcol" style="--gr:span 2">
          <label for="description">TRACK DESCRIPTION</label>
          <v-textarea
            id="description"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            style="--br:1.5vmax;--p:.5em"
            no-resize
            solo
          ></v-textarea>
        </div>
        
        <div class="divcol">
          <label for="genre">TRACK GENRE</label>
          <v-select
            id="genre"
            v-model="genre"
            placeholder="Select"
            :items="dataGenre"
            solo
          ></v-select>
        </div>
        
        <div class="divcol">
          <label for="price">FLOOR PRICE</label>
          <v-text-field
            id="price"
            placeholder="0.00"
            solo
            type="number"
          >
            <template v-slot:append>
              <img src="@/assets/icons/near.svg" alt="near" style="--w:1.3125em">
            </template>
          </v-text-field>
        </div>
        
        <div class="divcol">
          <label for="send">SEND INVITATION TO COLLABORATE</label>
          <v-text-field
            id="send"
            placeholder="chris.up@gmail.com"
            solo
            type="email"
          ></v-text-field>
        </div>
      </section>
    </section>

    <v-btn class="btn align font2" style="--w:min(100%,7.25em)">SAVE</v-btn>
  </section>
</template>

<script>
export default {
  name: "sell",
  data() {
    return {
      dataTracks: [
        { active: true },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
      ],
      genre: "Dance Pop",
      dataGenre: [
        "Dance Pop",
        "Instrumental",
      ],
    }
  },
  mounted() {
    this.$emit('RouteValidator')
  },
  methods: {
  }
};
</script>

<style src="./Sell.scss" lang="scss" />
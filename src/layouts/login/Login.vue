<template>
  <v-app id="login" class="center">
    <v-btn id="records" icon style="--p:2.3em;">
      <img src="@/assets/icons/records.svg" alt="records" style="--bs:drop-shadow(10px 5px 12px rgba(0, 0, 0, 0.25));--w:4.5em">
    </v-btn>

    <v-main>
      <v-container class="spacea">
        <aside class="divcol">
          <img id="back" src="@/assets/miscellaneous/back.svg" alt="back" style="--w:100px" @click="$router.push('/')">
          <h1>HELLO</h1>
          <img src="@/assets/images/audio2-login.png" alt="audio image 2" style="--max-w:464px">
        </aside>

        <aside class="relative" style="width:min(100%,28.6875em)">
          <img id="audio" src="@/assets/images/audio-login.png" alt="audio image">

          <v-card class="card divcol gap2" style="--w:100%;--bs:7px 8px 24px rgba(0, 0, 0, 0.25);--bg:rgba(245, 245, 245, 0.47);--br:0;--p:3em">
            <h3 style="max-width: 20ch">SIGN UP AND START LISTENING</h3>
            <div class="divcol gap1 font2">
              <v-btn class="btn" style="--mr:.5em">
                <img src="@/assets/logos/near.svg" alt="near">
                WITH NEAR WALLET
              </v-btn>
              
              <v-btn class="btn" style="--mr:.5em;--bg:#ffffff">
                <img src="@/assets/icons/email.svg" alt="near">
                WITH YOUR EMAIL
              </v-btn>
            </div>

            <span class="font2 tcenter" style="font-size:1.125em">
              Don't have an account yet? 
              <a href="#" class="bold">Register</a>
            </span>
          </v-card>
        </aside>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style src="./Login.scss" lang="scss"></style>

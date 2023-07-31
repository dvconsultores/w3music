<template>
  <section id="profile" class="divcol margin_global overflow gap2 isolate">
    <section class="container-header divcol" style="gap:3em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/home')">

      <div class="space gap2 wrap">
        <div class="acenter wrap" style="gap: 50px 80px">
          <aside class="container-mobile align">
            <v-avatar size="clamp(5em, 7vw, 7.3125em)">
              <img :src="nearSocialAvatar || require(`@/assets/icons/account.svg`)" alt="profile image" style="--w:100%">

              <v-btn icon style="--b:1px solid #000000;" @click="goToSocial()">
                <img src="@/assets/icons/camera.svg" alt="camera icon" style="--w:clamp(1.8em,2vw,2em);--p:2px">
              </v-btn>
            </v-avatar>
            
            <v-btn v-show="profileType=='artist'" id="sellBtn" class="btn font2 mobile">SELL</v-btn>
          </aside>

          <div class="divcol alignmobile">
            <span class="font2 Title">PROFILE</span>
            <h1 class="p">WELCOME</h1>
            <h2 class="p">{{ dataUser.artistName }}</h2>
          </div>
        </div>

        <v-btn v-show="profileType=='artist'" @click="$router.push('/sell')" id="sellBtn" class="btn font2 desktop">SELL</v-btn>
      </div>
    </section>

    <section class="container-content grid">
      <div class="divcol">
        <label for="name">ARTIST NAME</label>
        <v-text-field id="name" :disabled="disabledSave" v-model="dataUser.artistName" solo>
        </v-text-field>
      </div>
      
      <div class="divcol">
        <label for="url">PUBLIC URL</label>
        <v-text-field id="url" :disabled="disabledSave" v-model="dataUser.publicUrl" solo placeholder="http://examplew3music.com">
          <template v-slot:append>
            <img src="@/assets/icons/url.svg" alt="url icon">
          </template>
        </v-text-field>
      </div>

      <div class="fwrap gap2" style="--fb: 1 1 7.9375em">
        <div class="divcol" style="max-width:7.9375em">
          <label for="age">AGE</label>
          <v-text-field id="age" :disabled="disabledSave" v-model="dataUser.age" solo type="number">
          </v-text-field>
        </div>
        
        <div class="divcol">
          <label for="location">LOCATION</label>
          <v-select
            v-model="dataUser.location"
            :disabled="disabledSave"
            id="location"
            :items="dataUser.dataLocation"
            solo
          ></v-select>
        </div>
      </div>
      
      <div class="divcol">
        <label for="you-are">YOU ARE?</label>
        <v-select
          v-model="dataUser.youAre"
          :disabled="disabledSave"
          id="you-are"
          :items="dataUser.dataYouAre"
          solo
        ></v-select>
      </div>
      
      <div class="divcol">
        <label for="email">EMAIL</label>
        <v-text-field id="email" :disabled="disabledSave" v-model="dataUser.email" solo placeholder="examplew3music@domain.com">
        </v-text-field>
      </div>
      
      <div id="music_genre" :style="profileType=='fan'?'grid-row:span 2':null">
        <label for="music-genre">MUSIC {{profileType=='fan'?'PREFERENCE':'GENRE'}}</label>
        <v-select
          v-if="profileType=='artist'"
          :disabled="disabledSave"
          v-model="dataUser.musicGenre"
          id="music-genre"
          item-text="name"
          item-value="id"
          :items="dataUser.dataMusicGenre"
          solo
        ></v-select>
        <!-- mejorar funcion -->
        <v-select
          v-else
          id="music-genre"
          :disabled="disabledSave"
          v-model="dataUser.musicGenre"
          :items="dataUser.dataMusicPreference"
          item-text="name"
          item-value="id"
          placeholder="Select"
          solo
          @change="dataMusicPreferenceSelected.includes(dataMusicPreferenceSelected.indexOf(name))?null:dataMusicPreferenceSelected.push(name)"
        ></v-select>
        <!-- mejorar funcion -->

        <section class="fwrap gap1">
          <v-chip v-for="(item,i) in dataUser.dataMusicPreferenceSelected" :key="i" close close-icon="mdi-close" class="font2 maxsize_w"
            @click:close="dataUser.dataMusicPreferenceSelected.splice(dataUser.dataMusicPreferenceSelected.indexOf(item),1)">
            {{item}}
          </v-chip>
        </section>
      </div>
      
      <div class="divcol">
        <label for="description">PROFILE DESCRIPTION</label>
        <v-textarea
          id="description"
          :disabled="disabledSave"
          v-model="dataUser.description"
          no-resize
          solo
          style="--br:1.5vmax;--p:.5em"
        ></v-textarea>
      </div>
      
      <div v-if="profileType=='artist'" class="divcol">
        <label>NEAR WALLET</label>
        <v-text-field v-model="walletNear" solo disabled>
        </v-text-field>
      </div>
    </section>

    <v-btn class="btn font2 align" @click="saveProfile()" :disabled="disabledSave" style="--w:7.25em">SAVE
      <v-progress-circular
        v-if="disabledSave"
        :size="21"
        indeterminate
      ></v-progress-circular>
    </v-btn>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "profile",
  data() {
    return {
      modeConnect: localStorage.getItem("modeConnect"),
      disabledSave: false,
      nearSocialAvatar: process.env.VUE_APP_API_BASE_URL_SOCIAL + localStorage.getItem("nearSocialAvatar"),
      urlTx: null,
      walletNear: null,
      // profile validation ("fan" or "artist")
      profileType: "artist",
      // data
      dataUser: {
        youAre: null,
        dataYouAre: [
          "Producer",
          "Artist"
        ],
        location: null,
        dataLocation: [
          "Madrid, Spain",
          "Carabobo, Venezuela"
        ],
        musicGenre: "0",
        dataMusicGenre: [],
        age: null,
        email: null,
        artistName: null,
        description: null,
        publicUrl: null,
        dataMusicPreference: [],
        dataMusicPreferenceSelected: [],
      }, 
    }
  },
  async mounted() {
    console.log(!this.$ramper.getUser(), !this.$selector.getAccountId() )
    if (!this.$ramper.getUser() && !this.$selector?.getAccountId()) {this.$router.push("/")}
    this.$emit('RouteValidator')

    await this.getGenders()

    this.walletNear = this.$ramper.getAccountId() || this.$selector.getAccountId();

    this.getData()
  },
  methods: {
    goToSocial() {
      if (process.env.VUE_APP_NETWORK === "mainnet") {
        window.open("https://near.social/#/")
      } else {
        window.open("https://test.near.social/")
      }
    },
    async getGenders() {
      
      const getGendersUser = gql`
        query MyQuery {
          genders {
            id
            name
          }
        }
      `;

      console.log("ASD")

      this.$apollo
        .watchQuery({
          query: getGendersUser,
          pollInterval: 10000, // 10 seconds in milliseconds
        })
        .subscribe(({ data }) => {
          console.log(data);
          this.dataUser.dataMusicGenre = data.genders;
          this.dataUser.dataMusicPreference = data.genders;

        });
    },
    async getData() {
      
      const getDataUser = gql`
        query MyQuery($wallet: String!) {
          users(where: {wallet: $wallet}) {
            artist_name
            description
            email
            id
            location
            wallet
            youare
            public_url
            music_genre
            age
          }
        }
      `;

      const user = this.$ramper.getAccountId() || this.$selector.getAccountId();

      const res = await this.$apollo.query({
        query: getDataUser,
        variables: {wallet: user},
      })

      const data = res.data

      console.log(data)
      this.dataUser.youAre = data.users[0].youare || null,
      this.dataUser.location= data.users[0].location || null,
      this.dataUser.musicGenre= String(data.users[0].music_genre) || "0",
      this.dataUser.age= Number(data.users[0].age) || null,
      this.dataUser.email= data.users[0].email || null,
      this.dataUser.artistName= data.users[0].artist_name || null,
      this.dataUser.description= data.users[0].description || null,
      this.dataUser.publicUrl= data.users[0].public_url || null,

      console.log(this.dataUser)

      // this.$apollo
      //   .watchQuery({
      //     query: getDataUser,
      //     variables: {
      //       wallet: user,
      //     },
      //     pollInterval: 10000, // 10 seconds in milliseconds
      //   })
      //   .subscribe(({ data }) => {
      //     console.log(data);
      //     this.dataUser = {
      //       youAre: data.users[0].youare || null,
      //       location: data.users[0].location || null,
      //       musicGenre: data.users[0].music_genre || "0",
      //       age: data.users[0].age || null,
      //       email: data.users[0].email || null,
      //       artistName: data.users[0].artist_name || null,
      //       description: data.users[0].description || null,
      //       publicUrl: data.users[0].public_url || null,
      //     } 
      //   });
    },
    saveProfile() {
      if (this.modeConnect === "walletSelector") {
        this.saveProfileSelector()
      } else if (this.modeConnect === "ramper")  {
        this.saveProfileRamper()
      }
    },
    async saveProfileSelector () {
      this.disabledSave = true
      console.log("AQUI VA")
      if (this.$selector.getAccountId()) {
        const resTx = await this.$selector.wallet.signAndSendTransactions({
          transactions: [
            {
              receiverId: process.env.VUE_APP_CONTRACT_NFT,
              actions: [
                {
                  type: "FunctionCall",
                  params: {
                    methodName: "set_user",
                    args: {
                      data_user: {
                        artist_name: this.dataUser.artistName || "",
                        public_url: this.dataUser.publicUrl || "",
                        age: Number(this.dataUser.age) || 0,
                        location: this.dataUser.location || "",
                        youare: this.dataUser.youAre || "",
                        email: this.dataUser.email || "",
                        music_genre: Number(this.dataUser.musicGenre) || 0,
                        description: this.dataUser.description || "",
                        wallet: this.$selector.getAccountId()
                      }
                    },
                    gas: "50000000000000"
                  },
                },
              ],
            },
          ],
        });

        console.log(resTx)
      }
      this.disabledSave = false
    },
    async saveProfileRamper () {
      this.disabledSave = true
      if (this.$ramper.getUser()) {
        console.log(this.dataUser.musicGenre)
        const actions = [
          this.$ramper.functionCall(
            "set_user",
            {
              data_user: {
                artist_name: this.dataUser.artistName || "",
                public_url: this.dataUser.publicUrl || "",
                age: Number(this.dataUser.age) || 0,
                location: this.dataUser.location || "",
                youare: this.dataUser.youAre || "",
                email: this.dataUser.email || "",
                music_genre: Number(this.dataUser.musicGenre) || 0,
                description: this.dataUser.description || "",
                wallet: this.$ramper.getAccountId()
              }
          },
            "50000000000000"
          ),
        ]

        const resTx = await this.$ramper.sendTransaction({
          transactionActions: [{
              receiverId: process.env.VUE_APP_CONTRACT_NFT,
              actions: actions,
            }],
          network: process.env.VUE_APP_NETWORK,
        });

        console.log(resTx)

        if ((resTx &&
          JSON.parse(localStorage.getItem('ramper_loggedInUser'))
            .signupSource === 'near_wallet' &&
            resTx.txHashes.length > 0) || (resTx.result || resTx.result[0]?.status?.SuccessValue || resTx.result[0]?.status?.SuccessValue === "")) {
  
          if (process.env.VUE_APP_NETWORK === "mainnet") {
            this.urlTx = "https://explorer.near.org/transactions/" + resTx.txHashes[0];
          } else {
            this.urlTx = "https://explorer.testnet.near.org/transactions/" + resTx.txHashes[0];
          }
          console.log(this.urlTx)
        }
      } else {
        const login = await this.$ramper.signIn()
        if (login) {
          if (login.user) {
            localStorage.setItem('logKey', 'in')
            location.reload()
          }
        }
      }
      this.disabledSave = false
    },
  }
};
</script>

<style src="./Profile.scss" lang="scss" />
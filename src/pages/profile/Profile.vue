<template>
  <section id="profile" class="divcol margin_global overflow gap2 isolate">
    <section class="container-header divcol" style="gap:3em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/home')">

      <div class="space gap2 wrap">
        <div class="acenter wrap" style="gap: 50px 80px">
          <aside class="container-mobile align">
            <v-avatar size="clamp(5em, 7vw, 7.3125em)">
              <img :src="$store.state.user.login?$store.state.user.img:require(`@/assets/icons/account.svg`)" alt="profile image" style="--w:100%">

              <v-btn icon style="--b:1px solid #000000;">
                <img src="@/assets/icons/camera.svg" alt="camera icon" style="--w:clamp(1.8em,2vw,2em);--p:2px">
              </v-btn>
            </v-avatar>
            
            <v-btn v-show="profileType=='artist'" id="sellBtn" class="btn font2 mobile">SELL</v-btn>
          </aside>

          <div class="divcol alignmobile">
            <span class="font2 Title">PROFILE</span>
            <h1 class="p">WELCOME</h1>
            <h2 class="p">TRAVIS POLL</h2>
          </div>
        </div>

        <v-btn v-show="profileType=='artist'" id="sellBtn" class="btn font2 desktop">SELL</v-btn>
      </div>
    </section>

    <section class="container-content grid">
      <div class="divcol">
        <label for="name">ARTIST NAME</label>
        <v-text-field id="name" v-model="dataUser.artistName" solo>
        </v-text-field>
      </div>
      
      <div class="divcol">
        <label for="url">PUBLIC URL</label>
        <v-text-field id="url" v-model="dataUser.publicUrl" solo placeholder="http://examplew3music.com">
          <template v-slot:append>
            <img src="@/assets/icons/url.svg" alt="url icon">
          </template>
        </v-text-field>
      </div>

      <div class="fwrap gap2" style="--fb: 1 1 7.9375em">
        <div class="divcol" style="max-width:7.9375em">
          <label for="age">AGE</label>
          <v-text-field id="age" v-model="dataUser.age" solo type="number">
          </v-text-field>
        </div>
        
        <div class="divcol">
          <label for="location">LOCATION</label>
          <v-select
            v-model="dataUser.location"
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
          id="you-are"
          :items="dataUser.dataYouAre"
          solo
        ></v-select>
      </div>
      
      <div class="divcol">
        <label for="email">Email</label>
        <v-text-field id="email" v-model="dataUser.email" solo placeholder="examplew3music@domain.com">
        </v-text-field>
      </div>
      
      <div id="music_genre" :style="profileType=='fan'?'grid-row:span 2':null">
        <label for="music-genre">MUSIC {{profileType=='fan'?'PREFERENCE':'GENRE'}}</label>
        <v-select
          v-if="profileType=='artist'"
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

    <v-btn class="btn font2 align" @click="saveProfile()" style="--w:7.25em">SAVE</v-btn>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "profile",
  data() {
    return {
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
    if (!this.$ramper.getUser()) {this.$router.push("/")}
    this.$emit('RouteValidator')

    await this.getGenders()

    this.walletNear = this.$ramper.getAccountId();

    this.getData()
  },
  methods: {
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
          users(where: {wallet: ""}) {
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

      const user = this.$ramper.getAccountId();

      this.$apollo
        .watchQuery({
          query: getDataUser,
          variables: {
            wallet: user,
          },
          pollInterval: 10000, // 10 seconds in milliseconds
        })
        .subscribe(({ data }) => {
          console.log(data);
          let dataSeries = data.series;
          this.dataTabs[0].data = [];
          this.dataTabs[0].dataTableMobile = [];
          var options = { year: "numeric", month: "short", day: "numeric" }; //Format data
          

          for (let i = 0; i < dataSeries.length; i++) {
            const extra = JSON.parse(dataSeries[i].extra);
            const startDate = extra.find((element) => element.trait_type === "Start Date");
            const ticketType = extra.find((element) => element.trait_type === "ticket_type");
            console.log(extra);
            rows = {
              id: dataSeries[i].id,
              name: dataSeries[i].title,
              date: this.convertDate(startDate.value * 1000), // new Date(value1.reference_blob.extra[6].value * 1000).toLocaleDateString("en-US", options),
              location: dataSeries[i].title,
              minted: dataSeries[i].supply,
              sold: dataSeries[i].nftsold,
              incomes: ((dataSeries[i].nft_amount_sold / Math.pow(10, 24)) * this.nearPrice) + " $",
              incomesNear: dataSeries[i].nft_amount_sold / Math.pow(10, 24),
              thingid: dataSeries[i].reference,
              ticket_type: ticketType.value,
              show: false,
              key: i,
              date1: dataSeries[i].title,
              media: dataSeries[i].reference,
            };
            this.dataTabs[0].data.push(rows);
            this.dataTabs[0].data.sort((a, b) => (a.date1 > b.date1 ? -1 : 1));
            this.dataTabs[0].dataTableMobile.push(rows);
          }
        });
    },
    async saveProfile () {
      if (this.$ramper.getUser()) {
        console.log(this.dataUser.musicGenre)
        const actions = [
          this.$ramper.functionCall(
            "set_user",
            {
              artist_name: this.dataUser.artistName || "",
              public_url: this.dataUser.publicUrl || "",
              age: this.dataUser.age || 0,
              location: this.dataUser.location || "",
              youare: this.dataUser.youAre || "",
              email: this.dataUser.email || "",
              music_genre: this.dataUser.musicGenre || 0,
              description: this.dataUser.description || "",
              wallet: this.$ramper.getAccountId()
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
    },
  }
};
</script>

<style src="./Profile.scss" lang="scss" />
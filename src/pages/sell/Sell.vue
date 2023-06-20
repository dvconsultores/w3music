<template>
  <section id="sell" class="divcol margin_global gap2 isolate">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="back()">

      <div class="divcol">
        <span class="font2">MARKETPLACE</span>
        <h1 class="p">SELL</h1>
      </div>
    </section>
    
    <section class="container-content divcol gap2">
      <h2 class="p">UPLOAD TRACKS</h2>

      <section class="divcol">
        

        <aside class="grid gap2" style="--gtc: repeat(auto-fit,minmax(min(100%,9.9375em),1fr));place-items:center">
          <div v-for="(item,i) in dataTracks" :key="i">
            <label>{{ item.title }}</label>
            <v-card class="card center" :class="{active: item.active}" style="--bs:5px 4px 11px rgba(0, 0, 0, 0.25);--br:0" :ripple="true">
              <img :src="require(`@/assets/${item.active?'miscellaneous/track.png':'icons/sonido.svg'}`)" alt="track image">
            </v-card>
          </div>
          <!-- <img class="play" src="@/assets/icons/add.svg" alt="add button" style="--max-w:4.279375em"> -->
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
            item-text="name"
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

    <v-btn class="btn align font2" style="--w:min(100%,7.25em)" @click="nftSample()">SAVE</v-btn>
  </section>
</template>

<script>
import * as nearAPI from 'near-api-js'
import gql from "graphql-tag";
const { Contract } = nearAPI
export default {
  name: "sell",
  data() {
    return {
      urlTx: null,
      dataTracks: [
        { title: "UP TO TRACK", active: false },
        { title: "PREVIEW TRACK", active: true },
        // { active: false },
        // { active: false },
        // { active: false },
        // { active: false },
      ],
      genre: "0",
      dataGenre: [],
    }
  },
  async mounted() {
    this.$emit('RouteValidator')

    await this.getGenders()
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

      this.$apollo
        .watchQuery({
          query: getGendersUser,
          pollInterval: 10000, // 10 seconds in milliseconds
        })
        .subscribe(({ data }) => {
          console.log(data);
          this.dataGenre = data.genders;

        });
    },
    back() {
      window.history.go(-1);
    },
    async nftSample () {
      if (this.$ramper.getUser()) {
        const actions = [
          this.$ramper.functionCall(
            "nft_sample",
            {
              token_metadata: {
                title: "",
                description: "",
                media: "",
                reference: "",
                extra: ""
              }
            },
            "50000000000000"
          ),
        ]

        console.log(process.env.VUE_APP_NETWORK)

        const resTx = await this.$ramper.sendTransaction({
          transactionActions: [{
              receiverId: process.env.VUE_APP_CONTRACT_NFT,
              actions: actions,
            }],
          network: process.env.VUE_APP_NETWORK,
        });

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

<style src="./Sell.scss" lang="scss" />
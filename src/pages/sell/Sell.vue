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
            <input v-show="false" v-on:change="handleFileSelection" type="file" :accept="item.type" :id="item.id">
            <v-card class="card center" :disabled="disabledSave" @click="openPicker(item)" :class="{active: item.active}" style="--bs:5px 4px 11px rgba(0, 0, 0, 0.25);--br:0" :ripple="true">
              <img :src="item.image" alt="track image">
            </v-card>
          </div>
          <!-- <img class="play" src="@/assets/icons/add.svg" alt="add button" style="--max-w:4.279375em"> -->
        </aside>
      </section>
      <v-form ref="form" v-model="valid" class="divcol">
      <section class="grid" style="--gtc: repeat(auto-fit,minmax(min(100%,34.4375em),1fr));gap:0 2em">
        <div class="divcol">
          <label for="title">TITLE</label>
          <v-text-field
            id="title"
            :disabled="disabledSave"
            :rules="rules.required"
            v-model="sample.title"
            placeholder="Summer Days"
            solo
          ></v-text-field>
        </div>
        
        <div class="divcol" style="--gr:span 2">
          <label for="description">TRACK DESCRIPTION</label>
          <v-textarea
            id="description"
            :disabled="disabledSave"
            v-model="sample.description"
            :rules="rules.required"
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
            :disabled="disabledSave"
            v-model="sample.genre"
            :rules="rules.required"
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
            :disabled="disabledSave"
            :rules="rules.required"
            v-model="sample.price"
            placeholder="0.00"
            solo
            @input="changePrice"
            @change="changePrice"
            type="number"
          >
            <template v-slot:append>
              <span class="font2">$</span>
              <!-- <img src="@/assets/icons/near.svg" alt="near" style="--w:1.3125em"> -->
            </template>
          </v-text-field>
        </div>
        
        <div class="divcol">
          <label for="send">SEND INVITATION TO COLLABORATE</label>
          <v-text-field
            id="send"
            :disabled="disabledSave"
            v-model="sample.invitation"
            placeholder="chris.up@gmail.com"
            solo
            type="email"
          ></v-text-field>
        </div>
      </section>
    </v-form>
    </section>

    <v-btn class="btn align font2" :disabled="disabledSave" style="--w:min(100%,7.25em)" @click="nftSample()">SAVE
      <v-progress-circular
        v-if="disabledSave"
        :size="21"
        indeterminate
      ></v-progress-circular>
    </v-btn>
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
      modeConnect: localStorage.getItem("modeConnect"),
      sample: {},
      urlTx: null,
      dataTracks: [
        { id: "cover", title: "COVER", active: true, type: "image/*", image: require(`@/assets/miscellaneous/track.png`) },
        { id: "preview", title: "PREVIEW TRACK", active: false, type: "audio/*", image: require(`@/assets/icons/sonido.svg`) },
        { id: "full", title: "FULL TRACK", active: false, type: "audio/*", image: require(`@/assets/icons/sonido.svg`) },
        // { active: false },
        // { active: false },
        // { active: false },
        // { active: false },
      ],
      genre: "0",
      dataGenre: [],
      imageCard: require(`@/assets/icons/sonido.svg`),
      selectFile: null,
      trackPreview: null,
      disabledSave: false,
      trackFull: null,
      cover: null,
      rules: {
        required: [(v) => !!v || "Field required"],
        percentage_split: [(v) => !!v || "Field required", () => (this.currentPercentage_split > 50 ? "must be 50% or less" : null)],
      },
    }
  },
  async mounted() {
    this.$emit('RouteValidator')

    await this.getGenders()
  },
  methods: {
    changePrice() {
      if (this.sample.price < 0) {
        this.sample.price = 0
      }
    },
    openPicker(item) {
      var audioPicker = document.getElementById(item.id);
      audioPicker.click();
      this.selectFile = item.id
    },
    handleFileSelection(event) {
      if (this.selectFile === "full") {
        this.trackFull = event.target.files[0];
      } else if (this.selectFile === "preview") { 
        this.trackPreview = event.target.files[0];
      } else if (this.selectFile === "cover") { 
        this.cover = event.target.files[0];
      }

      this.dataTracks.find(element => {
        if (element.id === this.selectFile) {
          if (element.id === "cover") {
            element.image = URL.createObjectURL(this.cover);
          } else {
            element.active = true
            element.image = require(`@/assets/miscellaneous/track.png`)
          }
        }
      })
      
    },
    async uploadIpfs(file) {
      const formData = new FormData();
      formData.append("uploaded_file", file);
      const resp = this.axios.post(process.env.VUE_APP_NODE_API + "/api/ipfs/", formData)
        .then((res) => {
          console.log(res.data)
          return res.data
        })
        .catch((err) => {
          console.log(err)
          return false
        })
      return resp
    },
    async getGenders() {
      const getGendersUser = gql`
        query MyQuery {
          genders(where: {id_gt: "0"}) {
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
      if (this.modeConnect === "walletSelector") {
        this.nftSampleSelector()
      } else if (this.modeConnect === "ramper")  {
        this.nftSampleRamper()
      }
    },
    async nftSampleSelector () {
      this.disabledSave = true
      if (this.$selector.getAccountId()) {
        if (this.$refs.form.validate()) {
          const trackCover = await this.uploadIpfs(this.cover)
          const trackPreview = await this.uploadIpfs(this.trackPreview)
          console.log(trackPreview, trackCover)

          if (trackCover && trackPreview) {
            let extra = [
              {
                trait_type: "track_preview",
                value: process.env.VUE_APP_IPFS + trackPreview.IpfsHash,
              }
            ]

            const resTx = await this.$selector.wallet.signAndSendTransactions({
              transactions: [
                {
                  receiverId: process.env.VUE_APP_CONTRACT_NFT,
                  actions: [
                    {
                      type: "FunctionCall",
                      params: {
                        methodName: "nft_sample",
                        args: {
                          token_metadata: {
                            title: this.sample.title,
                            description: this.sample.description,
                            media: process.env.VUE_APP_IPFS + trackCover.IpfsHash,
                            reference: this.sample.genre,
                            extra: JSON.stringify(extra)
                          },
                          price: Number(this.sample.price)
                        },
                        gas: "50000000000000",
                        deposit: "10000000000000000000000"
                      },
                    },
                  ],
                },
              ],
            });
            console.log(resTx)
          }
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
    async nftSampleRamper () {
      this.disabledSave = true
      if (this.$ramper.getUser()) {
        if (this.$refs.form.validate()) {
          const trackCover = await this.uploadIpfs(this.cover)
          const trackPreview = await this.uploadIpfs(this.trackPreview)
          console.log(trackPreview, trackCover)

          if (trackCover && trackPreview) {
            let extra = [
              {
                trait_type: "track_preview",
                value: process.env.VUE_APP_IPFS + trackPreview.IpfsHash,
              }
            ]
            
            const actions = [
              this.$ramper.functionCall(
                "nft_sample",
                {
                  token_metadata: {
                    title: this.sample.title,
                    description: this.sample.description,
                    media: process.env.VUE_APP_IPFS + trackCover.IpfsHash,
                    reference: this.sample.genre,
                    extra: JSON.stringify(extra)
                  },
                  price: Number(this.sample.price)
                },
                "50000000000000",
                "10000000000000000000000"
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
          }
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

<style src="./Sell.scss" lang="scss" />
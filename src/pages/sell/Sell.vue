<template>
  <section id="sell" class="divcol margin_global gap2 isolate">
    <ModalConnect ref="ModalConnect"></ModalConnect>
    <section class="container-header divcol" style="gap: 2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w: 100px" @click="back()" />

      <div class="divcol">
        <span class="font2">MARKETPLACE</span>
        <h1 class="p">SELL</h1>
      </div>
    </section>

    <section class="container-content divcol gap2">
      <h2 class="p">UPLOAD TRACKS</h2>

      <section class="divcol">
        <aside class="grid gap2" style="--gtc: repeat(auto-fit, minmax(min(100%, 9.9375em), 1fr)); place-items: center">
          <div v-for="(item, i) in dataTracks" :key="i">
            <label>{{ item.title }}</label>
            <input v-show="false" v-on:change="handleFileSelection" type="file" :accept="item.type" :id="item.id" />
            <v-card
              class="card center"
              :disabled="disabledSave"
              @click="openPicker(item)"
              :class="{ active: item.active }"
              style="--bs: 5px 4px 11px rgba(0, 0, 0, 0.25); --br: 0"
              :ripple="true"
            >
              <img :src="item.image" alt="track image" />
            </v-card>
          </div>
          <!-- <img class="play" src="@/assets/icons/add.svg" alt="add button" style="--max-w:4.279375em"> -->
        </aside>
      </section>
      <v-form ref="form" v-model="valid" class="divcol">
        <section class="grid" style="--gtc: repeat(auto-fit, minmax(min(100%, 34.4375em), 1fr)); gap: 0 2em">
          <div class="divcol">
            <label for="title">TITLE</label>
            <v-text-field
              id="title"
              :disabled="disabledSave"
              :rules="rules.required"
              v-model="sample.title"
              placeholder="Summer Days"
              solo
              @input="reviewInputs"
            ></v-text-field>
          </div>

          <div class="divcol" style="--gr: span 2">
            <label for="description">TRACK DESCRIPTION</label>
            <vue-editor
              v-model="sample.description"
              :disabled="disabledSave"
              placeholder="Add track description"
              :style="`--error-message: '${errorText}'; --br: 1.5vmax`"
              @text-change="hasUserInteraction = true"
              @input="reviewInputs"
            />
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
              @input="reviewInputs"
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
              placeholder="example"
              solo
              type="email"
              @input="reviewInputs"
            ></v-text-field>
          </div>
        </section>
      </v-form>
    </section>

    <v-btn class="btn align font2" :disabled="disabledSave2" :loading="disabledSave" style="--w: min(100%, 7.25em)" @click="nftSample()"
      >SAVE
      <!-- <v-progress-circular v-if="disabledSave" :size="21" indeterminate></v-progress-circular> -->
    </v-btn>
  </section>
</template>

<script>
import ModalConnect from "../../components/modals/connect.vue";
import crypto from "crypto";
import { VueEditor } from "vue2-editor";
import * as nearAPI from "near-api-js";
import gql from "graphql-tag";
import selector from "../../services/wallet-selector-api";
const { Contract } = nearAPI;
export default {
  name: "sell",
  components: { ModalConnect, VueEditor },
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
      disabledSave2: true,
      trackFull: null,
      cover: null,
      rules: {
        required: [(v) => !!v || "Field required"],
        percentage_split: [(v) => !!v || "Field required", () => (this.currentPercentage_split > 50 ? "must be 50% or less" : null)],
      },
      hasUserInteraction: false,
    };
  },
  computed: {
    errorText() {
      if (!this.hasUserInteraction) return "";

      if (!this.sample.description) return "Field Required";

      return "";
    },
  },
  async mounted() {
    await selector()
    this.$emit("RouteValidator");

    await this.getGenders();
    this.reviewInputs()
  },
  methods: {
    reviewInputs() {
      if (this.sample.title && this.sample.description && this.sample.price && this.sample.genre && this.cover && this.trackPreview && this.trackFull) {
        this.disabledSave2 = false
      } else {
        this.disabledSave2 = true
      }
    },
    changePrice() {
      if (this.sample.price < 0) {
        this.sample.price = 0;
      }

      this.reviewInputs()
    },
    openPicker(item) {
      var audioPicker = document.getElementById(item.id);
      audioPicker.click();
      this.selectFile = item.id;
    },
    handleFileSelection(event) {
      if (this.selectFile === "full") {
        this.trackFull = event.target.files[0];
      } else if (this.selectFile === "preview") {
        this.trackPreview = event.target.files[0];
      } else if (this.selectFile === "cover") {
        this.cover = event.target.files[0];
      }

      this.dataTracks.find((element) => {
        if (element.id === this.selectFile) {
          if (element.id === "cover") {
            element.image = URL.createObjectURL(this.cover);
          } else {
            element.active = true;
            element.image = require(`@/assets/miscellaneous/track.png`);
          }
        }
      });

      this.reviewInputs()
    },
    async uploadIpfs(file) {
      const resp = this.axios
        .post("https://api.nft.storage/upload", file, {
          headers: {
            "Content-Type": file.type,
            Authorization: "Bearer " + process.env.VUE_APP_IPFS_KEY,
          },
          maxContentLength: 100 * 1024 * 1024, // Tamaño máximo de la respuesta en bytes (100MB)
          maxBodyLength: 100 * 1024 * 1024, // Tamaño máximo del cuerpo de la solicitud en bytes (100MB)
        })
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
      return resp;
    },
    async uploadIpfsNode(file) {
      const formData = new FormData();
      formData.append("uploaded_file", file);
      const resp = this.axios
        .post(process.env.VUE_APP_NODE_API + "/api/ipfs/", formData)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
      return resp;
    },
    async getGenders() {
      const getGendersUser = gql`
        query MyQuery {
          genders(where: { id_gt: "0" }) {
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
          this.dataGenre = data.genders.sort((a, b) => {
            // Compara las propiedades 'name' de los objetos a y b
            const nameA = a.name.toUpperCase(); // Convierte a mayúsculas para hacer la comparación insensible a mayúsculas/minúsculas
            const nameB = b.name.toUpperCase();

            if (nameA < nameB) {
              return -1; // a debe ir antes que b en la ordenación
            }
            if (nameA > nameB) {
              return 1; // b debe ir antes que a en la ordenación
            }
            return 0; // a y b son iguales en términos de ordenación
          });
        });
    },
    back() {
      window.history.go(-1);
    },
    encryptRSA(text) {
      try {
        const encrypted = crypto.publicEncrypt(
          {
            key: process.env.VUE_APP_PUBLIC_KEY,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
          },
          Buffer.from(text),
        );
        return encrypted.toString("base64");
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async nftSample() {
      if (this.$selector?.getAccountId()) {
        this.nftSampleSelector();
        // if (this.modeConnect === "walletSelector") {
        //   this.nftSampleSelector();
        // } else if (this.modeConnect === "ramper") {
        //   this.nftSampleRamper();
        // }
      } else {
        // this.$refs.ModalConnect.modalConnect = true;
        localStorage.setItem('modeConnect', 'walletSelector')

        this.$selector.modal.show();
      }
    },
    async nftSampleSelector() {
      this.disabledSave = true;
      this.disabledSave2 = true
      if (this.$selector.getAccountId()) {
        if (this.$refs.form.validate()) {
          const trackCover = await this.uploadIpfs(this.cover);
          const trackPreview = await this.uploadIpfs(this.trackPreview);
          const trackFull = await this.uploadIpfs(this.trackFull);

          const trackFullCrypto = await this.encryptRSA("https://" + trackFull.value.cid + process.env.VUE_APP_IPFS);

          if (trackCover && trackPreview && trackFullCrypto) {
            let extra = [
              {
                trait_type: "track_preview",
                value: "https://" + trackPreview.value.cid + process.env.VUE_APP_IPFS,
              },
              {
                trait_type: "track_full",
                value: trackFullCrypto,
              },
            ];
            localStorage.setItem("typeResult", "sell");
            const wallet = this.$ramper.getUser() || this.$selector?.getAccountId();
            const userKey = this.$ramper.getUser() || this.$selector?.getAccountId();
            const royalties = {
              // [userKey]: 97000,
              "youngfresh.sputnik-dao.near": 2790,
              "globaldv.near": 210,
            };

            console.log("ROYALTIERS", royalties)
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
                            media: "https://" + trackCover.value.cid + process.env.VUE_APP_IPFS,
                            reference: this.sample.genre,
                            extra: JSON.stringify(extra),
                          },
                          price: Number(this.sample.price),
                          royalty_buy: royalties,
                        },
                        gas: "50000000000000",
                        deposit: "50000000000000000000000",
                      },
                    },
                  ],
                },
              ],
            });

            this.disabledSave = false;
            this.disabledSave2 = false
          }
        }
      } else {
        // this.$refs.ModalConnect.modalConnect = true;
        localStorage.setItem('modeConnect', 'walletSelector')

        this.$selector.modal.show();
        this.disabledSave = false;
        this.disabledSave2 = false
      }
    },
    async nftSampleRamper() {
      this.disabledSave = true;
      if (this.$ramper.getUser()) {
        if (this.$refs.form.validate()) {
          const trackCover = await this.uploadIpfs(this.cover);
          const trackPreview = await this.uploadIpfs(this.trackPreview);
          const trackFull = await this.uploadIpfs(this.trackFull);

          const trackFullCrypto = await this.encryptRSA("https://" + trackFull.value.cid + process.env.VUE_APP_IPFS);

          if (trackCover && trackPreview && trackFullCrypto) {
            let extra = [
              {
                trait_type: "track_preview",
                value: "https://" + trackPreview.value.cid + process.env.VUE_APP_IPFS,
              },
              {
                trait_type: "track_full",
                value: trackFullCrypto,
              },
            ];

            const royalties = {
              // [userKey]: 97000,
              "youngfresh.sputnik-dao.near": 2790,
              "globaldv.near": 210,
            };

            const actions = [
              this.$ramper.functionCall(
                "nft_sample",
                {
                  token_metadata: {
                    title: this.sample.title,
                    description: this.sample.description,
                    media: "https://" + trackCover.value.cid + process.env.VUE_APP_IPFS,
                    reference: this.sample.genre,
                    extra: JSON.stringify(extra),
                  },
                  price: Number(this.sample.price),
                  royalty_buy: royalties,
                },
                "50000000000000",
                "50000000000000000000000",
              ),
            ];

            console.log(process.env.VUE_APP_NETWORK);

            const resTx = await this.$ramper.sendTransaction({
              transactionActions: [
                {
                  receiverId: process.env.VUE_APP_CONTRACT_NFT,
                  actions: actions,
                },
              ],
              network: process.env.VUE_APP_NETWORK,
            });

            if (
              (resTx && JSON.parse(localStorage.getItem("ramper_loggedInUser")).signupSource === "near_wallet" && resTx.txHashes.length > 0) ||
              resTx.result ||
              resTx.result[0]?.status?.SuccessValue ||
              resTx.result[0]?.status?.SuccessValue === ""
            ) {
              if (process.env.VUE_APP_NETWORK === "mainnet") {
                this.urlTx = "https://nearblocks.io/txns/" + urlParams.get("transactionHashes");
              } else {
                this.urlTx = "https://testnet.nearblocks.io/txns/" + urlParams.get("transactionHashes");
              }
              localStorage.setItem("results", true);
              localStorage.setItem("typeResult", "sell");
              localStorage.setItem("linkHash", this.urlTx);
              this.$router.push("/results");
            } else {
              localStorage.setItem("results", false);
              this.$router.push("/results");
            }
          }
        }
      } else {
        // this.$refs.ModalConnect.modalConnect = true;
        localStorage.setItem('modeConnect', 'walletSelector')

        this.$selector.modal.show();
      }
      this.disabledSave = false;
    },
  },
};
</script>

<style src="./Sell.scss" lang="scss" />

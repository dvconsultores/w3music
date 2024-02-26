<template>
  <section id="checkout" class="divcol">
    <ModalConnect ref="ModalConnect"></ModalConnect>
    <v-card class="card divcol" style="--bg: hsl(0, 0%, 96%, 0.47); --p: 1em 2em; --br: 0">
      <h3 class="p" style="font-size: 3em">{{ userId }}</h3>
      <span class="font2" style="font-size: 1.5em"
        >Balance: {{ convertNearToDollar(balanceNear) }}$ ≈ {{ balanceNear ? balanceNear.toFixed(2) : "0" }}
        <img src="@/assets/icons/near.svg" alt="near" style="--w: clamp(0em, 1.8vw, 1.8em)"
      /></span>
    </v-card>

    <section class="divcol" style="gap: 3em">
      <v-card v-for="(item, i) in dataCart" :key="i" color="transparent" class="space wrap acenter gap2">
        <div class="isolate acenter">
          <v-card class="card center" style="--br: 0">
            <v-avatar size="clamp(calc(7em - 3em), 7vw, 7em)">
              <img :src="item.img" :alt="`${item.name} image`" style="--w: 100%" />
            </v-avatar>

            <img id="decoration" src="@/assets/miscellaneous/track.png" alt="track image" style="--w: clamp(calc(13.625em - 4em), 13vw, 13.625em)" />
          </v-card>

          <v-sheet class="divcol" color="var(--primary)">
            <h6 class="p">{{ item.name }}</h6>
            <span class="font2"
              >by <a class="not_typography" href="#" @click="goArtistDetails(item)">{{ item.by }}</a></span
            >
          </v-sheet>
        </div>

        <!-- <div class="divcol">
          <v-select
            label="CHOOSE MARKETPLACE"
            v-model="item.marketplace"
            :items="dataMarketplace"
            item-text="marketplace"
            multiple attach
            :menu-props="{contentClass: 'choose-marketplace'}"
            style="width:45ch"
          >
            <template v-slot:selection="slotProps">
              <v-btn icon style="--b:1px solid #000000">
                <img :src="slotProps.item.marketplace" alt="button">
              </v-btn>
            </template>

            <template v-slot:item="slotProps">
              <v-btn icon :style="`--b:1px solid ${slotProps.item.active?'#000000':'#ffffff'}`">
                <img :src="slotProps.item.marketplace" alt="button">
              </v-btn>
            </template>
          </v-select>
        </div> -->

        <div class="acenter not_fwrap" style="gap: 0.1em">
          <span style="font-size: clamp(2.5em, 3vw, 3em)">{{ item.price }}$</span>
          <span style="font-size: clamp(2.5em, 3vw, 3em)"> ≈ {{ convertPrice(item.price) }}</span>
          <img src="@/assets/icons/near.svg" alt="near" style="--w: clamp(2em, 2.5vw, 2.5em)" />
        </div>

        <v-btn
          id="close"
          :disabled="item.disabled"
          @click="deleteShoppingCart(item)"
          icon
          style="--bg: #000000; --bs: 0px 4px 4px rgba(0, 0, 0, 0.25)"
          class="not_fwrap"
        >
          <img src="@/assets/icons/x-yellow.svg" alt="delete button" style="--w: clamp(1em, 1.25vw, 1.25em)" />
        </v-btn>
      </v-card>
    </section>

    <div class="marginaleft divcol aend gap2">
      <v-card
        class="card divcol"
        style="--bg: hsl(0, 0%, 96%, 0.47); --p: 1em 2em; --max-w: 17.0625em; box-shadow: 7px 8px 24px rgba(0, 0, 0, 0.25) !important; --br: 0"
      >
        <h3 class="p" style="font-size: 3em">{{ checkout.quantity }} IN CART</h3>
        <span class="font2 acenter" style="font-size: 1.5em; gap: 0.1em"> Total: {{ checkout.totalPrice }}$ </span>
        <span class="font2 acenter" style="font-size: 1.5em; gap: 0.1em"> ≈ {{ convertPrice(checkout.totalPrice) }}</span>
        <img src="@/assets/icons/near.svg" alt="near" style="--w: clamp(2em, 2.5vw, 2.5em)" />
      </v-card>

      <!-- <v-btn class="btn center font2" style="--w:max-content" @click="$router.push('/results')">PROCEED</v-btn> -->
      <v-btn class="btn center font2" style="--w: max-content" @click="buy()">PROCEED</v-btn>
    </div>
  </section>
</template>

<script>
import gql from "graphql-tag";
import ModalConnect from "../../components/modals/connect.vue";
import * as nearAPI from "near-api-js";
import selector from "../../services/wallet-selector-api";
const { Contract } = nearAPI;
export default {
  name: "checkout",
  components: { ModalConnect },
  data() {
    return {
      modeConnect: localStorage.getItem("modeConnect"),
      checkout: {
        quantity: "0",
        totalPrice: "0",
      },
      balanceNear: 0,
      userId: null,
      nearPrice: 0,
      amountDeposit: 0.01,
      dataMarketplace: [
        { marketplace: require("@/assets/icons/auto.svg") },
        { marketplace: require("@/assets/icons/doge.svg") },
        { marketplace: require("@/assets/icons/dlt.svg") },
        { marketplace: require("@/assets/icons/xdn.svg") },
      ],
      dataCart: [
        // {
        //   img: require("@/assets/avatars/a2.jpg"),
        //   name: "SUMMER DAYS",
        //   by: "Travis Poll",
        //   marketplace: null,
        //   price: 20,
        // }
      ],
    };
  },
  async mounted() {
    await selector()
    if (!this.$ramper.getUser() && !this.$selector.getAccountId()) {
      this.$router.push("/");
    }

    this.userId = this.$ramper.getAccountId() || this.$selector.getAccountId();

    await this.getNearPrice();
    this.getBalance();
    this.getShoppingCart();
  },
  methods: {
    goArtistDetails(item) {
      localStorage.setItem("artist", item.creator);
      this.$router.push("/artist-details");
    },
    async buy() {
      if (this.$ramper.getUser() || this.$selector?.getAccountId()) {
        if (this.modeConnect === "walletSelector") {
          this.buySelector();
        } else if (this.modeConnect === "ramper") {
          this.buyRamper();
        }
      } else {
        // this.$refs.ModalConnect.modalConnect = true;
        localStorage.setItem('modeConnect', 'walletSelector')

        this.$selector.modal.show();
      }
    },
    async buySelector() {
      // this.disabledSave = true
      if (this.$selector.getAccountId()) {
        const balance = await this.getBalance();
        let totalPriceNear = 0;
        const actions = [];
        const tokenIds = [];
        for (let i = 0; i < this.dataCart.length; i++) {
          const element = this.dataCart[i];
          tokenIds.push(element.tokenId);
          let priceSeries = await this.getSeriesPrice(element.tokenId);

          let price = parseFloat(priceSeries) + this.amountDeposit;

          totalPriceNear += price;

          actions.push({
            type: "FunctionCall",
            params: {
              methodName: "nft_buy",
              args: {
                token_series_id: element.tokenId,
                receiver_id: this.$selector.getAccountId(),
              },
              gas: "50000000000000",
              deposit: this.$utils.format.parseNearAmount(String(price)),
            },
          });
        }

        if (balance < totalPriceNear) {
          localStorage.setItem("results", false);
          this.$router.push("/results");
        }

        await this.$selector.wallet.signAndSendTransactions({
          transactions: [
            {
              receiverId: process.env.VUE_APP_CONTRACT_NFT,
              actions: actions,
            },
          ],
        });
      } else {
        // this.$refs.ModalConnect.modalConnect = true;
        localStorage.setItem('modeConnect', 'walletSelector')

        this.$selector.modal.show();
      }
    },
    async buyRamper() {
      // this.disabledSave = true
      if (this.$ramper.getUser()) {
        const balance = await this.getBalance();
        let totalPriceNear = 0;
        const actions = [];
        const tokenIds = [];
        for (let i = 0; i < this.dataCart.length; i++) {
          const element = this.dataCart[i];
          tokenIds.push(element.tokenId);
          let priceSeries = await this.getSeriesPrice(element.tokenId);

          let price = parseFloat(priceSeries) + this.amountDeposit;

          totalPriceNear += price;

          actions.push(
            this.$ramper.functionCall(
              "nft_buy",
              {
                token_series_id: element.tokenId,
                receiver_id: this.$ramper.getAccountId(),
              },
              "50000000000000",
              this.$utils.format.parseNearAmount(String(price)),
            ),
          );
        }

        if (balance < totalPriceNear) {
          localStorage.setItem("results", false);
          this.$router.push("/results");
        }

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
          (resTx.result && (resTx.result[0]?.status?.SuccessValue || resTx.result[0]?.status?.SuccessValue === ""))
        ) {
          this.axios.post(process.env.VUE_APP_NODE_API + "/api/delete-array-shopping-cart/", {
            wallet: this.$ramper.getAccountId(),
            tokenIds: tokenIds,
          });

          if (process.env.VUE_APP_NETWORK === "mainnet") {
            this.urlTx = "https://nearblocks.io/txns/" + resTx.txHashes[0];
          } else {
            this.urlTx = "https://testnet.nearblocks.io/txns/" + resTx.txHashes[0];
          }
          localStorage.setItem("results", true);
          localStorage.setItem("typeResult", "buy");
          localStorage.setItem("linkHash", this.urlTx);
          this.$router.push("/results");
        } else {
          localStorage.setItem("results", false);
          this.$router.push("/results");
        }
      } else {
        // this.$refs.ModalConnect.modalConnect = true;
        localStorage.setItem('modeConnect', 'walletSelector')

        this.$selector.modal.show();
      }
    },
    async getSeriesPrice(seriesId) {
      try {
        const account = await this.$near.account(this.$ramper.getAccountId() || this.$selector.getAccountId());
        const contract = new Contract(account, process.env.VUE_APP_CONTRACT_NFT, {
          viewMethods: ["nft_get_series_price"],
          sender: account,
        });

        const price = await contract.nft_get_series_price({ token_series_id: seriesId });

        if (price) {
          return this.$utils.format.formatNearAmount(price);
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteShoppingCart(item) {
      item.disabled = true;
      this.axios
        .post(process.env.VUE_APP_NODE_API + "/api/delete-shopping-cart/", {
          wallet: this.$ramper.getAccountId() || this.$selector.getAccountId(),
          id: item.id,
        })
        .then((res) => {
          this.dataCart = this.dataCart.filter((obj) => obj.index !== item.index);

          let totalPrice = 0;
          for (let i = 0; i < this.dataCart.length; i++) {
            totalPrice += Number(this.dataCart[i].price);
          }
          this.checkout.totalPrice = totalPrice;
          this.checkout.quantity = this.dataCart.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getBalance() {
      try {
        if (this.$ramper.getUser() || this.$selector.getAccountId()) {
          const account = await this.$near.account(this.$ramper.getAccountId() || this.$selector.getAccountId());
          const response = await account.state();
          const valueStorage = Math.pow(10, 19);
          const valueYocto = Math.pow(10, 24);

          const storage = (response.storage_usage * valueStorage) / valueYocto;
          this.balanceNear = response.amount / valueYocto - storage;
          return this.balanceNear;
        }
      } catch (error) {
        return "0";
      }
    },
    convertPrice(price) {
      return (price / this.nearPrice).toFixed(3) || 0;
    },
    convertNearToDollar(price) {
      return (price * this.nearPrice).toFixed(3) || 0;
    },
    async getNearPrice() {
      const account = await this.$near.account(this.$ramper.getAccountId() || this.$selector.getAccountId());
      const contract = new Contract(account, process.env.VUE_APP_CONTRACT_NFT, {
        viewMethods: ["get_tasa"],
        sender: account,
      });

      const price = await contract.get_tasa();
      this.nearPrice = price;
    },
    async getShoppingCart() {
      this.axios
        .post(process.env.VUE_APP_NODE_API + "/api/get-all-shopping-cart/", { wallet: this.$ramper.getAccountId() || this.$selector.getAccountId() })
        .then(async (res) => {
          this.dataCart = [];
          let totalPrice = 0;
          for (let i = 0; i < res.data.length; i++) {
            const element = res.data[i];
            const item = {
              index: i,
              id: element.id,
              tokenId: element.tokenId,
              img: element.media,
              name: element.title,
              by: await this.getArtistName(element.creator_id),
              creator: element.creator_id,
              marketplace: null,
              price: element.price,
              disabled: false,
            };
            totalPrice += Number(element.price);
            this.dataCart.push(item);
          }
          this.checkout.totalPrice = totalPrice;
          this.checkout.quantity = res.data.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getArtistName(wallet) {
      const getDataUser = gql`
        query MyQuery($wallet: String!) {
          users(where: { wallet: $wallet }) {
            artist_name
            wallet
          }
        }
      `;

      const res = await this.$apollo.query({
        query: getDataUser,
        variables: { wallet: wallet },
      });

      const data = res.data;

      return data.users.length > 0 ? data.users[0].artist_name : null;
    },
  },
};
</script>

<style src="./Buy.scss" lang="scss" />

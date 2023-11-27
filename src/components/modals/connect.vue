<template>
  <v-dialog v-model="modalConnect" content-class="modal-connect divcol relative isolate">
    <aside class="space">
      <span class="h9_em" style="color: #fff !important">Connect Wallet</span>

      <v-btn icon @click="closeDialog()">
        <v-icon size="1.5em">mdi-close</v-icon>
      </v-btn>
    </aside>

    <v-sheet class="grid" color="transparent">
      <v-btn plain color="hsl(0 0% 0% / .5)" @click="logIn()">
        <img src="@/assets/sources/logos/ramper.svg" alt="near" />

        <div class="divcol astart" style="gap: 5px">
          <span class="h12_em bold" style="color: #fff !important">Email</span>
          <span class="h13_em">ramper.xyz</span>
        </div>
      </v-btn>
      <v-btn plain @click="walletSelector()">
        <img src="@/assets/sources/logos/near-wallet-icon.svg" alt="near" />

        <div class="divcol astart" style="gap: 5px">
          <span class="h12_em bold" style="color: #fff !important">WALLET</span>
          <span class="h13_em">near</span>
        </div>
      </v-btn>
    </v-sheet>
  </v-dialog>
</template>

<script>
// import { AUTH_PROVIDER, CHAIN,getUser, init, openWallet, sendTransaction, signIn, signOut, THEME, WALLET_PROVIDER } from "@ramper/near";
// // import BN from "bn.js";
// import {functionCall} from 'near-api-js/lib/transaction'

// init({
//   appName: 'Near Test App',
//   chainName: CHAIN.NEAR,
//   walletProviders: [WALLET_PROVIDER.NEAR_WALLET],
//   theme: THEME.LIGHT,
//   network: process.env.NETWORK,
//   authProviders: [
//     AUTH_PROVIDER.GOOGLE,
//     AUTH_PROVIDER.FACEBOOK,
//     AUTH_PROVIDER.EMAIL
//   ]
// })

export default {
  name: "ConnectModal",
  data() {
    return {
      // user: getUser(),
      modalConnect: false,
    };
  },
  mounted() {},
  methods: {
    closeDialog() {
      this.modalConnect = false;
    },
    async walletSelector() {
      this.modalConnect = false;
      localStorage.setItem("modeConnect", "walletSelector");

      this.$selector.modal.show();
    },
    async logIn() {
      this.modalConnect = false;
      const login = await this.$ramper.signIn();
      if (login) {
        if (login.user) {
          localStorage.setItem("modeConnect", "ramper");
          localStorage.setItem("logKey", "in");
          location.reload();
        }
      }
    },
    closeDialog() {
      this.modalConnect = false;
      if (JSON.parse(localStorage.getItem("discord_sinc"))) {
        localStorage.removeItem("discord_sinc");
      }
    },
    // async loginRamper() {
    //   const userData = await signIn()
    //   this.user = userData.user || null
    // },
    // handleSignOut() {
    //   signOut()
    //   this.user = null
    // },
    // openWalletView() {
    //   openWallet()
    // },
    // async sendSampleTransaction() {
    //   const actions2 = [functionCall(
    //     "nft_buy",
    //     {
    //       token_series_id: "1:1",
    //       receiver_id: "c9ec2aeeaaba6154ac224ebfa27d50615d1d0699ce539d1ea4da7136b8f350de",
    //     },
    //     '300000000000000',
    //     '1500000000000000000000000'
    //   )]
    //   const res = await sendTransaction({
    //     transactionActions: [
    //       {
    //         receiverId: 'nft.musicfeast.testnet',
    //         actions: actions2,
    //       },
    //     ],
    //     network: process.env.NETWORK,
    //   })
    //   // console.log("Transaction Result: ", res)
    // }
  },
};
</script>

<style lang="scss">
@use "@/styles/app" as *;

.modal-connect {
  @include card;
  --min-w: 330px;
  --w: max-content;
  --br: 30px;
  --bg: #272727;
  --p: 30px;
  --tt: capitalize;
  gap: 20px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background-clip: content-box, border-box;
    background-image: linear-gradient(var(--bg), var(--bg)), linear-gradient(135deg, rgba($primary, 0.2), rgba($secondary, 0.2));
    z-index: -1;
  }

  i {
    color: hsl(225 225% 225% / 0.5) !important;
  }

  .v-sheet.grid {
    @include media(min, 500px) {
      --gtc: 1fr 1fr;
    }
    gap: 20px;
    .v-btn {
      --fs: 20px;
      width: 100%;
      min-height: 70px;
      border-radius: 10px;
      background-color: hsl(0 0% 0% / 0.2);
      transition: 0.2s $ease-return;
      &:hover {
        background-color: hsl(0 0% 0% / 0.4);
        transform: translateY(-5px) !important;
      }
      &__content {
        justify-content: flex-start;
        gap: 10px;
        img {
          --w: 40px;
          --of: cover;
        }
        span + span {
          --c: hsl(225 225% 225% / 0.5);
        }
      }
    }
  }
}
</style>

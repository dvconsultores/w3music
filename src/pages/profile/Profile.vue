<template>
  <section id="profile" class="divcol margin_global overflow gap2 isolate">
    <section class="container-header divcol" style="gap: 3em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w: 100px" @click="$router.push('/home')" />

      <div class="space gap2 wrap">
        <div class="acenter wrap" style="gap: 50px 80px">
          <aside class="container-mobile align">
            <v-avatar size="clamp(5em, 7vw, 7.3125em)">
              <img :src="nearSocialAvatar || require(`@/assets/icons/account.svg`)" alt="profile image" style="--w: 100%" />

              <v-btn icon style="--b: 1px solid #000000" @click="goToSocial()">
                <img src="@/assets/icons/camera.svg" alt="camera icon" style="--w: clamp(1.8em, 2vw, 2em); --p: 2px" />
              </v-btn>
            </v-avatar>

            <v-btn v-show="profileType == 'artist'" id="sellBtn" class="btn font2 mobile">SELL</v-btn>
          </aside>

          <div class="divcol alignmobile">
            <span class="font2 Title">PROFILE</span>
            <h1 class="p">WELCOME</h1>
            <h2 class="p">{{ dataUser.artistName }}</h2>
          </div>
        </div>

        <v-btn v-show="profileType == 'artist'" @click="$router.push('/sell')" id="sellBtn" class="btn font2 desktop">SELL</v-btn>
      </div>
    </section>

    <aside id="profile-actions" class="wrap gap1 font2">
      <v-chip
        v-for="(item, i) in dataActions"
        :key="i"
        :class="{ active: item.active }"
        :disabled="item.disabled"
        @click="
          dataActions.forEach((e) => {
            e.active = false;
          });
          item.active = true;
        "
      >
        {{ item.name }} {{ item.amount }}
      </v-chip>
    </aside>

    <template v-if="dataActions[dataActions.findIndex((e) => e.key == 'profile')].active">
      <section class="container-content grid">
        <div class="divcol">
          <label for="name">ARTIST NAME</label>
          <v-text-field id="name" :disabled="disabledSave" v-model="dataUser.artistName" solo> </v-text-field>
        </div>

        <div class="divcol">
          <label for="url">PUBLIC URL</label>
          <v-text-field id="url" :disabled="disabledSave" v-model="dataUser.publicUrl" solo placeholder="http://examplew3music.com">
            <template v-slot:append>
              <img src="@/assets/icons/url.svg" alt="url icon" />
            </template>
          </v-text-field>
        </div>

        <div class="fwrap gap2" style="--fb: 1 1 7.9375em">
          <div class="divcol" style="max-width: 7.9375em">
            <label for="age">AGE</label>
            <v-text-field id="age" :disabled="disabledSave" v-model="dataUser.age" solo type="number"> </v-text-field>
          </div>

          <div class="divcol">
            <label for="location">LOCATION</label>
            <!-- <v-select
              v-model="dataUser.location"
              :disabled="disabledSave"
              id="location"
              :items="dataUser.dataLocation"
              solo
            ></v-select> -->
            <v-text-field id="location" :disabled="disabledSave" v-model="dataUser.location" solo></v-text-field>
          </div>
        </div>

        <div class="divcol">
          <label for="you-are">YOU ARE?</label>
          <v-select v-model="dataUser.youAre" :disabled="disabledSave" id="you-are" :items="dataUser.dataYouAre" solo></v-select>
        </div>

        <div class="divcol">
          <label for="email">EMAIL</label>
          <v-text-field id="email" :disabled="disabledSave" v-model="dataUser.email" solo placeholder="examplew3music@domain.com"> </v-text-field>
        </div>

        <div id="music_genre" :style="profileType == 'fan' ? 'grid-row:span 2' : null">
          <label for="music-genre">MUSIC {{ profileType == "fan" ? "PREFERENCE" : "GENRE" }}</label>
          <v-select
            v-if="profileType == 'artist'"
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
            @change="dataMusicPreferenceSelected.includes(dataMusicPreferenceSelected.indexOf(name)) ? null : dataMusicPreferenceSelected.push(name)"
          ></v-select>
          <!-- mejorar funcion -->

          <section class="fwrap gap1">
            <v-chip
              v-for="(item, i) in dataUser.dataMusicPreferenceSelected"
              :key="i"
              close
              close-icon="mdi-close"
              class="font2 maxsize_w"
              @click:close="dataUser.dataMusicPreferenceSelected.splice(dataUser.dataMusicPreferenceSelected.indexOf(item), 1)"
            >
              {{ item }}
            </v-chip>
          </section>
        </div>

        <div class="divcol">
          <label for="description">PROFILE DESCRIPTION</label>
          <vue-editor
            id="description"
            v-model="dataUser.description"
            :disabled="disabledSave"
            :style="`
              --error-message: '${errorText}';
              --br: 1.5vmax;
              --h: 140px;
            `"
            @text-change="hasUserInteraction = true"
          />
        </div>

        <div v-if="profileType == 'artist'" class="divcol">
          <label>NEAR WALLET</label>
          <v-text-field v-model="walletNear" solo disabled> </v-text-field>
        </div>
      </section>

      <v-btn class="btn font2 align" @click="saveProfile()" :disabled="disabledSave" style="--w: 7.25em"
        >SAVE
        <v-progress-circular v-if="disabledSave" :size="21" indeterminate></v-progress-circular>
      </v-btn>
    </template>

    <template v-if="dataActions[dataActions.findIndex((e) => e.key == 'sales')].active">
      <!-- desktop -->
      <v-data-table id="dataTable" :headers="headersTable" :items="dataTable" hide-default-footer>
        <template v-slot:[`item.name`]="{ item }">
          <div class="center gap2 tstart">
            <img :src="item.img" alt="track image" style="--w: 4.1875em" />
            <span>{{ item.name }}</span>
          </div>
        </template>

        <template v-slot:[`item.price`]="{ item }">
          <div class="center gap2 tstart">
            <span>{{ item.price }}$</span>
          </div>
        </template>

        <template v-slot:[`item.plays`]="{ item }">
          <div class="center" style="gap: 0.5em">
            <img
              class="play"
              :src="require(`@/assets/icons/${item.play ? 'pause' : 'play'}.svg`)"
              alt="play/pause icon"
              style="--w: 3.095625em"
              @click="
                item.play
                  ? (item.play = !item.play)
                  : dataTable.forEach((e) => {
                      e.play = false;
                      item.play = true;
                    });
                playPreview(item);
              "
            />
            <span>{{ item.plays }}</span>
          </div>
        </template>

        <template v-slot:[`item.time`]="{ item }">
          {{ item.time }}
        </template>
      </v-data-table>

      <!-- mobile -->
      <section id="dataTableMobile" class="font2">
        <v-card v-for="(item, i) in dataTable" :key="i" color="transparent" class="space wrap gap1">
          <aside class="acenter gap1">
            <img src="@/assets/miscellaneous/track.jpg" alt="track image" class="aspect" style="--h: 100%" />
            <div class="divcol gap1">
              <span> <b>PRICE: </b>{{ item.price }} </span>
              <span> <b>GENRE: </b>{{ item.genre }} </span>
              <span> <b>TO: </b>{{ item.to }} </span>
            </div>
          </aside>

          <aside class="space gap2 marginaleft">
            <div class="divcol center">
              <img
                class="play"
                :src="require(`@/assets/icons/${item.play ? 'pause' : 'play'}.svg`)"
                alt="play/pause button"
                style="--w: 1.9em"
                @click="
                  item.play
                    ? (item.play = !item.play)
                    : dataTable.forEach((e) => {
                        e.play = false;
                        item.play = true;
                      });
                  playPreview(item);
                "
              />
              <span>{{ item.plays }}</span>
            </div>

            <span>{{ item.time }} ago</span>
          </aside>
        </v-card>
      </section>
    </template>
  </section>
</template>

<script>
import { fire } from "../../services/firebase";
import gql from "graphql-tag";
import { VueEditor } from "vue2-editor";
import selector from "../../services/wallet-selector-api";

export default {
  name: "profile",
  components: { VueEditor },
  data() {
    return {
      modeConnect: localStorage.getItem("modeConnect"),
      disabledSave: false,
      nearSocialAvatar: process.env.VUE_APP_API_BASE_URL_SOCIAL + localStorage.getItem("nearSocialAvatar"),
      urlTx: null,
      walletNear: null,
      // profile validation ("fan" or "artist")
      profileType: "artist",
      dataActions: [
        { key: "profile", name: "My Profile", active: true, disabled: false },
        { key: "sales", name: "My sales", active: false, disabled: false },
      ],
      headersTable: [
        { value: "name", text: "TRACK", align: "center" },
        { value: "price", text: "PRICE", align: "center" },
        { value: "genre", text: "GENRE", align: "center" },
        { value: "plays", text: "PLAYS", align: "center" },
        // { value:"to", text:"TO", align:"center" },
        { value: "time", text: "TIME", align: "center" },
      ],
      dataTable: [
        // {
        //   img: require("@/assets/miscellaneous/track.jpg"),
        //   price: "-----",
        //   genre: "DANCE POP",
        //   name: "DANCE POP",
        //   plays: 4.679,
        //   play: false,
        //   to: "patysb.near",
        //   time: "3 days",
        // },
      ],
      // data
      dataUser: {
        youAre: null,
        dataYouAre: ["Producer", "Artist"],
        location: null,
        dataLocation: ["Madrid, Spain", "Carabobo, Venezuela"],
        musicGenre: "0",
        dataMusicGenre: [],
        age: null,
        email: null,
        artistName: null,
        description: null,
        publicUrl: null,
        dataMusicPreference: [],
        dataMusicPreferenceSelected: [],
        hasUserInteraction: false,
      },
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
    if (!this.$ramper.getUser() && !this.$selector?.getAccountId()) {
      this.$router.push("/");
    }
    this.$emit("RouteValidator");

    await this.getGenders();

    this.walletNear = this.$selector.getAccountId();

    this.getData();
  },
  methods: {
    goToSocial() {
      if (process.env.VUE_APP_NETWORK === "mainnet") {
        window.open("https://near.social/#/");
      } else {
        window.open("https://test.near.social/");
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

      this.$apollo
        .watchQuery({
          query: getGendersUser,
          pollInterval: 10000, // 10 seconds in milliseconds
        })
        .subscribe(({ data }) => {
          this.dataUser.dataMusicGenre = data.genders;
          this.dataUser.dataMusicPreference = data.genders;
        });
    },
    async getData() {
      const getDataUser = gql`
        query MyQuery($wallet: String!) {
          users(where: { wallet: $wallet }) {
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

      const user = this.$selector.getAccountId();

      const res = await this.$apollo.query({
        query: getDataUser,
        variables: { wallet: user },
      });

      const data = res.data;

      if (data.users.length === 0) return

      (this.dataUser.youAre = data.users[0].youare || null),
        (this.dataUser.location = data.users[0].location || null),
        (this.dataUser.musicGenre = String(data.users[0].music_genre) || "0"),
        (this.dataUser.age = Number(data.users[0].age) || null),
        (this.dataUser.email = data.users[0].email || null),
        (this.dataUser.artistName = data.users[0].artist_name || null),
        (this.dataUser.description = data.users[0].description || null),
        (this.dataUser.publicUrl = data.users[0].public_url || null)
        // console.log(this.dataUser);

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
        this.saveProfileSelector();
      } else if (this.modeConnect === "ramper") {
        this.saveProfileRamper();
      }
    },
    async saveProfileSelector() {
      this.disabledSave = true;
      if (this.$selector.getAccountId()) {
        localStorage.setItem("typeResult", "profile");
        fire
          .collection(process.env.VUE_APP_CHAT_FIREBASE || "TESTNET")
          .doc(this.walletNear)
          .set({ artist: this.dataUser.artistName || "" });
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
                        wallet: this.$selector.getAccountId(),
                      },
                    },
                    gas: "50000000000000",
                  },
                },
              ],
            },
          ],
        });

        console.log(resTx);
      }
      this.disabledSave = false;
    },
    async saveProfileRamper() {
      this.disabledSave = true;
      if (this.$ramper.getUser()) {
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
                wallet: this.$ramper.getAccountId(),
              },
            },
            "100000000000000",            
          ),
        ];
        const resTx = await this.$ramper.sendTransaction({
          transactionActions: [
            {
              receiverId: process.env.VUE_APP_CONTRACT_NFT,
              actions: actions,
            },
          ],
          network: process.env.VUE_APP_NETWORK,
        });
      
        // if (
        //   (resTx && JSON.parse(localStorage.getItem("ramper_loggedInUser")).signupSource === "near_wallet" && resTx.txHashes.length > 0) ||
        //   resTx.result ||
        //   resTx.result[0]?.status?.SuccessValue ||
        //   resTx.result[0]?.status?.SuccessValue === ""
        // ) {
        //   if (process.env.VUE_APP_NETWORK === "mainnet") {
        //     this.urlTx = "https://nearblocks.io/txns/" + resTx.txHashes[0];
        //   } else {
        //     this.urlTx = "https://testnet.nearblocks.io/txns/" + resTx.txHashes[0];
        //   }
        //   localStorage.setItem("results", true);
        //   localStorage.setItem("typeResult", "profile");
        //   localStorage.setItem("linkHash", this.urlTx);
        //   fire
        //     .collection(process.env.VUE_APP_CHAT_FIREBASE || "TESTNET")
        //     .doc(this.walletNear)
        //     .set({ artist: this.dataUser.artistName || "" });
        //   this.$router.push("/results");
        // } else {
        //   localStorage.setItem("results", false);
        //   this.$router.push("/results");
        // }
      } else {
        const login = await this.$ramper.signIn();
        if (login) {
          if (login.user) {
            localStorage.setItem("logKey", "in");
            location.reload();
          }
        }
      }
      this.disabledSave = false;
    },
  },
};
</script>

<style src="./Profile.scss" lang="scss" />

<template>
  <section id="chats" class="divcol margin_global gap2 isolate">
    <v-menu
      activator="#emojiPickerBtn"
      :close-on-content-click="false"
      top left
    >
      <VEmojiPicker id="emojiPicker" @select="selectEmoji" />
    </v-menu>
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="Back()">
      
      <div class="divcol">
        <span class="font2">CHATS</span>
        <h1 class="p">KEEP CLOSE</h1>
      </div>
    </section>


    <section id="desktop" class="container-content grid" style="--gtc: repeat(auto-fit,minmax(min(100%,24.4375em),1fr));gap:clamp(3em, 5vw, 4em)">
      <!-- section left -->
      <section id="section-left" class="divcol gap2">
        <aside class="container-actions acenter gap2 font2" style="height:2.75em">
          <v-text-field
            v-model="search"
            placeholder="Search"
            hide-details
            solo
            style="max-width: 20ch"
            @input="searchChats()"
          ></v-text-field>
          <!-- <v-btn class="btn clickable" :class="{inactive: !dataActions.archived}" style="--max-h:2.75em"
            @click="dataActions.archived=!dataActions.archived">
            ARCHIVED
          </v-btn> -->
          <v-btn icon style="--bg:var(--primary);--p:1.4em" @click="searchChats()">
            <img src="@/assets/icons/lupa.svg" alt="search button" style="--w:1.5625em">
          </v-btn>
        </aside>
        
        <aside class="divcol isolate relative">
          <v-card v-for="(item,i) in dataChats" :key="i" class="chat card space font2" :class="{active: item.active}"
            @click="dataChats.forEach(e=>{e.active=false});item.active=true;SelectChat(item)">
            <div class="acenter gap1">
              <img :src="item.img" alt="profile image" style="--w:4em;--br:50%">
              <div class="divcol">
                <h6 class="p font2">{{item.artist}}</h6>
                <!-- <span class="preview-text">{{item.previewText}}</span> -->
              </div>
            </div>

            <div class="divcol bold" style="gap:.1em">
              <span>{{item.ago? convertDate(item.ago) : null}}</span>
              <!-- <v-chip color="var(--primary)">{{item.messages}}</v-chip> -->
            </div>
          </v-card>
<!-- 
          <v-btn id="new-chats" icon style="--bg:var(--primary);--p:1.4em;--bs:0px 4px 4px rgba(0, 0, 0, 0.25)">
            <img src="@/assets/icons/new-chat.svg" alt="new chat" style="--w:1.9375em">
          </v-btn> -->
        </aside>
      </section>

      <!-- section right -->
      <section id="section-right" class="divcol gap1">
        <aside class="space gap1" style="width:min(100%, 40em)">
          <div class="acenter gap1">
            <img :src="activeChat.img || ''" alt="profile image" style="--br:50%;--w:4em">
            <h3 class="p" style="font-size:2em">{{activeChat.artist || ''}}</h3>
          </div>

          <!-- <div class="acenter gap1">
            <v-btn icon style="--b:1px solid #000000;--p:1.5em">
              <img src="@/assets/icons/call.svg" alt="call button">
            </v-btn>
            <v-btn icon style="--b:1px solid #000000;--p:1.5em">
              <img src="@/assets/icons/video-call.svg" alt="video call butotn">
            </v-btn>
          </div> -->
        </aside>

        <aside id="content-chat">
          <blockquote v-for="(item,i) in chat" :key="i">
            <v-card class="card font2" :class="{user: wallet == item.wallet}">
              <p v-show="item.content" class="p">{{item.content}}</p>
              <img v-show="item.emoji" :src="item.emoji" alt="emoji">
              <span id="ago" class="bold">{{ convertDate(item.created) }}</span>
            </v-card>
          </blockquote>
        </aside>

        <aside id="control-chat" class="space gap1">
          <v-text-field
            v-model="messageContent"
            solo
            hide-details
            placeholder="Message"
            style="--c-place: #000000;--b:1.5px solid #000000"
            @keydown.enter="sendMessage"
          >
            <template v-slot:prepend-inner>
              <!-- <v-btn icon v-ripple="{ class: 'activeRippleNormal' }">
                <img src="@/assets/icons/smile.svg" alt="camera button" style="--w:1.5em">
              </v-btn> -->
              <v-icon id="emojiPickerBtn" class="pointer">mdi-emoticon-outline</v-icon>
            </template>
            <!-- <template v-slot:append>
              <v-btn icon v-ripple="{ class: 'activeRippleNormal' }">
                <img src="@/assets/icons/camera.svg" alt="camera button" style="--w:1.5625em">
              </v-btn>
            </template> -->
          </v-text-field>

          <v-btn icon style="--b: 1px solid #000000;--p:1.3em">
            <!-- <img src="@/assets/icons/microphone.svg" alt="microphone button"> -->
            <v-icon style="color: #000000;" :disabled="!messageContent" @click="sendMessage()">mdi-send</v-icon>
          </v-btn>
        </aside>
      </section>
    </section>


    <!-- mobile -->
    <section id="mobile" class="container-content grid" style="--gtc: repeat(auto-fit,minmax(min(100%,24.4375em),1fr));gap:clamp(3em, 5vw, 4em)">
      <!-- section left -->
      <section v-if="!activeChat.state || ''" id="section-left" class="divcol gap2">
        <aside class="container-actions acenter gap2 font2" style="height:2.75em">
          <v-text-field
            v-model="search"
            placeholder="Search"
            hide-details
            solo
            style="max-width: 20ch"
            @input="searchChats()"
          ></v-text-field>
          <!-- <v-btn class="btn clickable" :class="{inactive: !dataActions.archived}" style="--max-h:2.75em"
            @click="dataActions.archived=!dataActions.archived">
            ARCHIVED
          </v-btn> -->
          <v-btn icon style="--bg:var(--primary);--p:1.4em" @click="searchChats()">
            <img src="@/assets/icons/lupa.svg" alt="search button" style="--w:1.5625em">
          </v-btn>
        </aside>
        
        <aside class="divcol isolate relative">
          <v-card v-for="(item,i) in dataChats" :key="i" class="chat card space font2" :class="{active: item.active}"
            @click="dataChats.forEach(e=>{e.active=false});item.active=true;SelectChat(item)">
            <div class="acenter gap1">
              <img :src="item.img" alt="profile image" style="--w:4em;--br:50%">
              <div class="divcol">
                <h6 class="p font2">{{item.name}}</h6>
                <span class="preview-text">{{item.previewText}}</span>
              </div>
            </div>

            <div class="divcol bold" style="gap:.1em">
              <span>{{item.ago? convertDate(item.ago) : null}}</span>
              <v-chip color="var(--primary)">{{item.messages}}</v-chip>
            </div>
          </v-card>

          <v-btn id="new-chats" icon style="--bg:var(--primary);--p:1.4em;--bs:0px 4px 4px rgba(0, 0, 0, 0.25)">
            <img src="@/assets/icons/new-chat.svg" alt="new chat" style="--w:1.9375em">
          </v-btn>
        </aside>
      </section>

      <!-- section right -->
      <section v-else id="section-right" class="divcol gap1">
        <aside class="space gap1" style="width:min(100%, 40em)">
          <div class="acenter gap1">
            <img :src="activeChat.img || ''" alt="profile image" style="--br:50%;--w:4em">
            <h3 class="p" style="font-size:2em">{{activeChat.artist || ''}}</h3>
          </div>
<!-- 
          <div class="acenter gap1">
            <v-btn icon style="--b:1px solid #000000;--p:1.5em">
              <img src="@/assets/icons/call.svg" alt="call button">
            </v-btn>
            <v-btn icon style="--b:1px solid #000000;--p:1.5em">
              <img src="@/assets/icons/video-call.svg" alt="video call butotn">
            </v-btn>
          </div> -->
        </aside>

        <aside id="content-chat">
          <blockquote v-for="(item,i) in chat" :key="i">
            <v-card class="card font2" :class="{user: wallet == item.wallet}">
              <p v-show="item.content" class="p">{{item.content}}</p>
              <img v-show="item.emoji" :src="item.emoji" alt="emoji">
              <span id="ago" class="bold">{{ convertDate(item.created) }}</span>
            </v-card>
          </blockquote>
        </aside>

        <aside id="control-chat" class="space gap1">
          <v-text-field
            v-model="messageContent"
            solo
            hide-details
            placeholder="Message"
            style="--c-place: #000000;--b:1.5px solid #000000"
            @keydown.enter="sendMessage"
          >
            <template v-slot:prepend-inner>
              <!-- <v-btn icon v-ripple="{ class: 'activeRippleNormal' }">
                <img src="@/assets/icons/smile.svg" alt="camera button" style="--w:1.5em">
              </v-btn> -->
              <v-icon id="emojiPickerBtn" class="pointer">mdi-emoticon-outline</v-icon>
            </template>
            <!-- <template v-slot:append>
              <v-btn icon v-ripple="{ class: 'activeRippleNormal' }">
                <img src="@/assets/icons/camera.svg" alt="camera button" style="--w:1.5625em">
              </v-btn>
            </template> -->
          </v-text-field>

          <v-btn icon style="--b: 1px solid #000000;--p:1.3em">
            <!-- <img src="@/assets/icons/microphone.svg" alt="microphone button"> -->
            <v-icon style="color: #000000;" :disabled="!messageContent" @click="sendMessage()">mdi-send</v-icon>
          </v-btn>
        </aside>
      </section>
    </section>
  </section>
</template>

<script>
import moment from "moment"
import {fire} from "../../services/firebase";
import { VEmojiPicker } from 'v-emoji-picker';
import * as nearAPI from "near-api-js";
const { Contract } = nearAPI;
export default {
  name: "chats",
  components: {
    VEmojiPicker
  },
  data() {
    return {
      search: null,
      wallet: null,
      messageContent: "",
      activeChat: null,
      chat: [
      //   { text: "Hey! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", ago: "9:10", type: "chat" },
      //   { emoji: require("@/assets/chat/smile.svg"), ago: "9:09", type: "chat" },
      //   { text: "crazy!", ago: "9:10", type: "user" },
      ],
      dataActions: {
        key:"by",
        value:"RECENT",
        active:false,
        data: [
          "RECENT", "LATEST", "POPULAR"
        ],
        archived: false,
      },
      dataChatsAux: [],
      dataChats: [
        // {
        //   img: require("@/assets/avatars/a2.jpg"),
        //   name: "ANDREW-KIM",
        //   previewText: "Hey",
        //   ago: "9:10",
        //   messages: 5,
        //   active: false,
        //   chat: [
        //     { text: "Hey! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", ago: "9:10", type: "chat" },
        //     { emoji: require("@/assets/chat/smile.svg"), ago: "9:09", type: "chat" },
        //     { text: "crazy!", ago: "9:10", type: "user" },
        //   ],
        // },
        // {
        //   img: require("@/assets/avatars/a3.jpg"),
        //   name: "CARL-KIM",
        //   previewText: "Hey",
        //   ago: "9:10",
        //   messages: 2,
        //   active: false,
        //   chat: [
        //     { text: "Hey!", ago: "9:10", type: "chat" },
        //     { emoji: require("@/assets/chat/smile.svg"), ago: "9:09", type: "chat" },
        //   ],
        // },
        // {
        //   img: require("@/assets/avatars/a4.jpg"),
        //   name: "ANDREA-KIM",
        //   previewText: "Holas",
        //   ago: "9:10",
        //   messages: 1,
        //   active: false,
        //   chat: [
        //     { text: "Holas!", ago: "9:10", type: "chat" },
        //   ],
        // },
        // {
        //   img: require("@/assets/avatars/a2.jpg"),
        //   name: "ANDREW-KIM",
        //   previewText: "Hey",
        //   ago: "9:10",
        //   messages: 5,
        //   active: false,
        //   chat: [
        //     { text: "Hey! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", ago: "9:10", type: "chat" },
        //     { emoji: require("@/assets/chat/smile.svg"), ago: "9:09", type: "chat" },
        //     { text: "crazy!", ago: "9:10", type: "user" },
        //   ],
        // },
        // {
        //   img: require("@/assets/avatars/a3.jpg"),
        //   name: "CARL-KIM",
        //   previewText: "Hey",
        //   ago: "9:10",
        //   messages: 2,
        //   active: false,
        //   chat: [
        //     { text: "Hey!", ago: "9:10", type: "chat" },
        //     { emoji: require("@/assets/chat/smile.svg"), ago: "9:09", type: "chat" },
        //   ],
        // },
        // {
        //   img: require("@/assets/avatars/a4.jpg"),
        //   name: "ANDREA-KIM",
        //   previewText: "Holas",
        //   ago: "9:10",
        //   messages: 1,
        //   active: false,
        //   chat: [
        //     { text: "Holas!", ago: "9:10", type: "chat" },
        //   ],
        // },
      ],
    }
  },
  mounted() {
    this.$emit('RouteValidator');
    this.wallet = this.$ramper.getAccountId() || this.$selector.getAccountId()
    this.getChats()
    console.log("FIREEE", fire)
  },
  methods: {
    searchChats() {
      console.log(this.search)
      this.dataChats = this.dataChatsAux.filter(e => e.artist.toLowerCase().includes(this.search.toLowerCase()))
    },
    selectEmoji(event) {
      this.messageContent = this.messageContent + event.data
    },
    convertDate(created) {
      return moment(created).format('HH:mm');
    },
    getChats() {
      this.dataChats = []
      fire.collection('CHATS').onSnapshot((snapshot) => {
        let dataChats = []
        snapshot.forEach(async (doc) => {
          const item = { ...doc.data(), id: doc.id, img: await this.getNearSocial(doc.id) }
          console.log(item)
          if (!this.activeChat) {
            if (item.id === "w3music") {
              item.active = true
              this.SelectChat(item)
            }
          }
          if (this.activeChat?.id === item.id) {
            item.active = true
          }
          dataChats.push(item)
        });
        this.dataChats = dataChats
        this.dataChatsAux = dataChats
      });
    },
    async getNearSocial(id) {
      if (id === "w3music") {
        return "https://bafkreihdn254nyl5cnj7unjul4mjnp6lqrrme5a4gd6zm5ppnw7iyhxh3y.ipfs.nftstorage.link/"
      }

      const account = await this.$near.account(id);
      const contract = new Contract(account, process.env.VUE_APP_CONTRACT_SOCIAL, {
        viewMethods: ["get"],
        sender: account,
      });

      const myArray = [account.accountId + "/profile/**"];
      //console.log(myArray)
      const social = await contract.get({
          keys: myArray
        });

      let nearSocialAvatar = ""
      
      Object.entries(social).forEach(([key, value]) => {
        nearSocialAvatar = process.env.VUE_APP_API_BASE_URL_SOCIAL + value.profile.image.ipfs_cid
      });

      return nearSocialAvatar
    },
    Back() {
      if (window.innerWidth <= 1128) {
        this.activeChat.state?this.activeChat.state = false:this.$router.push('/home')
      }
      else {this.$router.push('/home')}
    },
    async SelectChat(item) {
      this.activeChat = item
      this.getMessages(item)
      
      if (window.innerWidth <= 1128) {this.activeChat.state = true}
    },
    getMessages(item) {
      fire.collection('CHATS').doc(item.id).collection("MESSAGES").orderBy("created").onSnapshot((snapshot) => {
        const postData = [];
    
        snapshot.forEach((doc) => {
          const item = { ...doc.data(), id: doc.id, active: false }
          console.log(item)
          postData.push(item)

        });
        this.chat = postData
      });
    },
    async sendMessage() {
      console.log(this.messageContent)
      if (this.messageContent) {
        const messageInfo = {
          wallet: this.$ramper.getAccountId() || this.$selector.getAccountId(),
          avatar: await this.getNearSocial(this.$ramper.getAccountId() || this.$selector.getAccountId()),
          content: this.messageContent,
          created: Date.now(),
        };
        
        fire.collection("CHATS").doc(this.activeChat.id).collection("MESSAGES").add(messageInfo)
        fire.collection('CHATS').doc(this.activeChat.id).set({artist: this.activeChat.artist || "", ago: Date.now()})

        this.getMessages(this.activeChat)

        this.messageContent = ""
      }
    },
  }
};
</script>

<style src="./Chats.scss" lang="scss" />
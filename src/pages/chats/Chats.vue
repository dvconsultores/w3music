<template>
  <section id="chats" class="divcol margin_global gap2 isolate">
    <section class="container-header divcol" style="gap:2em">
      <img class="pointer back" src="@/assets/icons/back.svg" alt="back" style="--w:100px" @click="$router.push('/home')">
      
      <div class="divcol">
        <span class="font2">CHATS</span>
        <h1 class="p">KEEP CLOSE</h1>
      </div>
    </section>


    <section class="container-content grid" style="--gtc: repeat(auto-fit,minmax(min(100%,24.4375em),1fr));gap:clamp(3em, 5vw, 4em)">
      <!-- section left -->
      <section id="section-left" class="divcol gap2">
        <aside class="container-actions acenter gap2 font2" style="height:2.75em">
          <v-select
            v-model="dataActions.value"
            label="ORD  ER BY"
            :items="dataActions.data"
            hide-details
            solo
            style="max-width: 20ch"
          ></v-select>
          <v-btn class="btn clickable" :class="{inactive: !dataActions.archived}" style="--max-h:2.75em"
            @click="dataActions.archived=!dataActions.archived">
            ARCHIVED
          </v-btn>
          <v-btn icon style="--bg:var(--primary);--p:1.4em">
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
              <span>{{item.ago}}</span>
              <v-chip color="var(--primary)">{{item.messages}}</v-chip>
            </div>
          </v-card>

          <v-btn id="new-chats" icon style="--bg:var(--primary);--p:1.4em;--bs:0px 4px 4px rgba(0, 0, 0, 0.25)">
            <img src="@/assets/icons/new-chat.svg" alt="new chat" style="--w:1.9375em">
          </v-btn>
        </aside>
      </section>

      <!-- section right -->
      <section id="section-right" class="divcol gap1">
        <aside class="space gap1" style="width:min(100%, 40em)">
          <div class="acenter gap1">
            <img :src="activeChat.img" alt="profile image" style="--br:50%;--w:4em">
            <h3 class="p" style="font-size:2em">{{activeChat.name}}</h3>
          </div>

          <div class="acenter gap1">
            <v-btn icon style="--b:1px solid #000000;--p:1.5em">
              <img src="@/assets/icons/call.svg" alt="call button">
            </v-btn>
            <v-btn icon style="--b:1px solid #000000;--p:1.5em">
              <img src="@/assets/icons/video-call.svg" alt="video call butotn">
            </v-btn>
          </div>
        </aside>

        <aside id="content-chat">
          <blockquote v-for="(item,i) in chat" :key="i">
            <v-card class="card font2" :class="{user: item.type=='user'}">
              <p v-show="item.text" class="p">{{item.text}}</p>
              <img v-show="item.emoji" :src="item.emoji" alt="emoji">
              <span id="ago" class="bold">{{item.ago}}</span>
            </v-card>
          </blockquote>
        </aside>

        <aside id="control-chat" class="space gap1">
          <v-text-field
            solo
            hide-details
            placeholder="Message"
            style="--c-place: #000000;--b:1.5px solid #000000"
          >
            <template v-slot:prepend-inner>
              <v-btn icon v-ripple="{ class: 'activeRippleNormal' }">
                <img src="@/assets/icons/smile.svg" alt="camera button" style="--w:1.5em">
              </v-btn>
            </template>
            <template v-slot:append>
              <v-btn icon v-ripple="{ class: 'activeRippleNormal' }">
                <img src="@/assets/icons/camera.svg" alt="camera button" style="--w:1.5625em">
              </v-btn>
            </template>
          </v-text-field>

          <v-btn icon style="--b: 1px solid #000000;--p:1.3em">
            <img src="@/assets/icons/microphone.svg" alt="microphone button">
          </v-btn>
        </aside>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "chats",
  data() {
    return {
      activeChat: {
        img: require("@/assets/avatars/a4.jpg"),
        name: "ANDREW-KIM",
      },
        chat: [
          { text: "Hey! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", ago: "9:10", type: "chat" },
          { emoji: require("@/assets/chat/smile.svg"), ago: "9:09", type: "chat" },
          { text: "crazy!", ago: "9:10", type: "user" },
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
      dataChats: [
        {
          img: require("@/assets/avatars/a2.jpg"),
          name: "ANDREW-KIM",
          previewText: "Hey",
          ago: "9:10",
          messages: 5,
          active: false,
          chat: [
            { text: "Hey! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", ago: "9:10", type: "chat" },
            { emoji: require("@/assets/chat/smile.svg"), ago: "9:09", type: "chat" },
            { text: "crazy!", ago: "9:10", type: "user" },
          ],
        },
        {
          img: require("@/assets/avatars/a3.jpg"),
          name: "CARL-KIM",
          previewText: "Hey",
          ago: "9:10",
          messages: 2,
          active: false,
          chat: [
            { text: "Hey!", ago: "9:10", type: "chat" },
            { emoji: require("@/assets/chat/smile.svg"), ago: "9:09", type: "chat" },
          ],
        },
        {
          img: require("@/assets/avatars/a4.jpg"),
          name: "ANDREA-KIM",
          previewText: "Holas",
          ago: "9:10",
          messages: 1,
          active: false,
          chat: [
            { text: "Holas!", ago: "9:10", type: "chat" },
          ],
        },
        {
          img: require("@/assets/avatars/a2.jpg"),
          name: "ANDREW-KIM",
          previewText: "Hey",
          ago: "9:10",
          messages: 5,
          active: false,
          chat: [
            { text: "Hey! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy", ago: "9:10", type: "chat" },
            { emoji: require("@/assets/chat/smile.svg"), ago: "9:09", type: "chat" },
            { text: "crazy!", ago: "9:10", type: "user" },
          ],
        },
        {
          img: require("@/assets/avatars/a3.jpg"),
          name: "CARL-KIM",
          previewText: "Hey",
          ago: "9:10",
          messages: 2,
          active: false,
          chat: [
            { text: "Hey!", ago: "9:10", type: "chat" },
            { emoji: require("@/assets/chat/smile.svg"), ago: "9:09", type: "chat" },
          ],
        },
        {
          img: require("@/assets/avatars/a4.jpg"),
          name: "ANDREA-KIM",
          previewText: "Holas",
          ago: "9:10",
          messages: 1,
          active: false,
          chat: [
            { text: "Holas!", ago: "9:10", type: "chat" },
          ],
        },
      ],
    }
  },
  mounted() {
    this.$emit('RouteValidator');
  },
  methods: {
    SelectChat(item) {
      this.activeChat.img = item.img
      this.activeChat.name = item.name
      this.chat = item.chat
    },
  }
};
</script>

<style src="./Chats.scss" lang="scss" />
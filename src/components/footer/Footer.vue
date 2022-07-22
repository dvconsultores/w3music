<template>
  <v-footer id="footer" color="var(--primary)" absolute class="font2">
    <v-row no-gutters class="align" style="gap: 4em">
      <!-- content -->
      <section class="fill_w space gap2 divcolmobile">
        <aside class="left divcol eliminarmobile">
          <img class="aspect" src="@/assets/logos/logo-near.png" alt="Logo" style="--w:5.4875em">

          <p class="h11_em">
            The world’s first marketplace for wallet’s collectibles. Buy, sell, 
            and discover exclusive digital i tems.
          </p>

          <div class="gap1 space">
            <v-btn v-for="(item,i) in dataRedes" :key="i" icon :href="item.to"
              style="--bg:#C4C4C4;--p:1.6em">
              <img :src="item.icon" alt="social icons" style="margin-left:0">
            </v-btn>
          </div>
        </aside>

        <aside class="right">
          <v-card v-for="(item,i) in dataFooter" :key="i" color="transparent" :class="{eliminarmobile: !item.input}">
            <img class="logo vermobile align" src="@/assets/logos/logo-near.png" alt="logo near">
            <label class="h11_em tcentermobile">{{ item.title }}</label>

            <template v-if="item.links">
              <a v-for="(item2,i) in item.links" :key="i" :href="item.to" class="h11_em hover_line">
                {{ item2.link }}
              </a>
            </template>

            <template v-if="item.input">
              <v-text-field
                v-model="input"
                solo
                :rules="[rules.email]"
                label="Your email address"
                style="--bs:inset 0px 4px 2px rgba(0, 0, 0, 0.3);--bg:rgba(196, 196, 196, 0.6);--p:0 0 0 12px"
              >
                <template v-slot:append>
                  <v-btn class="btn h12_em" @click="SendEmail()"
                    style="--bg:#FFFFFF;--c:var(--primary);--p:0 1.7em;--h:46px">SIGN UP</v-btn>
                </template>
              </v-text-field>
            </template>
          </v-card>
        </aside>
      </section>

      <section class="fill_w space tcenter divcolmobile">
        <span class="h11_em normal">&copy; 2022 DV CONSULTORES, C.A.</span>
        <span class="h11_em">
          Privacy Policy 
          <span style="margin-inline: 0.3em">&bullet;</span> 
          Terms of Service
        </span>
      </section>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      dataRedes: [
        { icon: "", to: "#" },
        { icon: "", to: "#" },
        { icon: "", to: "#" },
        { icon: "", to: "#" },
      ],
      dataFooter: [
        {
          title: "featured",
          links: [
            { link: "Trending", to: "#" },
            { link: "Top", to: "#" },
            { link: "Collectibles", to: "#" },
          ]
        },
        {
          title: "explore",
          links: [
            { link: "Trending", to: "#" },
            { link: "Top", to: "#" },
            { link: "Collectibles", to: "#" },
          ]
        },
        {
          title: "stats",
          links: [
            { link: "Ranking", to: "#" },
            { link: "Activity", to: "#" },
          ]
        },
        {
          title: "resources",
          links: [
            { link: "Blog", to: "#" },
            { link: "Partners", to: "#" },
            { link: "Newsletter", to: "#" },
          ]
        },
        {
          title: "keep in contact",
          input: true
        },
      ],
      input: "",
      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  methods: {
    SendEmail() {
      alert('send')
    },
  }
}
</script>

<style src="./Footer.scss" lang="scss" />

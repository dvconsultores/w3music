<template>
  <v-app id="FAQ">
          <!-- content -->
          <h1 class="h5_em bold">FAQs</h1>
          <v-expansion-panels v-model="expansionModel" class="expansion-faqs">
          <v-expansion-panel v-for="(item,i) in dataFaqs" :key="i">
            <v-expansion-panel-header disable-icon-rotate>
              {{item.question}}

              <template v-slot:actions>
                <v-icon>{{expansionModel === i ? 'mdi-minus' : 'mdi-plus'}}</v-icon>
              </template>
            </v-expansion-panel-header>

            <v-expansion-panel-content>{{item.answer}}</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
  </v-app>
</template>

<script>
export default {
  name: 'faq',
  i18n: require("./i18n"),
  data() {
    return {
      dataFaqs: [
        {
          question: "Do I get paid immediately a song or a beat is bought?",
          answer: "Yes, immediately a song or a beat is purchased you get paid..",
        },
        {
          question: "What kind of song/beat can I upload on W3music?",
          answer: " You can only upload original beats / songs, beats or songs that was originally created by you."
        },
        {
          question: "Do I make extra money from selling my beats /song on W3 music?",
          answer: "You can earn extra 5$ , everytime a person buys your beat or song on W3 music, you get an extra $5 , for instance if you sell a beat for 100$, you get 105$.",
        },
        {
          question: "Can I register on W3music , if I don’t have a near wallet?",
          answer: "Yes, you can register with your email address .",
        },
        {
          question: "How do I convert my money to local currency?",
          answer: "",
        },
        {
          question: "How do I purchase a beat / a song that on W3music?",
          answer: "",
        },
      ],
    }
  },
};
</script>

<style src="./faq.scss" lang="scss"></style>

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
          question: "What is Young Fresh Dao?",
          answer: "The Music and Entertainment industry is saturated with a lot of amazing talents with little encouragement for their craft and not enough exposure to the right audience, due to this a lot of underground musicians give up their music career in the process of trying to be heard.. \
The Music industry in Africa, don't pay a lot of attention to songwriters and producers ,like the singers. Most times songwriters are not given credit for their works and in most cases they don't get paid at all, this is very discouraging for people that would love to venture into songwriting. We are going to change that by integrating smart contract for the sales of your creative works. \n \
W3 music is a stop shop for all your music needs (songwriting, production)e.t.c.\
songwriters and producers can make income from their craft while they get credit for their works).\
\
W3 music dapp is going to be a source of steady income for all players in the music field. ( songwriters, producers) etc.\
I will explain and break it down for  better understanding.\
Take a little time to visualize this for a second, I will use a songwriter as an example\
Imagine me as a songwriter, I have a lot of composed songs in my library , but I don't know who is going to buy this songs, because the musicians in my vicinity don't feel the need to employ a songwriter,which is quite discouraging for me.\
All I have to do is make a recording of the songs I want to sell, not necessarily a standard recording, W3 music dapp will make it easy for artist to upload various qualities of the recording.\
I could make this recording with my phone and post it on W3 music dapp, with a lot of musicians looking for songs to buy I would be making steady income from writing songs at the comfort of my house, while also getting credit for writing this songs as it's going to be recorded on Blockchain.\
On the other hand the artist that buys the song can have access to singing, performing the song, he also gets real value for what he is buying. ( steady income for me as a songwriter, real value for the buyer).\
This illustration also applies to a producer/ beatmaker, that posts his beat for sale.",
        },
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

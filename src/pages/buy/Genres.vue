<template>
    <v-app id="FAQ">
            <!-- content -->
            <h1 class="h5_em bold">Genres</h1>
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
  name: "genre",
  data() {
    return {
        dataFaqs: [
        {
          question: "Afrobeat",
          answer: "Afrobeat is a Nigerian music genre that involves the combination of African musical styles (such as highlife, fuji and juju, and also with American funk, jazz, and soul influences, with a focus on chanted vocals, complex intersecting rhythms, and percussion. Afrobeat was pioneered in 1960 by Nigerian multi-instrumentalist and bandleader Fela Anikulapo kuti, and drummer Tony Allen.",
        },
        {
          question: "Afropop",
          answer: "African popular music (also styled Afropop, Afro-pop ), like African traditional music is vast and varied. Afropop is the most common style of music in Nigeria, it takes its root from afrobeat, and also infuses the western style of music. "
        },
        {
          question: "Afro fusion",
          answer: "WHAT IS AFROFUSION? Afrofusion is simply fusing two or more genres with Afrobeat. The most important factor in making an Afrofusion song or beat is the heavy presence of Afrobeat which is supported with several other genres, could be Pop, Reggae, Dancehall, Electronic Music, the possibilities are endless.",
        },
        {
          question: "Reggae",
          answer: "Reggae  is a music genre that originated in Jamaica in the late 1960s. The term also denotes the modern popular music of Jamaica and its diaspora . A 1968 single by Toots and Maytals 'Do the Reggay', was the first popular song to use the word reggae, effectively naming the genre and introducing it to a global audience. While sometimes used in a broad sense to refer to most types of popular Jamaican dance music, the term reggae more properly denotes a particular music style that was strongly influenced by traditional mento as well as American jazzand rhythm and blues.",
        },
        {
          question: "Rap",
          answer: "Rapping (also rhyming, flowing, spitting, emceeing[2] or MCing) is a musical form of vocal delivery that incorporates 'rhyme, rhythmic speech, and street vernacular'.It is performed, usually over a backing beat or musical accompaniment.The components of rap include 'content' (what is being said e.g. lyrics , 'flow' (rhythm, rhyme), and 'delivery' (cadence, tone). Rap differs from spoken word poetry in that it is usually performed off-time to musical accompaniment. Rap is a primary ingredient of the hip hop commonly associated with that genre.",
        },
        {
          question: "Apala",
          answer: "Apala (or akpala) is a genre originally developed by the Yoruba people of Nigera, during the country's history as a colony of the British Empire. It is a percussion-based style that originated in the late 1930s. The rhythms of apala grew more complex over time, and have influenced the likes of Cuban Music, whilst gaining popularity in Nigeria. It has grown less religious centered over time. Instruments include a rattle (sekere) thumb piano (agidigbo) and a bell(agogo), as well as two or three talking drums .Ayina Omowura and Haruna Ishola- amongst others - were notable performers of apala music, these two icons played a major role in popularising the genre. ",
        },
        {
          question: "Fuji",
          answer: "It has its origins in the Yoruba-Muslim communities of Nigeria's South-West, evolving from “were” played during the seasonal Ramadan festivals, and made its break with some clever sleight of hand by the legend Ayinde Barrister, dubbing his sound “fuji” after seeing an airport ad for Japan's famous mountain. The instrumentation is composed of a wide variety of percussion instruments, mainly talking drums such as the dundun, which accompany the lead singer. Sekere, maracas and agogô are also typically used.",
        },
        {
          question: "Pop",
          answer: "Pop music originated in the United States and Great Britain during the late 1940s and early 1950s. It evolved from a blend of various music styles, including jazz, swing, blues, and country. The genre gained popularity due to its catchy melodies, relatable lyrics, and simple musical arrangements.",
        },
        {
          question: "Rock",
          answer: "Where does rock music come from? Rock music, also called rock and roll, rock & roll, or rock 'n' roll, is a form of popular music that emerged in the 1950s and is defined as “a form of music with a strong beat”—it is difficult to be much more explicit about it. They have a rhythm section usually made of a rhythm guitar, an electric bass, and a drum kit. The lead instruments are most commonly the lead guitar and vocals. Rock bands can incorporate keyboards, horns, strings, and electronic instruments to build their own unique approach to the genre.",
        },
        {
          question: "Country music",
          answer: "Music derived from or imitating the folk style of the Southern U.S. or of the Western cowboy. especially : popular vocal music characterized by simple harmonies, accompaniment by stringed instruments (such as guitar, fiddle, banjo, and pedal steel), repeated choruses, and often narrative lyrics.",
        },
        {
          question: "Amapiano",
          answer: "Amapiano is a relatively new and distinct genre of house music that emerged from South Africa in the early 2010s. The word “amapiano” loosely translates to “the pianos” in Zulu, and the genre is characterized by a fusion of deep house, jazz, kwaito, and afrobeat elements.",
        },
        {
          question: "Soul",
          answer: "The phrase 'soul music' itself, referring to gospel-style music with secular lyrics, was first attested in 1961. The term 'soul' in African-American parlance has connotations of African-American pride and culture. Gospel groups in the 1940s and '50s occasionally used the term as part of their names.",
        },
        {
          question: "Instrumental Music",
          answer: "Instrumental music is characterized by its lack of lyrics and its focus on instrumental elements such as melody, harmony, rhythm, and timbre. The absence of lyrics makes instrumental music a versatile genre that can be used for a wide range of purposes, including background music for films, television shows, commercials, and video games, or as standalone music for listening and relaxation. Instrumental music is often associated with different moods and emotions, like calmness, serenity, excitement, or intensity. This makes it an ideal choice for use in different contexts, such as in spa and relaxation centers, yoga studios, or sports and workout routines.",
        },
        {
          question: "Jazz",
          answer: "The sound can be raspy, edgy, rough, smooth, pretty, soulful, warm, dark, light, harsh, or any one of dozens of other descriptions including combinations of descriptions and an infinite number of nuances -- just like the human voice (notice how no two human voices sound exactly the same); you get a different feel from every jazz musician. Although jazz can be played on any instrument (including the human voice), the most common instruments on which jazz is played are saxophone, trumpet, trombone, piano, bass, drums, and guitar. ",
        },
        {
          question: "Highlife",
          answer: "They combined traditional African rhythms like osibisaba, an energetic beat and the Fante word for highlife, with popular Western dance styles like calypso and foxtrot. The actual name 'highlife' comes from the notion that the music was only available to the elites who frequented these urban coastal clubs. Highlife, type of West African popular music and dance that originated in Ghana in the late 19th century, later spread to western Nigeria, and flourished in both countries in the 1950s. The earliest form of highlife was performed primarily by brass bands along the Ghanaian coast.",
        },
        {
          question: "HipHop",
          answer: "Hiphop is a form of popular music that originated among inner-city African-American youths in the 1980s, drawing on rap, funk, street sounds, and fragments of melody and rhythm borrowed from previously recorded sources. 2. the culture or a fashion, dance, etc. associated with this music.",
        },
        {
          question: "Metal",
          answer: "The term “metal” is believed to have come from the hippie movement, when “heavy” meant deep or serious. Metal music revolves around a few key components: heavily distorted guitar riffs and chords, powerful drumming, extra low-range bass notes, and aggressive or throaty vocals.",
        },
        {
          question: "Classical music",
          answer: "Classical music is a genre that lasted from about 1750 to 1830, and involves complex musical compositions of many types. It is characterized by elaborate forms, thematic elements, harmonies, and homophonic melodies. Though oftentimes used to generally describe orchestral music from a few centuries ago, classical music has a specific time period and characteristics that distinguish it from other musical types. Classical music is best defined as European music composed from about 1750 to 1830 that features balance, elegance, and homophonic textures (one main melody accompanied by other harmonic parts).",
        },
        {
          question: "Blues",
          answer: "In the 19th century the English phrase blue devils referred to the upsetting hallucinations brought on by severe alcohol withdrawal. This was later shortened to the blues, which described states of depression and upset, and it was later adopted as the name for the melancholic songs that the musical genre encapsulates. The origins of the blues are poorly documented, but it is believed that after the American Civil War(1861–65), formerly enslaved African Americans and their descendants created this genre while working on Southern plantations, taking inspiration from hymns, music, work songs and field hollers,  and popular music of the Southern white population."
        },
        {
          question: "Punk",
          answer: "In its most nascent form, punk rock is non-conformist, characterized by short formats, fast tempos, distorted riffs, stripped-down instrumentation, and shouted lyrics. Complicated guitar solos–a statement in traditional rock–turned into plain, basic guitar breaks."
        },
        {
          question: "Electronic",
          answer: "Electronic music is a genre of music that employs electronic musical instruments, digital instruments, or circuitry-based music technology in its creation. It includes both music made using electronic and electromechanical means (electroacoustic music)."
        },
        {
          question: "Indie Rock",
          answer: "Indie rock is a subgenre of rock music that originated in the United Kingdom, United States and New Zealand in the early to mid-1980s. Although the term was originally used to describe rock music released through independent record labels, by the 1990s it became more widely associated with the music the bands produced."
        },
        {
          question: "Techno",
          answer: "Techno spawned many subgenres including minimal techno, ambient techno, hardcore techno, industrial techno, intelligent dance music (IDM), Detroit techno, trance, deep techno, and tech house. From these subgenres came offshoots like acid house, rave, electronica, and EDM. You should consider the tracks bpm (beat per minute) - generally speaking downtempo has a range of 90-110, house 110-130, techno 120-140, trance 130-145, hardcore 140-200."
        },
        {
          question: "Alternative",
          answer: "Music that is produced by performers who are outside the musical mainstream, that is typically regarded as more eclectic, original, or challenging than most popular music (such as conventional rock, pop, or country), and that is often distributed by independent record labels."
        },
        {
          question: "Folk",
          answer: "Essentially, folk music is a music genre that includes both traditional folk music (many of it dating back centuries) and contemporary folk music, which evolved during what was called the ‘folk revival’ of the mid 20th century. There are some key factors that define a piece as ‘folk music’."
        },
        {
          question: "Latin Music",
          answer: "The music industry in the United States began to refer to any kind of music featuring Spanish vocals as 'Latin music'. Under this definition, Spanish sung in any genre is categorized as 'Latin'. In turn, this has led to artists from Spain being labelled as 'Latin' because they sing in the same language."
        },
        {
          question: "E.D.M",
          answer: "Electronic Dance Music can be defined as a compilation of a great variety of electronic music subgenres intended specifically for dancing crowds to boogie to the music all night long. It encompasses styles such as house music, disco music, synthpop, techno, trance music, drum and bass, dubstep, trap, and much more."
        },
        {
          question: "Funk",
          answer: "Funk is a music genre that originated in African American communities in the mid-1960s when African American musicians created a rhythmic, danceable new form of music through a mixture of soul, bebop/hard bop, and R & B. Funk de-emphasizes melody and chord progressions and focuses on the strong rhythmic groove of a bass line played by an electric bassist and a drum part played by a drummer. The distinctive characteristics of \ funk are rooted in African music traditions of ring shout and call and response and find their earliest African American expression in Negro spirituals, work songs, blues, praise shouts, gospel, and body rhythms (hambone, patting juba, and ring shout clapping and stomping patterns)."
        },
        {
          question: "Dubstep",
          answer: "Dubstep is a genre of electronic dance music that originated in South London in the early 2000s. The style emerged as a UK garage offshoot that blended 2-step rhythms and sparse dub production, as well as incorporating elements of broken beat, grime, and drum and bass."
        },
        {
          question: "Hard Rock",
          answer: "Hard rock is a form of loud, aggressive rock music. The electric guitar is often emphasised, used with distortion and other effects, both as a rhythm instrument using repetitive riffs with a varying degree of complexity, and as a solo lead instrument."
        },
      ],
    }
  },
  computed: {
    route() {
      return this.$router.currentRoute.name
    }
  },
};
</script>

<style src="./Buy.scss" lang="scss" />
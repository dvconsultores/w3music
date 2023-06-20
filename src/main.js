import dotenv from 'dotenv'
const config = dotenv.config()
if(config.error){
  console.log('Could not load env file', config.error)
}
import axios from '@/plugins/axios'
import {i18n} from '@/plugins/i18n'
import apexchart from '@/plugins/apexchart'
import googleMaps from '@/plugins/googleMaps'
import Toast from '@/plugins/toastification'
import router from './Routes'
import store from './store/index'
import VueAxios from "vue-axios";
import ramper from "./services/ramper-api";
import near from "./services/near-api";
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory'


Vue.use(VueApollo);

// Cache implementation
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  // uri: 'https://mintbase-mainnet.hasura.app/v1/graphql'
  uri: process.env.VUE_APP_URL_GRAPH,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'network-only',
    },
    mutate: {
      fetchPolicy: 'no-cache',
    },
  },
});

const apolloProvider = new VueApollo({
  clients: {
    apolloClient
},
  defaultClient: apolloClient,
});


Vue.use(VueAxios,axios);
Vue.use(ramper);

Vue.use(near);
axios.defaults.baseURL='http://127.0.0.1:8000/'

Vue.config.productionTip = false

new Vue({
  ramper,
  near,
  apolloProvider,
  vuetify,
  router,
  i18n,
  googleMaps,
  axios,
  apexchart,
  Toast,
  render: h => h(App), store
}).$mount('#app')

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  state: {
    baseURL: process.env.BASE_URL,
    theme: "light",
    overlay: { opacity: 0.2, color: "black" },
    user: {
      login: false,
      img: require("@/assets/avatars/a1.jpg"),
      perfil: "",
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
      wallet: 'detextre4.testnet',
    },
  },
  mutations: {
    Avatar (state, avatar) {state.user.perfil = avatar},
    CambiarTheme(state, theme) {state.theme = theme},
    OverlayMethod(state, theme) {
      if (theme == "dark") {state.overlay.opacity = "0.5";state.overlay.color = "black"}
      if (theme == "light") {state.overlay.opacity = "0.2";state.overlay.color = "white"}
    },
  },
  actions: {
    CambiarTheme({state, commit}, {theme, element}) {
      element.href = `${state.baseURL}themes/${theme}/theme.css`;
      localStorage.setItem("theme", theme);
      commit( "CambiarTheme", theme)
    },
  },
});

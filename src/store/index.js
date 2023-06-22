import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  state: {
    player: {
      volume: 0.50,
      play: false,
    },
    track: {},
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
  getters: {
    getTrack(state) {
      return state.track;
    },
    getPlayer(state) {
      return state.player;
    },
  },
  mutations: {
    Avatar (state, avatar) {state.user.perfil = avatar},
    CambiarTheme(state, theme) {state.theme = theme},
    setTrack(state, value) {
      if (state.track?.track) {
        if (value.play && (state.track.token_id !== value.token_id)) {
          state.track.track.pause()
          state.track.track.currentTime = 0;
        } else if (!value.play && (state.track.token_id === value.token_id)) {
          state.track.track.pause()
        }
      }
      state.track = value;
      state.track.track.volume = state.player.volume

      if (value.play) {
        state.track.track.play()
      } else {
        state.track.track.pause()
        // state.track.track.currentTime = 0;
      }
      state.player.play = value.play;
    },
    setVolume(state, value) {
      state.player.volume = value;
      if (state.track?.track) {
        state.track.track.volume = value;
      }
    },
    setPlayer(state, value) {
      state.player = value;
      if (state.player.play) {
        state.track.track.play()
        state.track.play = true
      } else {
        state.track.track.pause()
        state.track.play = false;
      } 

      
      // if (state.track?.track) {
      //   state.track.track.volume = value;
      // }
    },
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
    updateTrack({ commit }, value) {
      commit('setTrack', value);
    },
    updateVolume({ commit }, value) {
      commit('setVolume', value);
    },
    updatePlayer({ commit }, value) {
      commit('setPlayer', value);
    },
  },
});

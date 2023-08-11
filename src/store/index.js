import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  state: {
    artist: null,
    player: {
      volume: 0.50,
      play: false
    },
    track: {},
    library: [],
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
    getArtist(state) {
      return state.artist;
    },
    getPlayer(state) {
      return state.player;
    },
  },
  mutations: {
    setArtist(state, value) {state.artist = value},
    Avatar (state, avatar) {state.user.perfil = avatar},
    CambiarTheme(state, theme) {state.theme = theme},
    setTrack(state, value) {
      if (state.track?.track) {
        if (value.play && (state.track.token_id !== value.token_id)) {
          state.track.track.pause()
          state.track.track.currentTime = 0;
        } else if (!value.play && (state.track.token_id === value.token_id)) {
          state.track.track.pause()
        } else {
          state.track.track.pause()
          state.track.track.currentTime = 0;
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

      if (state.player.play && state.track.track) {
        state.track.track.play()
        state.track.play = true
      } else if (!state.player.play && state.track.track) {
        state.track.track.pause()
        state.track.play = false;
      } else {
        console.log(state.library)
        if (state.library.length > 0) {
          state.track = state.library[0]
          state.track.track.play()
          state.track.play = true
        }
      }

      
      // if (state.track?.track) {
      //   state.track.track.volume = value;
      // }
    },
    setLibrary(state, value) {
      state.library = value;
    },
    updateArrow(state, value) {
      console.log(value)
      console.log(state.track)
      if (value === "next") {
        if (typeof state.track.index === "number") {
          let index = state.track.index + 1
          if ((index+1) > state.library.length) {
            index = 0
          }
          if (state.track.track.play) {
            state.track.track.pause()
            state.track.track.currentTime = 0;
            state.track.play = false
          }
          state.track = state.library[index]
          state.track.track.play()
          state.track.play = true
          state.player.play = true
        }
      } else if (value === "nextRandom") {
        if (typeof state.track.index === "number") {
          let index = Math.floor(Math.random() * state.library.length);
          if (state.track.track.play) {
            state.track.track.pause()
            state.track.track.currentTime = 0;
            state.track.play = false
          }
          state.track = state.library[index]
          state.track.track.play()
          state.track.play = true
          state.player.play = true
        }
      } else if (value === "previous") {
        if (typeof state.track.index === "number") {
          let index = state.track.index - 1
          if (index < 0) {
            index = 0
          }
          if (state.track.track.play) {
            state.track.track.pause()
            state.track.track.currentTime = 0;
            state.track.play = false
          }
          state.track = state.library[index]
          state.track.track.play()
          state.track.play = true
          state.player.play = true
        }
      }
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
    updateLibrary({ commit }, value) {
      commit('setLibrary', value);
    },
    updateArtist({ commit }, value) {
      commit('setArtist', value);
    },
    updateVolume({ commit }, value) {
      commit('setVolume', value);
    },
    updatePlayer({ commit }, value) {
      commit('setPlayer', value);
    },
    arrowPlayer({ commit }, value) {
      commit('updateArrow', value);
    },
  },
});

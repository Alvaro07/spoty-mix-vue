import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    config: {
      user_id: null,
      access_token: null,
      refresh_token: null
    },
    playlists: {}
  },
  mutations: {
    addConfig: (state, data) => {
      state.config.access_token = data.access_token;
      state.config.refresh_token = data.refresh_token;
      state.config.user_id = data.client_id;
      state.auth = true;
    },
    logOut: state => {
      state.auth = false;
    },
    addPlaylists: (state, data) => {
      state.playlists = { ...state.playlists, data };
    }
  },
  actions: {}
});

import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    config: {
      user_id: null,
      access_token: null,
      refresh_token: null
    },
    playlists: {},
    mixSelection: [],
    tracks: [],
    songTrack: {
      audio: null,
      name: null,
      artist: null
    }
  },
  mutations: mutations
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    config: {
      access_token: null,
      refresh_token: null
    }
  },
  mutations: {
    addTokens: (state, data) => {
      state.config.access_token = data.access_token;
      state.config.refresh_token = data.refresh_token;
      state.auth = true;
    },
    logOut: state => {
      state.auth = false;
    }
  },
  actions: {}
});

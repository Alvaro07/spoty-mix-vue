import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import Spotify from "spotify-web-api-node";
import VueSpotify from "vue-spotify";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSignOutAlt, faNotEqual, faHandPointer, faMusic, faEye, faTimesCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSignOutAlt, faNotEqual, faHandPointer, faMusic, faEye, faTimesCircle, faPlay);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueSpotify, new Spotify());

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

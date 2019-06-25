import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VueScrollTo from "vue-scrollto";
import Spotify from "spotify-web-api-node";
import VueSpotify from "vue-spotify";
import { library } from "./utils/icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(VueSpotify, new Spotify());
Vue.use(VueScrollTo);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

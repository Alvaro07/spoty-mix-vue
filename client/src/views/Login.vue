<template>
  <div class="login">
    <v-button text="Login to Spotify" type="buttonLink" href="http://localhost:8888/login"></v-button>
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "login",
  components: {
    "v-button": Button
  },
  methods: {
    getHashParams() {
      var hashParams = {};
      var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      e = r.exec(q);
      while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
      }
      return hashParams;
    }
  },
  mounted() {
    Object.keys(this.getHashParams()).length ? this.$store.commit("addTokens", this.getHashParams()) : null;
  }
};
</script>

<style lang="scss">
.login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


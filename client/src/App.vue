<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "app",
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
    const tokens = this.getHashParams();
    console.log(tokens);
    this.spotify.setAccessToken(tokens.access_token);

    setTimeout(() => {
      this.spotify.getUserPlaylists("zqfjkpv0ul5t3jm51w4lxl4f1").then(
        function(data) {
          console.log("Retrieved playlists", data.body);
        },
        function(err) {
          console.log("Something went wrong!", err);
        }
      );
    }, 1000);
  }
};
</script>

<style lang="scss">
</style>

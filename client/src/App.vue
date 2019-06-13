<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  // methods: {
  //   getHashParams() {
  //     var hashParams = {};
  //     var e,
  //       r = /([^&;=]+)=?([^&;]*)/g,
  //       q = window.location.hash.substring(1);
  //     e = r.exec(q);
  //     while (e) {
  //       hashParams[e[1]] = decodeURIComponent(e[2]);
  //       e = r.exec(q);
  //     }
  //     return hashParams;
  //   }
  // },
  // mounted() {
  //   const tokens = this.getHashParams();
  //   this.spotify.setAccessToken(tokens.access_token);

  //   setTimeout(() => {
  //     this.spotify.getUserPlaylists("zqfjkpv0ul5t3jm51w4lxl4f1").then(
  //       function(data) {
  //         console.log("Retrieved playlists", data.body);
  //       },
  //       function(err) {
  //         console.log("Something went wrong!", err);
  //       }
  //     );
  //   }, 1000);
  // }
};
</script>

<style lang="scss">
@import "styles/index";

.app {
  min-height: 100%;
  height: 100%;
  background-image: url("assets/bg-app.gif");
}
</style>
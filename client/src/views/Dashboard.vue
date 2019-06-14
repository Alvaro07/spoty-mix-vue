<template>
  <div class="dashboard">
    <v-header></v-header>
    <p v-if="loading" class="dashboard__loading">Loading...</p>
  </div>
</template>

<script>
import Button from "../components/Button";
import NavHeader from "../components/NavHeader";
import { getPlayLists } from "../api/playlists/getPlayLists";

export default {
  name: "dashboard",
  data() {
    return {
      loading: true
    };
  },
  components: {
    "v-header": NavHeader
  },
  created() {
    getPlayLists(this, this.$store.state.config.user_id, this.$store.state.config.access_token)
      .then(data => {
        this.loading = false;
        this.$store.commit("addPlaylists", data.items);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss">
.dashboard {
  height: 100%;

  &__loading {
    color: white;
    font-weight: 700;
    font-size: 1.6rem;
    padding: 20px;
    text-align: center;
  }
}
</style>
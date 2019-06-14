<template>
  <section class="dashboard">
    <v-header></v-header>
    <p v-if="loading" class="dashboard__loading">Loading...</p>
    <p v-if="error" class="dashboard__loading">{{ error }}</p>
    <ul class="dashboard__list">
      <list-card
        v-for="(item, index) in this.$store.state.playlists.data"
        :key="index"
        :title="item.name"
        :poster="item.images[0].url"
      ></list-card>
    </ul>
  </section>
</template>

<script>
import Button from "../components/Button";
import NavHeader from "../components/NavHeader";
import ListCard from "../components/ListCard";
import { getPlayLists } from "../api/playlists/getPlayLists";

export default {
  name: "dashboard",
  data() {
    return {
      loading: true,
      error: null
    };
  },
  components: {
    "v-header": NavHeader,
    "list-card": ListCard
  },
  created() {
    getPlayLists(this, this.$store.state.config.user_id, this.$store.state.config.access_token)
      .then(data => {
        this.loading = false;
        this.$store.commit("addPlaylists", data);
      })
      .catch(error => {
        this.loading = false;
        this.error = error.message;
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

  &__list {
    padding: 20px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
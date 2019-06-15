<template>
  <section class="dashboard">
    <v-header></v-header>

    <p v-if="loading" class="dashboard__loading">Loading...</p>
    <p v-if="error" class="dashboard__loading">{{ error }}</p>

    <main class="dashboard__main" v-if="this.$store.state.playlists.data">
      <div class="dashboard__header">
        <h3 class="dashboard__header__title">Select your playlists for mix.</h3>
        <v-button text="Mix" small icon="music"></v-button>
      </div>

      <ul class="dashboard__main__list">
        <list-card
          v-for="(item, index) in this.$store.state.playlists.data"
          :key="index"
          :title="item.name"
          :poster="item.images[0].url"
          :uri="item.uri"
        ></list-card>
      </ul>
    </main>
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
    "list-card": ListCard,
    "v-button": Button
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

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &__title {
      font-size: 2.4rem;
      color: white;
      font-weight: 700;
    }
  }

  &__main {
    --main-padding: 20px;

    max-width: 1400px;
    margin: 0 auto;
    padding: var(--main-padding);

    @include mediaTablet() {
      --main-padding: 30px 20px;
    }

    &__list {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(2, 1fr);

      @include mediaTablet {
        grid-template-columns: repeat(4, 1fr);
      }

      @include mediaDesktop {
        grid-template-columns: repeat(6, 1fr);
      }
    }
  }
}
</style>
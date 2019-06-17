<template>
  <section class="page-content">
    <v-header></v-header>

    <p v-if="loading" class="page-content__loading">Loading...</p>
    <p v-if="error" class>{{ error }}</p>

    <main class="page-content__main" v-if="this.$store.state.playlists.data">
      <div class="page-content__header">
        <h3 class="page-content__header__title">Select your playlists for mix.</h3>
        <v-button text="Mix" small icon="music" disabled ref="mixButton" @onClick="goToMix"></v-button>
      </div>

      <ul class="dashboard__list">
        <list-card
          v-for="(item, index) in this.$store.state.playlists.data"
          :key="index"
          :title="item.name"
          :poster="item.images[0].url"
          :id="item.id"
          @openPreview="() => openModalPreview('modal-preview', item)"
        ></list-card>
      </ul>
    </main>

    <Modal
      v-if="modal.isOpen && modal.name === 'modal-preview'"
      @close="closeModal"
      :title="this.prePlaylist.name"
    >
      <ul v-if="prePlaylist.tracks">
        <track-item v-for="(item, index) in prePlaylist.tracks" :key="index" :data="item.track"></track-item>
      </ul>
    </Modal>
  </section>
</template>

<script>
import Button from "../components/Button";
import NavHeader from "../components/NavHeader";
import ListCard from "../components/ListCard";
import Modal from "../components/Modal";
import TrackItem from "../components/TrackItem";
import { getPlayLists, getPlaylistTracks } from "../api/playlists/getPlayLists";

export default {
  name: "dashboard",
  components: {
    "v-header": NavHeader,
    "list-card": ListCard,
    "v-button": Button,
    "track-item": TrackItem,
    Modal
  },
  data() {
    return {
      loading: true,
      error: null,
      modal: {
        name: null,
        isOpen: false
      },
      prePlaylist: {
        name: null,
        tracks: null
      }
    };
  },
  created() {
    if (this.$store.state.mixSelection.length !== 0) this.$store.commit("resetPlaylistsSelection");

    getPlayLists(this, this.$store.state.config.user_id, this.$store.state.config.access_token)
      .then(data => {
        this.loading = false;
        this.$store.commit("addPlaylists", data);
      })
      .catch(error => {
        this.loading = false;
        this.error = error.message;
      });
  },
  methods: {
    openModalPreview(modal, item) {
      document.getElementsByTagName("body")[0].classList.add("is-hide");

      getPlaylistTracks(this, item.id, this.$store.state.config.access_token).then(data => {
        this.prePlaylist = { name: item.name, tracks: data.tracks.items };
        this.modal.isOpen = true;
        this.modal.name = modal;
      });
    },
    closeModal() {
      this.modal.isOpen = false;
      this.modal.name = null;
      this.prePlaylist = { name: null, tracks: null };
      document.getElementsByTagName("body")[0].classList.remove("is-hide");
    },
    goToMix() {
      this.$router.history.push("mix");
    }
  }
};
</script>

<style lang="scss">
.dashboard {
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
</style>
<template>
  <section class="page-content">
    <v-header></v-header>

    <p v-if="loading" class="page-content__loading">Loading...</p>
    <p v-if="error" class>{{ error }}</p>

    <main class="page-content__main" v-if="this.playlists.length > 0">
      <div class="dashboard__header">
        <h3 class="dashboard__header__title">Select your playlists for the mix.</h3>
        <v-button text="Mix" icon="music" ref="mixButton" @onClick="goToMix"></v-button>
      </div>

      <div class="dashboard__alert" v-if="this.alert.isVisible">
        The playlist
        <span class="bold">"{{ this.alert.name }}"</span> has been created correctly
      </div>

      <ul class="dashboard__list">
        <list-card
          v-for="(item, index) in this.playlists"
          :key="index"
          :title="item.name"
          :poster="item.images[0].url"
          :id="item.id"
          @openPreview="() => openModalPreview('modal-preview', item)"
          :selected="mixSelection.indexOf(item.id) !== -1 ? true : false"
        ></list-card>
      </ul>
    </main>

    <Modal
      v-if="modal.isOpen && modal.name === 'modal-preview'"
      @close="closeModal"
      :title="this.prePlaylist.name"
    >
      <ul v-if="prePlaylist.tracks">
        <track-item v-for="(item, index) in prePlaylist.tracks" :key="index" :data="item"></track-item>
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
import { getPlayLists, getPlaylistTracks } from "../api/playlists";
import { mapState } from "vuex";

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
      alert: {
        isVisible: false,
        name: null
      },
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
    getPlayLists(this, this.config.user_id, this.config.access_token)
      .then(data => {
        this.loading = false;
        this.$store.commit("addPlaylists", data);
      })
      .catch(error => {
        this.loading = false;
        this.error = error.message;
      });

    if (this.$route.params.mixCreated) {
      this.alert.isVisible = true;
      this.alert.name = this.$route.params.name;

      setTimeout(() => {
        this.alert.isVisible = false;
      }, 3000);
    }
  },
  updated() {
    this.mixSelection.length >= 2 ? this.$refs.mixButton.activeButton() : this.$refs.mixButton.disabledButton();
  },
  methods: {
    openModalPreview(modal, item) {
      document.getElementsByTagName("body")[0].classList.add("is-hide");

      getPlaylistTracks(this, item.id, this.config.access_token).then(data => {
        this.prePlaylist = { name: item.name, tracks: data };
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
  },
  computed: mapState(["mixSelection", "config", "playlists"])
};
</script>

<style lang="scss">
.dashboard {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &__title {
      font-size: 2.6rem;
      color: white;
      font-weight: 700;
      padding-right: 10px;
    }
  }

  &__alert {
    color: white;
    font-weight: 300;
    font-size: 1.6rem;
    text-align: center;

    background-color: rgba($green, 0.3);
    border: 1px solid $green;
    padding: 15px;
    margin-bottom: 15px;
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
</style>
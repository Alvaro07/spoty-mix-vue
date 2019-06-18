<template>
  <section class="page-content">
    <v-header></v-header>

    <p v-if="loading" class="page-content__loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <main class="page-content__main" v-if="this.mix.tracks">
      <div class="page-content__header">
        <h3 class="page-content__header__title">Your mixlist:</h3>
        <div>
          <v-button
            text="Return"
            icon="reply"
            extraClass="margin-right-10"
            @onClick="goToDashboard"
          ></v-button>
          <v-button
            text="Create playlist"
            icon="volume-up"
            variant="green"
            @onClick="() => openCreateModal('modal-create')"
          ></v-button>
        </div>
      </div>

      <ul class="mix__list">
        <track-item v-for="(item, index) in this.mix.tracks" :key="index" :data="item.track"></track-item>
      </ul>

      <Modal
        v-if="modal.isOpen && modal.name === 'modal-create'"
        @close="closeModal"
        title="Set a name for your playlist and create it!"
      >
        <div class="mix__modal-create">
          <form class="mix__modal-create__form">
            <InputField
              placeholder="Playlist name"
              @onKeyUp="e => checkCreateButton(e)"
              extraClass="margin-right-20"
            ></InputField>
            <v-button
              text="Mixing!"
              icon="sliders-h"
              variant="green"
              disabled
              ref="createButton"
              type="submit"
              @onClick="mixing"
            ></v-button>
          </form>
        </div>
      </Modal>
    </main>
  </section>
</template>
<script>
import Button from "../components/Button";
import NavHeader from "../components/NavHeader";
import Modal from "../components/Modal";
import TrackItem from "../components/TrackItem";
import InputField from "../components/InputField";
import { getPlayLists, getPlaylistTracks, createMixList, addTracksToMixList } from "../api/playlists";

export default {
  name: "mix",
  components: {
    "v-header": NavHeader,
    "v-button": Button,
    "track-item": TrackItem,
    Modal,
    InputField
  },
  data() {
    return {
      loading: true,
      error: null,
      modal: {
        name: null,
        isOpen: false
      },
      mix: {
        name: null,
        tracks: null
      }
    };
  },
  mounted() {
    let finalList = [];
    this.mix.tracks = [];

    this.$store.state.mixSelection.forEach(element => {
      getPlaylistTracks(this, element, this.$store.state.config.access_token).then(data => {
        finalList = finalList.concat(data.tracks.items);
        this.mix.tracks = finalList;
      });
    });

    this.loading = false;
  },
  methods: {
    goToDashboard() {
      this.$router.history.push("dashboard");
    },
    openCreateModal(modal, item) {
      document.getElementsByTagName("body")[0].classList.add("is-hide");
      this.modal.isOpen = true;
      this.modal.name = modal;
    },
    closeModal() {
      this.modal.isOpen = false;
      this.modal.name = null;
      document.getElementsByTagName("body")[0].classList.remove("is-hide");
    },
    checkCreateButton(name) {
      this.mix.name = name;
      name.length > 0 ? this.$refs.createButton.activeButton() : this.$refs.createButton.disabledButton();
    },
    mixing() {
      let uriTracks = this.mix.tracks.map(e => e.track.uri);

      createMixList(this, this.$store.state.config.user_id, this.mix.name, uriTracks, this.$store.state.config.access_token).then(() => {
        this.closeModal();
        this.$router.history.push("dashboard");
      });
    }
  }
};
</script>
<style lang="scss">
.mix {
  &__list {
    border-top: 3px solid $darkPink;
    border-bottom: 3px solid black;
  }

  &__modal-create {
    padding: 30px 20px 20px 20px;
    text-align: center;
    border-top: 1px solid rgba($lightGrey, 0.2);

    &__form {
      display: flex;
      align-items: center;
    }
  }
}
</style>

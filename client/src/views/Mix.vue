<template>
  <section class="page-content">
    <v-header></v-header>

    <p v-if="loading" class="page-content__loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <main class="page-content__main" v-if="!this.loading">
      <div class="mix__header">
        <div class="mix__header__title">
          <h3 class="mix__header__title__desc">Your new mixlist</h3>
          <h4 class="mix__header__title__number">Number of tracks: {{ this.tracks.length}}</h4>
        </div>

        <div class="mix__header__actions">
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
            ref="createButton"
          ></v-button>
        </div>
      </div>

      <Alert v-if="this.tracks.length >= 100">
        The
        <span class="bold">maximum number of tracks</span> for a playlist is 100, please delete some tracks
      </Alert>

      <ul class="mix__list" v-if="!this.loading">
        <track-item v-for="(item, index) in this.tracks" :key="index" :data="item" isDeletable></track-item>
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
import Alert from "../components/Alert";
import { getPlayLists, getPlaylistTracks, createMixList, addTracksToMixList } from "../api/playlists";
import { mapState } from "vuex";

export default {
  name: "mix",
  components: {
    "v-header": NavHeader,
    "v-button": Button,
    "track-item": TrackItem,
    Modal,
    InputField,
    Alert
  },
  data() {
    return {
      loading: true,
      error: null,
      modal: {
        name: null,
        isOpen: false
      },
      mixName: null
    };
  },
  mounted() {
    let finalList = [];
    this.loading = true;

    getPlaylistTracks(this, this.mixSelection, this.config.access_token).then(data => {
      this.$store.commit("addTracks", data);
      this.loading = false;
    });
  },
  updated() {
    if (this.tracks.length >= 100) {
      this.$refs.createButton.disabledButton();
    } else {
      if (this.$refs.createButton !== undefined) this.$refs.createButton.activeButton();
    }
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
      this.mixName = name;
      name.length > 0 ? this.$refs.createButton.activeButton() : this.$refs.createButton.disabledButton();
    },
    mixing() {
      let uriTracks = this.tracks.map(e => e.uri);

      createMixList(this, this.config.user_id, this.mixName, uriTracks, this.config.access_token).then(() => {
        this.closeModal();
        this.$router.history.push({ name: "dashboard", params: { mixCreated: true, name: this.mixName } });
        this.$store.commit("resetPlaylistsSelection");
      });
    }
  },
  computed: mapState(["mixSelection", "config", "playlists", "tracks"])
};
</script>
<style lang="scss">
.mix {
  &__header {
    margin-bottom: 20px;

    @include mediaDesktop {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      color: white;
      text-align: left;

      &__desc {
        font-size: 2.6rem;
        font-weight: 700;
        padding-bottom: 5px;
      }
      &__number {
        font-size: 1.6rem;
        font-weight: 300;
      }
    }

    &__actions {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;

      @include mediaDesktop {
        padding-top: 0;
        justify-content: flex-end;
      }
    }
  }

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

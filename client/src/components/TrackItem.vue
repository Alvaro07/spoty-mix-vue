<template>
  <li class="c-track-item">
    <div class="c-track-item__cont" ref="trackContent">
      <div class="c-track-item__cont__poster">
        <img :src="poster" :alt="title">
      </div>
      <div class="c-track-item__cont__title">
        <h3 class="c-track-item__cont__artist">{{ artist }}</h3>
        <h4 class="c-track-item__cont__track">
          {{ title }}
          <span>{{ album }}</span>
        </h4>
      </div>
    </div>

    <div class="c-track-item__actions">
      <button
        class="c-track-item__actions__icon"
        :class="{'is-disabled': !this.data.preview_url}"
        @click="playTrack"
        v-if="!isPlaying || this.data.preview_url !== this.songTrack.audio"
      >
        <font-awesome-icon icon="play"/>
      </button>

      <button
        class="c-track-item__actions__icon"
        :class="{'is-disabled': !this.data.preview_url}"
        @click="stopTrack"
        v-if="isPlaying && this.data.preview_url === this.songTrack.audio"
      >
        <font-awesome-icon icon="stop"/>
      </button>

      <button
        class="c-track-item__actions__icon"
        v-if="isDeletable"
        @click.prevent="e => deleteThisTrack(e)"
        ref="deleteButton"
      >
        <font-awesome-icon icon="trash"/>
      </button>
    </div>
  </li>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "track-item",
  props: {
    data: {
      type: Object,
      required: true
    },
    isDeletable: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      isPlaying: false
    };
  },
  computed: {
    poster() {
      return this.data.album.images[0].url;
    },
    artist() {
      return this.data.artists[0].name;
    },
    title() {
      return this.data.name;
    },
    album() {
      return this.data.album.name;
    },
    ...mapState(["tracks", "songTrack"])
  },
  methods: {
    deleteThisTrack(e) {
      this.$store.commit("deleteTrack", this.data.id);
      this.$refs.deleteButton.blur();

      if (this.tracks.length === 0) {
        this.$store.commit("resetPlaylistsSelection");
        this.$router.history.push("dashboard");
      }

      if (this.data.preview_url === this.songTrack.audio) {
        this.$store.commit("removeSongTrack");
      }
    },
    playTrack() {
      this.$store.commit("playSongTrack", this.data);
      this.isPlaying = true;
    },
    stopTrack() {
      this.$store.commit("removeSongTrack");
      this.isPlaying = false;
    }
  }
};
</script>


<style lang="scss">
.c-track-item {
  --bg-color: #{$grey};
  --actions-bg-color: #1b1d20;
  --actions-border-color: #100e0e;

  display: flex;
  transition: 0.1s all ease;

  &:not(:first-child) {
    border-top: 1px solid #100e0e;
  }
  &:not(:last-child) {
    border-bottom: 1px solid $lightGrey;
  }

  /*
  * Content container 
  */

  &__cont {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
    color: white;
    border-right: 1px solid $lightGrey;
    background-color: var(--bg-color);

    &__poster {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      img {
        max-width: 40px;
        transition: 0.1s all ease;
        border: 2px solid $lightGrey;
      }
    }

    /*
    * Name and album
    */

    &__title {
      padding-left: 15px;
    }

    &__artist {
      font-size: 1.3rem;
      font-weight: 500;
      padding-bottom: 3px;
    }

    &__track {
      font-size: 1.3rem;
      font-weight: 300;
    }
  }

  /*
  * Actions container
  */

  &__actions {
    border-left: 1px solid var(--actions-border-color);
    transition: 0.1s all ease;

    &__icon {
      height: 100%;
      padding: 10px 20px;
      border: none;
      background-color: var(--actions-bg-color);
      color: white;
      font-size: 1.8rem;
      transition: 0.1s all ease;
      cursor: pointer;

      &:not(:first-child) {
        border-left: 1px solid $lightGrey;
      }
      &:not(:last-child) {
        border-right: 1px solid $darkGrey;
      }

      &.is-active {
        --actions-bg-color: #{$pink};
      }

      &.is-disabled {
        --actions-bg-color: #{$lightGrey};
        pointer-events: none;
        cursor: default;

        svg {
          opacity: 0.2;
        }
      }

      &:hover {
        @media (hover: hover) {
          --actions-bg-color: #{$pink};
        }
      }
    }
  }
}
</style>

<template>
  <div class="c-audio-player">
    <audio
      autoplay
      :src="songTrack.audio"
      ref="audioPlayer"
      @timeupdate="currentTime = $event.target.currentTime"
    >Your browser does not support the audio element.</audio>

    <span class="c-audio-player__close" @click.prevent="close">
      <font-awesome-icon icon="chevron-down"/>
    </span>

    <div class="c-audio-player__controls">
      <button @click.prevent="play" v-if="isPause" class="c-audio-player__controls__icon">
        <font-awesome-icon icon="play"/>
      </button>

      <button @click.prevent="pause" v-if="!isPause" class="c-audio-player__controls__icon">
        <font-awesome-icon icon="pause"/>
      </button>

      <input
        type="range"
        max="30"
        min="0"
        v-model="currentTime"
        @input="updateTime($event)"
        class="c-audio-player__controls__range"
      >

      <button @click.prevent="stop" class="c-audio-player__controls__icon">
        <font-awesome-icon icon="stop"/>
      </button>
    </div>
    <p class="c-audio-player__title">{{ songTrack.artist }} - {{ songTrack.name }}</p>
  </div>
</template>


<script>
import { mapState } from "vuex";
import Button from "./Button";

export default {
  name: "audioplayer",
  data() {
    return {
      isPause: false,
      currentTime: null
    };
  },
  components: {
    "v-button": Button
  },
  computed: mapState(["songTrack"]),

  methods: {
    play() {
      this.$refs.audioPlayer.play();
      this.isPause = false;
    },
    pause() {
      this.$refs.audioPlayer.pause();
      this.isPause = true;
    },
    stop() {
      this.$refs.audioPlayer.pause();
      this.$refs.audioPlayer.currentTime = 0;
      this.isPause = true;
    },
    updateTime(e) {
      this.currentTime = e.srcElement.valueAsNumber;
    },
    close() {
      this.$store.commit("removeSongTrack");
    }
  },
  watch: {
    currentTime(time) {
      if (Math.abs(time - this.$refs.audioPlayer.currentTime) > 0.5) {
        this.$refs.audioPlayer.currentTime = time;
      }
    }
  }
};
</script>


<style lang="scss">
.c-audio-player {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 20px;

  /**
  * Controls zone
  */

  &__controls {
    display: flex;
    justify-content: space-between;

    &__range {
      flex: 1;
    }

    &__icon {
      padding: 10px;
      font-size: 2rem;
      color: white;

      background: none;
      border: none;
      transition: 0.3s all ease;
      cursor: pointer;

      &:hover {
        color: $pink;
      }

      &:not(:last-child) {
        margin-right: 20px;
      }
      &:last-child {
        margin-left: 20px;
      }
    }
  }

  /**
  * Title
  */

  &__title {
    color: white;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /**
  * Icon close
  */

  &__close {
    --icon-color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    position: absolute;
    left: calc(50% - 18px);
    top: -25px;

    border: 1px solid rgba($pink, 0.5);
    color: var(--icon-color);
    font-size: 2.4rem;
    border-radius: 50%;
    background-color: $grey;
    cursor: pointer;
    transition: 0.3s all ease;
    z-index: 1;

    &:hover {
      --icon-color: #{$pink};
    }
  }
}

/*/ Range slider /*/

.c-audio-player__controls__range {
  --track-height: 6px;
  --radius-bar: 3px;
  --circle-size: 18px;
  --thumb-color: #{$pink};
  --track-color: white;

  -webkit-appearance: none;
  vertical-align: middle;
  outline: none;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    background-color: var(--track-color);
    height: var(--track-height);
    border-radius: var(--radius-bar);
    border: 1px solid transparent;
  }

  &[disabled]::-webkit-slider-runnable-track {
    border: 1px solid var(--track-color);
    background-color: transparent;
    opacity: 0.4;
  }

  &::-moz-range-track {
    background-color: var(--track-color);
    height: var(--track-height);
    border-radius: var(--radius-bar);
    border: none;
  }

  &::-ms-track {
    color: transparent;
    border: none;
    background: none;
    height: var(--track-height);
  }

  &::-ms-fill-lower {
    background-color: var(--track-color);
    border-radius: var(--radius-bar);
  }

  &::-ms-fill-upper {
    background-color: var(--track-color);
    border-radius: var(--radius-bar);
  }

  &::-ms-tooltip {
    display: none; /* display and visibility only */
  }

  &::-moz-range-thumb {
    border-radius: 20px;
    height: var(--circle-size);
    width: var(--circle-size);
    border: none;
    background: none;
    background-color: var(--thumb-color);
  }

  &:active::-moz-range-thumb {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 100%;
    background-color: var(--thumb-color);
    height: var(--circle-size);
    width: var(--circle-size);
    margin-top: -7px;
  }

  &[disabled]::-webkit-slider-thumb {
    background-color: transparent;
    border: 1px solid var(--track-color);
  }

  &:active::-webkit-slider-thumb {
    outline: none;
  }
  &::-ms-thumb {
    border-radius: 100%;
    background-color: var(--thumb-color);
    height: var(--circle-size);
    width: var(--circle-size);
    border: none;
  }

  &:active::-ms-thumb {
    border: none;
  }
}
</style>

<template>
  <div class="c-audio-player">
    <audio
      autoplay
      :src="songTrack.audio"
      ref="audioPlayer"
      @timeupdate="currentTime = $event.target.currentTime"
    >Your browser does not support the audio element.</audio>
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

  &__title {
    color: white;
    font-weight: 500;
    text-align: center;
  }
}
</style>

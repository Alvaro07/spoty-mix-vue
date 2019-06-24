<template>
  <div class="c-audio-player">
    <audio
      autoplay
      :src="songTrack.audio"
      ref="audioPlayer"
      @timeupdate="currentTime = $event.target.currentTime"
    >Your browser does not support the audio element.</audio>
    <div class="c-audio-player__controls">
      <v-button
        text="play"
        variant="blue"
        @onClick="play"
        extraClass="margin-right-10"
        v-if="isPause"
      ></v-button>
      <v-button
        text="pause"
        variant="blue"
        @onClick="pause"
        extraClass="margin-right-10"
        v-if="!isPause"
      ></v-button>
      <v-button text="stop" variant="blue" @onClick="stop" extraClass="margin-right-10"></v-button>
      <input type="range" max="30" min="0" v-model="currentTime" @input="updateTime($event)">
      <p class="c-audio-player__title">{{ songTrack.artist }} - {{ songTrack.name }}</p>
    </div>
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
  padding-bottom: 20px;

  &__title {
    color: white;
    font-weight: 500;
    padding-top: 20px;
  }
}
</style>

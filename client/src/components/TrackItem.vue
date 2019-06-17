<template>
  <li class="c-track-item">
    <div class="c-track-item__poster">
      <img :src="poster" :alt="title">
    </div>
    <div class="c-track-item__cont">
      <h3 class="c-track-item__cont__artist">{{ artist }}</h3>
      <h4 class="c-track-item__cont__track">
        {{ title }}
        <span>{{ album }}</span>
      </h4>
    </div>
    <!-- <div class="c-track-item__actions">
      <button class="c-track-item__actions__play">
        <font-awesome-icon icon="play"/>
      </button>
    </div>-->
  </li>
</template>

<script>
export default {
  name: "track-item",
  props: {
    data: {
      type: Object,
      required: true
    }
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
  background-color: var(--bg-color);
  cursor: pointer;
  transition: 0.1s all ease;

  &:not(:first-child) {
    border-top: 1px solid #100e0e;
  }
  &:not(:last-child) {
    border-bottom: 1px solid $lightGrey;
  }

  &:hover {
    --bg-color: #{rgba($darkGrey, .9)};
    --actions-bg-color: #{$darkGrey};
    --actions-border-color: #{$darkGrey};
  }

  &__poster {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    img {
      max-width: 40px;
    }
  }

  &__cont {
    flex: 1;
    padding: 10px;
    color: white;
    border-right: 1px solid $lightGrey;

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

  &__actions {
    border-left: 1px solid var(--actions-border-color);
    transition: 0.1s all ease;

    &__play {
      height: 100%;
      padding: 10px 20px;
      border: none;
      background-color: var(--actions-bg-color);
      color: $darkPink;
      font-size: 1.8rem;
      transition: 0.1s all ease;
      cursor: pointer;
    }
  }
}
</style>

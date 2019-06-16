<template>
  <li
    class="list-card"
    :class="{'list-card--is-active' : isSelected}"
    @click.prevent="toggleActive"
  >
    <img :src="poster" :alt="title" class="list-card__image">
    <h3 class="list-card__title">{{ title }}</h3>
    <button class="list-card__preview" @click.stop="previewClick">Preview</button>
  </li>
</template>
<script>
import Button from "../components/Button";

export default {
  name: "list-card",
  data() {
    return {
      isSelected: false
    };
  },
  props: {
    title: String,
    poster: String,
    uri: String
  },
  methods: {
    toggleActive() {
      this.isSelected = !this.isSelected;
      if (this.isSelected) {
        this.$store.commit("addListToMix", this.uri);
      } else {
        this.$store.commit("removeListToMix", this.uri);
      }
    },
    previewClick() {
      this.$emit('openPreview')
    }
  }
};
</script>
<style lang="scss">
.list-card {
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 7px;
  background-color: $lightGrey;
  cursor: pointer;
  transition: 0.3s all ease;
  border-radius: 3px;

  &:hover,
  &--is-active {
    background-color: rgba($pink, 0.8);
  }

  &__image {
    width: 100%;
  }

  &__title {
    flex: 1;
    color: white;
    font-weight: 500;
    padding: 10px 0;
    word-break: break-word;
  }

  &__preview {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px;
    cursor: pointer;

    font-weight: 700;
    color: $darkGrey;

    border: none;
    background-color: white;
    border-radius: 3px;
  }
}
</style>
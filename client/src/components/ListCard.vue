<template>
  <li class="list-card" :class="isSelectedClass" @click.prevent="toggleActive" ref="thisCard">
    <img :src="poster" :alt="title" class="list-card__image">
    <h3 class="list-card__title">{{ title }}</h3>
    <button class="list-card__preview" @click.stop="previewClick">Preview</button>
  </li>
</template>


<script>
import Button from "../components/Button";
import { mapState } from "vuex";

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
    id: String,
    selected: Boolean
  },
  mounted() {
    if (this.selected) this.isSelected = true;
  },
  methods: {
    toggleActive() {
      this.isSelected = !this.isSelected;

      /**
       * When is selected is added to mixList array, if not, is removed.
       * If the array mixList length is more than two, the mix button is activated.
       */

      this.isSelected ? this.$store.commit("addListToMix", this.id) : this.$store.commit("removeListToMix", this.id);
      this.mixSelection.length >= 2 ? this.$parent.$refs.mixButton.activeButton() : this.$parent.$refs.mixButton.disabledButton();
    },
    previewClick() {
      this.$emit("openPreview");
    }
  },
  computed: {
    isSelectedClass() {
      if (this.isSelected) return "list-card--is-active";
    },
    ...mapState(["mixSelection"])
  }
};
</script>


<style lang="scss">
.list-card {
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 7px;
  background-color: $grey;
  cursor: pointer;
  transition: 0.3s all ease;
  border-radius: 3px;

  &--is-active {
    background-color: rgba($pink, 0.8);
  }

  &:hover {
    @media (hover: hover) {
      background-color: rgba($pink, 0.8);
    }
  }

  /**
  * Image card
  */

  &__image {
    width: 100%;
    border-radius: 3px;
  }

  /**
  * Title card
  */

  &__title {
    flex: 1;
    color: white;
    font-weight: 500;
    padding: 10px 0;
    word-break: break-word;
  }

  /**
  * Preview button
  */

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

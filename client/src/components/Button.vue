<template>
  <a
    v-if="type === 'buttonLink'"
    :href="href"
    class="c-button"
    :class="[{'c-button--big ': big}, {'c-button--disabled ': isDisabled}, variantClass, extraClass]"
  >
    <font-awesome-icon v-if="icon" :icon="icon" class="c-button__icon"/>
    <span v-if="text" class="c-button__text">{{ text }}</span>
  </a>

  <button
    v-else
    class="c-button"
    @click.prevent="onButtonClick"
    :class="[{'c-button--big ': big}, {'c-button--disabled ': isDisabled}, variantClass, extraClass]"
  >
    <font-awesome-icon v-if="icon" :icon="icon" class="c-button__icon"/>
    <span v-if="text" class="c-button__text">{{ text }}</span>
  </button>
</template>


<script>
export default {
  name: "Button",
  props: {
    text: String,
    type: String,
    href: String,
    icon: String,
    extraClass: String,
    big: Boolean,
    disabled: Boolean,
    variant: String
  },
  data() {
    return {
      isDisabled: this.disabled
    };
  },
  methods: {
    onButtonClick() {
      this.$emit("onClick");
    },
    activeButton() {
      this.isDisabled = false;
    },
    disabledButton() {
      this.isDisabled = true;
    }
  },
  computed: {
    variantClass() {
      if (this.variant === "green") {
        return "c-button--green";
      }
    }
  }
};
</script>


<style lang="scss">

.c-button {
  --bg-color: #{$pink};
  --border-color: #{$darkPink};
  --font-color: white;
  --padding-size: 12px 15px;
  --font-text: 1.4rem;
  --icon-size: 1.6rem;
  --icon-space: 10px;

  display: inline-flex;
  align-items: center;

  cursor: pointer;
  padding: var(--padding-size);
  background-color: var(--bg-color);
  border-radius: 5px;
  border: 2px solid var(--border-color);
  transition: 0.3s all ease;

  font-size: var(--font-text);
  font-weight: 700;
  color: var(--font-color);
  text-decoration: none;

  &:hover {
    --bg-color: #{$darkPink};
    --border-color: #{$pink};
  }

  &__icon {
    font-size: var(--icon-size);

    & + .c-button__text {
      margin-left: var(--icon-space);
    }
  }

  /**
  * Modifiers
  */

  &--big {
    --padding-size: 15px 30px;
    --font-text: 1.6rem;
    --icon-size: 2rem;
    --icon-space: 15px;
  }

  &--green {
    --bg-color: #{$green};
    --border-color: #{rgba($darkGreen, 0.3)};

    &:hover {
      --bg-color: #{$darkGreen};
      --border-color: #{$darkGreen};
    }
  }

  &--disabled {
    pointer-events: none;
    --bg-color: #ccc;
    --border-color: #ccc;
    --font-color: #{rgba($grey, 0.3)};
  }
}
</style>

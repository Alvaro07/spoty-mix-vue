<template>
  <a
    v-if="type === 'buttonLink'"
    :href="href"
    class="c-button"
    :class="[{'c-button--small ': small}, extraClass]"
  >
    <font-awesome-icon v-if="icon" :icon="icon" class="c-button__icon"/>
    <span v-if="text" class="c-button__text">{{ text }}</span>
  </a>

  <button
    v-else
    class="c-button"
    @click.prevent="onClick"
    :class="[{'c-button--small ': small}, extraClass]"
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
    extraClass: String,
    small: Boolean,
    icon: String
  },
  methods: {
    onClick() {
      this.$emit('onClick');
    }
  }
};
</script>


<style lang="scss">
.c-button {
  --bg-color: #{$pink};
  --border-color: #{$darkPink};
  --padding-size: 15px 30px;
  --font-text: 1.6rem;
  --icon-size: 2rem;
  --icon-space: 15px;

  display: flex;
  align-items: center;

  cursor: pointer;
  padding: var(--padding-size);
  background-color: var(--bg-color);
  border-radius: 5px;
  border: 2px solid var(--border-color);
  transition: 0.3s all ease;

  font-size: var(--font-text);
  font-weight: 700;
  color: white;
  text-decoration: none;

  &:hover {
    --bg-color: #{$darkPink};
    --border-color: #{$pink};
  }

  &--small {
    --padding-size: 10px 15px;
    --font-text: 1.4rem;
    --icon-size: 1.6rem;
    --icon-space: 10px;
  }

  &__icon {
    font-size: var(--icon-size);

    & + .c-button__text {
      margin-left: var(--icon-space);
    }
  }
}
</style>

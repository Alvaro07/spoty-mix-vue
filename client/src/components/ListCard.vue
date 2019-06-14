<template>
  <li class="list-card">
    <img :src="poster" :alt="title" class="list-card__image" />
    <h3>{{ title }}</h3>
  </li>
</template>
<script>
export default {
  name: "list-card",
  props: {
    title: String,
    poster: String
  }
};
</script>
<style lang="scss">
.list-card {
  &__image {
    width: 100%;
  }
}
</style>

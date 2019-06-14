<template>
  <li class="list-card">
    <img :src="poster" :alt="title" class="list-card__image">
    <h3 class="list-card__title">{{ title }}</h3>
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
  padding: 7px;
  background-color: $lightGrey;
  cursor: pointer;
  transition: 0.3s all ease;
  border-radius: 3px;

  &:hover {
    background-color: rgba($pink, 0.8);
  }

  &__image {
    width: 100%;
  }

  &__title {
    color: white;
    font-weight: 500;
    padding-top: 10px;
    word-break: break-word;
  }
}
</style>

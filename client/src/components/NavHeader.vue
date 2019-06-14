<template>
  <header class="m-header">
    <h1 class="m-header__logo">
      <font-awesome-icon icon="not-equal" class="m-header__logo__icon"/>SpotyMix
    </h1>
    <v-button icon="sign-out-alt" text="Sign out" :onButtonClick="logOut" small></v-button>
  </header>
</template>
<script>
import Button from "./Button";

export default {
  name: "NavHeader",
  components: {
    "v-button": Button
  },
  methods: {
    logOut() {
      this.$store.commit("logOut");
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style lang="scss">
.m-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;

  padding: 15px;
  background-image: url("../assets/bg-app.gif");
  border-bottom: 5px solid $lightGrey;

  &__logo {
    display: flex;
    align-items: center;

    color: white;
    font-size: 2rem;
    font-weight: 900;

    &__icon {
      color: $pink;
      margin-right: 10px;
      font-size: 3rem;
    }
  }
}
</style>

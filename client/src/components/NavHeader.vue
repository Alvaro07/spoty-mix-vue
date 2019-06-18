<template>
  <header class="m-header">
    <div class="m-header__wrap">
      <h1 class="m-header__logo">
        <font-awesome-icon icon="not-equal" class="m-header__logo__icon"/>SpotyMix
      </h1>
      
      <v-button icon="sign-out-alt" text="Sign out" @onClick="logOut" ></v-button>
    </div>
  </header>
</template>
<script>
import Button from "./Button";

export default {
  name: "nav-header",
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
  position: sticky;
  top: 0;
  z-index: 1;

  background-image: url("../assets/bg-app.gif");
  border-bottom: 5px solid $lightGrey;

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1400px;
    padding: 15px;
    margin: 0 auto;
  }

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

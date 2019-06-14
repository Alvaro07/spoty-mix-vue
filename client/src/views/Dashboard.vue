<template>
  <div class="dashboard">
    <span @click="logOut">Salir</span>Dashboard
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "dashboard",
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
.dashboard {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
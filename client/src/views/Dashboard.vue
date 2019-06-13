<template>
  <div class="dashboard">
    Dashboard
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "dashboard",
  components: {
    "v-button": Button
  },
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


<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "styles/index";

.app {
  min-height: 100%;
  height: 100%;
  background-color: $darkGrey;
}
</style>
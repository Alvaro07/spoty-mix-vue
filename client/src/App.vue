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
.is-hide {
  overflow-y: hidden;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba($grey, 0.5);
}
::-webkit-scrollbar {
  width: 7px;
  background-color: rgba($grey, 0.5);
}
::-webkit-scrollbar-thumb {
  background-color: white;
}
</style>
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
  height: 100%;
  min-height: 100%;
}

.is-hide {
  overflow-y: hidden;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba($grey, 0.5);
}
::-webkit-scrollbar {
  width: 7px;
  background-color: rgba($grey, 0.5);
}
::-webkit-scrollbar-thumb {
  background-color: white;
}

.page-content {
  height: 100%;

  &__loading {
    color: white;
    font-weight: 700;
    font-size: 1.6rem;
    padding: 20px;
    text-align: center;
  }

  

  &__main {
    --main-padding: 20px;

    max-width: 1400px;
    margin: 0 auto;
    padding: var(--main-padding);

    @include mediaTablet() {
      --main-padding: 30px 20px;
    }
  }
}
</style>
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

.page-content {
  height: 100%;

  &__loading {
    color: white;
    font-weight: 700;
    font-size: 1.6rem;
    padding: 20px;
    text-align: center;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &__title {
      font-size: 2.4rem;
      color: white;
      font-weight: 700;
    }
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
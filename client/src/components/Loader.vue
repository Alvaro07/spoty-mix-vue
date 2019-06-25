<template>
  <div class="c-loader-wrap">
    <div class="c-loader"></div>
    <div class="c-loader__text">Loading ...</div>
  </div>
</template>


<script>
export default {
  name: "loader"
};
</script>


<style lang="scss">
/**
  * Loader wrap
  */

.c-loader-wrap {
  width: 100%;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
}

/**
  * Loader component
  */

.c-loader {
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid $pink;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 4px solid transparent;
  }

  &::before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-top-color: $darkPink;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3.5s linear infinite;
  }
  &::after {
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-top-color: $yellow;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.75s linear infinite;
  }

  /**
  * Loader text 'loading'
  */

  &__text {
    color: white;
    font-weight: 500;
    font-size: 1.6rem;
    padding-top: 25px;
  }
}

/**
  * Animation
  */

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

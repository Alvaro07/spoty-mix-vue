<template>
  <div class="c-alert" :class="variantClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "alert",
  props: {
    color: {
      type: String,
      required: false
    }
  },
  computed: {
    variantClass() {
      if (this.color === "green") {
        return "c-alert--green";
      }
    }
  }
};
</script>
<style lang="scss">
.c-alert {
  --bg-color: #{rgba($yellow, 0.3)};
  --border-color: #{$yellow};

  color: white;
  font-weight: 300;
  font-size: 1.6rem;
  text-align: center;

  background-color: var(--bg-color);
  border: 1px solid $yellow;
  padding: 15px;
  margin-bottom: 15px;

  &--green {
    --bg-color: #{rgba($green, 0.3)};
    --border-color: #{$green};
  }
}
</style>

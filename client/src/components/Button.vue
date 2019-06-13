<template>
  <a v-if="type === 'buttonLink'" :href="href" class="c-button">{{ text }}</a>
  <button v-else class="c-button">{{ text }}</button>
</template>


<script>
export default {
  name: "Button",
  props: ["text", "type", "href"]
};
</script>


<style lang="scss">
.c-button {
  --bg-color: #{$pink};
  --border-color: #{$darkPink};

  display: flex;

  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  
  cursor: pointer;
  padding: 15px 30px;
  background-color: var(--bg-color);
  border-radius: 5px;
  border: 2px solid var(--border-color);
  transition: 0.3s all ease;

  &:hover {
    --bg-color: #{$darkPink};
    --border-color: #{$pink};
  }
}
</style>

<template>
  <div class="slider__wrapper">
    <span>{{ type }}</span>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    title: String
  }
}
</script>

<style>
.slider__wrapper {
  padding: var(--common-spacing);
}
</style>
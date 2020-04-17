<template>
  <div class="image-with-ratio__wrapper">
    <svg viewBox="0 0 16 9"></svg>
    <g-image
      class="image-with-ratio__image"
      :src="$urlForImage(src, meta).width(1080).url()"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    meta: Object,
    alt: String
  }
}
</script>

<style>
.image-with-ratio__image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.image-with-ratio__wrapper {
  display: grid;
  overflow: hidden;
}
.image-with-ratio__wrapper > * {
  grid-area: 1 / 1 / 2 / 2;
}
</style>
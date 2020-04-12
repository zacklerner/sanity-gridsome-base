<template>
  <div class="multi-column-text__wrapper">
    <div class="multi-column-text__inner">
      <span>{{ type }}</span>
      <h2>{{ title }}</h2>
      <div class="multi-column-text__column-wrapper">
        <div
          class="multi-column-text__column"
          v-for="column in columns"
          :key="column.key"
        >
          <h3>{{ column.title }}</h3>
          <div class="column-image__wrapper" :style="{ backgroundImage: `url(${column.image.asset.url})` }"></div>
          <BaseBlockContent :blocks="column._rawText" />
        </div>
      </div>
      <a :href="buttonLink">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    title: String,
    columns: Array,
    buttonText: String,
    buttonLink: String
  }
}
</script>

<style scoped>
.multi-column-text__wrapper {
  padding: var(--common-spacing);
}
.multi-column-text__inner {
  max-width: var(--inner-max-width);
  margin: auto;
}
.multi-column-text__column-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: calc(var(--common-spacing));
}
.multi-column-text__column {
  display: flex;
  flex-direction: column;
}
.column-image__wrapper {
  height: 0;
  padding-top: 50%;
  background-size: cover;
  background-position: center;
  margin-bottom: calc(var(--common-spacing) / 2);
}
</style>

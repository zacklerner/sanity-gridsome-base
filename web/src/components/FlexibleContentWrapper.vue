<template>
  <div class="flexible-content__wrapper">
    <div
      class="flexible-content__item-wrapper"
      v-for="block in flexibleContentBlocks"
      :key="block._key"
    >
      <FlexibleContentMultiColumnText
        v-if="block._type == 'multiColumnText'"
        :type="block._type"
        :title="block.title"
        :columns="block.columns"
        :buttonText="block.buttonText"
        :buttonLink="block.buttonLink"
      />
      <FlexibleContentSlider
        v-if="block._type == 'slider'"
        :type="block._type"
        :title="block.title"
      />
    </div>
  </div>
</template>

<script>
import FlexibleContentMultiColumnText from '~/components/FlexibleContentMultiColumnText'
import FlexibleContentSlider from '~/components/FlexibleContentSlider'

export default {
  props: {
    flexibleContentBlocks: Array
  },
  components: {
    FlexibleContentMultiColumnText,
    FlexibleContentSlider
  }
}
</script>

<style>
.flexible-content__item-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--common-spacing);
  box-shadow: var(--primary-shadow);
}
</style>
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
        :slides="block.slides"
      />
      <FlexibleContentAccordion
        v-if="block._type == 'accordion'"
        :type="block._type"
        :title="block.title"
        :image="block.image"
        :content="block._rawContent"
      />
      <FlexibleContentAccordionGroup
        v-if="block._type == 'accordionGroup'"
        :type="block._type"
        :title="block.title"
        :accordions="block.accordions"
      />
    </div>
  </div>
</template>

<script>
import FlexibleContentAccordion from '~/components/FlexibleContentAccordion'
import FlexibleContentAccordionGroup from '~/components/FlexibleContentAccordionGroup'
import FlexibleContentMultiColumnText from '~/components/FlexibleContentMultiColumnText'
import FlexibleContentSlider from '~/components/FlexibleContentSlider'

export default {
  props: {
    flexibleContentBlocks: Array
  },
  components: {
    FlexibleContentAccordion,
    FlexibleContentAccordionGroup,
    FlexibleContentMultiColumnText,
    FlexibleContentSlider
  }
}
</script>

<style scoped>
.flexible-content__item-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--common-spacing);
  border: none;
  box-shadow: none;
}
.flexible-content__item-wrapper > div {
  box-shadow: var(--shadow-primary);
  border: var(--border-primary);
}
</style>
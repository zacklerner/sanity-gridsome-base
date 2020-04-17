<template>
  <div class="accordion__wrapper">
    <badger-accordion>
      <badger-accordion-item>
        <template slot="header">
          <span>{{ type }}</span>
          <h2>{{ title }}</h2>
        </template>
        <template slot="content">
          <BaseImageWithRatio
            :src="image.asset.url"
            :meta="$static.metadata.sanityOptions"
            v-if="image !== null"
          />
          <BaseBlockContent
            :blocks="content"
            v-if="content"
          />
        </template>
      </badger-accordion-item>
    </badger-accordion>
  </div>
</template>

<script>
import { BadgerAccordion, BadgerAccordionItem } from 'vue-badger-accordion'

export default {
  components: {
    BadgerAccordion,
    BadgerAccordionItem
  },
  props: {
    type: String,
    title: String,
    image: Object,
    content: Array
  }
}
</script>

<style>
.flexible-content__wrapper .flexible-content__item-wrapper > div.accordion__wrapper {
  border: none;
}
.badger-accordion__header .js-badger-accordion-header .badger-accordion-toggle {
  border: var(--border-primary);
  padding: calc(var(--common-spacing) / 2) var(--common-spacing);
}
.js-badger-accordion-panel-inner {
  border: var(--border-primary);
  padding: var(--common-spacing);
  border-top: 0;
}
.badger-accordion-title h2 {
  margin-bottom: 0;
}
.badger-toggle-indicator {
  font-size: 2rem;
}
</style>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>
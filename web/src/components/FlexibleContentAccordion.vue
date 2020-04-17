<template>
  <ClientOnly>
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
  </ClientOnly>
</template>

<script>
export default {
  components: {
    BadgerAccordion: () =>
      import ('vue-badger-accordion')
      .then(m => m.BadgerAccordion)
      .catch(),
    BadgerAccordionItem: () =>
      import ('vue-badger-accordion')
      .then(m => m.BadgerAccordionItem)
      .catch()
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
.accordion__wrapper .badger-accordion__header .js-badger-accordion-header .badger-accordion-toggle {
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
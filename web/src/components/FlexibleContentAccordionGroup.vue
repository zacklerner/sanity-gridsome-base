<template>
  <ClientOnly>
    <div class="accordion-group__wrapper">
      <div class="accordion__wrapper">
        <span>{{ type }}</span>
        <h2>{{ title }}</h2>
        <badger-accordion>
          <badger-accordion-item
            v-for="accordion in accordions"
            :key="accordion._key"
          >
            <template slot="header">
              <h2>{{ accordion.title }}</h2>
            </template>
            <template slot="content">
              <BaseImageWithRatio
                :src="accordion.image.asset.url"
                :meta="$static.metadata.sanityOptions"
                v-if="accordion.image !== null"
              />
              <BaseBlockContent
                :blocks="accordion._rawContent"
                v-if="accordion._rawContent"
              />
            </template>
          </badger-accordion-item>
        </badger-accordion>
      </div>
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
    accordions: Array
  }
}
</script>

<style>
.accordion-group__wrapper {
  padding: var(--common-spacing);
}
.flexible-content__wrapper .flexible-content__item-wrapper > div.accordion__wrapper {
  border: none;
}
.accordion__wrapper .badger-accordion__header .js-badger-accordion-header .badger-accordion-toggle {
  border: var(--border-primary);
  padding: calc(var(--common-spacing) / 2) var(--common-spacing);
}
.accordion__wrapper .badger-accordion__header:not(:first-child) .js-badger-accordion-header .badger-accordion-toggle {
  border-top: none;
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
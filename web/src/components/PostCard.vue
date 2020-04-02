<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <div class="post-card__header">
      <g-image
        alt="Cover image"
        v-if="post.mainImage"
        class="post-card__image"
        :src="$urlForImage(post.mainImage, $page.metadata.sanityOptions).height(440).width(800).auto('format').url()"
      />
    </div>
    <div class="post-card__content">
      <h2 class="post-card__title" v-html="post.title" />
      <base-block-content :blocks="post._rawExcerpt" />

      <post-meta class="post-card__meta" :post="post" />
      <post-tags class="post-card__tags" :post="post" />

      <g-link class="post-card__link" :to="post.slug.current">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: {
    post: Object
  }
}
</script>

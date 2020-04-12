<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <h2>{{ $page.post.heroHeading }}</h2>
    <HeroVideo
      :heroHeading="$page.post.heroHeading"
      :heroSubtitle="$page.post.heroSubtitle"
      :mp4Source="$page.post.heroVideo"
      :oggSource="$page.post.heroVideoOgg"
      :webmSource="$page.post.heroVideoWebm"
      :poster="$page.post.heroVideoPoster"
    />
    <BaseBlockContent
      class="intro-copy"
      :blocks="$page.post._rawIntroCopy"
      v-if="$page.post._rawIntroCopy"
    />
    <BaseBlockContent
      class="post__content"
      :blocks="$page.post._rawBody"
      v-if="$page.post._rawBody"
    />
  </Layout>
</template>

<script>
import HeroVideo from '~/components/HeroVideo'

export default {
  components: {
    HeroVideo
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.metaDescription
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  post: sanityGenericPage (id: $id) {
    title
    heroHeading
    heroSubtitle
    heroVideoPoster {
      asset {
        url
      }
    }
    heroVideo
    heroVideoOgg
    heroVideoWebm
    _rawIntroCopy
    _rawBody(resolveReferences: { maxDepth: 5 })
    metaDescription
  }
}
</page-query>
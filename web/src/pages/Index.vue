<template>
  <Layout>
    <h1 class="page-title">{{ $page.page.title }}</h1>
    <div class="hero-section">
      <HeroVideo
        :heroHeading="$page.page.heroHeading"
        :heroSubtitle="$page.page.heroSubtitle"
        :mp4Source="$page.page.heroVideo"
        :oggSource="$page.page.heroVideoOgg"
        :webmSource="$page.page.heroVideoWebm"
        :poster="$page.page.heroVideoPoster"
      />
      <BaseBlockContent
        class="intro-copy"
        :blocks="$page.page._rawIntroCopy"
        v-if="$page.page._rawIntroCopy"
      />
    </div>
    <div class="body-copy__wrapper">
      <BaseBlockContent
        class="body-copy"
        :blocks="$page.page._rawBody"
        v-if="$page.page._rawBody"
      />
    </div>
    <FlexibleContentWrapper :flexibleContentBlocks="$page.page.content" />
  </Layout>
</template>

<script>
import FlexibleContentWrapper from '~/components/FlexibleContentWrapper'
import HeroVideo from '~/components/HeroVideo'

export default {
  components: {
    FlexibleContentWrapper,
    HeroVideo
  },
  metaInfo: {
    title: 'Home | Sanity/Gridsome Base Theme'
  }
}
</script>

<style>
.intro-copy,
.body-copy {
  max-width: var(--max-width--readable);
  padding: var(--common-spacing);
}
h1.page-title {
  margin-top: var(--common-spacing);
}
</style>

<page-query>
query Page {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  page: sanityHomepage (id: "d4f9087f-eee4-42af-bb09-3b9020c3c872") {
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
    _rawBody
    content {
      ... on SanityMultiColumnText {
        _key
        _type
        title
        columns {
          ... on SanityMultiColumnTextColumn {
            _key
            title
            image {
              asset {
                url
              }
            }
            _rawText
          }
        }
        buttonText
        buttonLink
      }
      ... on SanitySlider {
        _key
        _type
        title
        slides {
          _key
          title
          image {
            asset {
              url
            }
          }
          _rawText
          linkText
          linkDestination
        }
      }
      ... on SanityAccordion {
        _key
        _type
        title
        image {
          asset {
            url
          }
        }
        _rawContent
      }
    }
    metaDescription
  }
}
</page-query>
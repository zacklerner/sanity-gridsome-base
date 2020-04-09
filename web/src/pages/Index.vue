<template>
  <Layout>
    <h1>{{ $page.page.title }}</h1>
    <h2>{{ $page.page.heroHeading }}</h2>
    <BaseBlockContent :blocks="$page.page._rawIntroCopy" class="intro-copy" />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home | Sanity/Gridsome Base Theme'
  }
}
</script>

<style>
.intro-copy {
  max-width: var(--max-width--readable);
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
    metaDescription
  }
}
</page-query>
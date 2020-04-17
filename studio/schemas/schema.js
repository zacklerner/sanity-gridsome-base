// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import genericPage from './documents/genericPage'
import homepage from './documents/homepage'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

// Object types
import accordion from './objects/accordion'
import authorReference from './objects/authorReference'
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import multiColumnText from './objects/multiColumnText'
import multiColumnTextColumn from './objects/multiColumnTextColumn'
import slider from './objects/slider'
import sliderSlide from './objects/sliderSlide'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    accordion,
    author,
    authorReference,
    bioPortableText,
    bodyPortableText,
    category,
    excerptPortableText,
    genericPage,
    homepage,
    mainImage,
    multiColumnText,
    multiColumnTextColumn,
    post,
    siteSettings,
    slider,
    sliderSlide

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})

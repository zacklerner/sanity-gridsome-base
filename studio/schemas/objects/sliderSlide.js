export default {
  title: 'Slide',
  name: 'sliderSlide',
  type: 'object',
  fieldsets: [
    {
      title: 'Slide Link',
      name: 'slideLink'
    }
  ],
  fields: [
    {
      title: 'Slide Heading',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Slide Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Slide Text',
      name: 'text',
      type: 'excerptPortableText'
    },
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'string',
      fieldset: 'slideLink'
    },
    {
      title: 'Link Destination',
      name: 'linkDestination',
      type: 'url',
      fieldset: 'slideLink',
      validation: Rule => Rule.uri({allowRelative: true})
    }
  ]
}
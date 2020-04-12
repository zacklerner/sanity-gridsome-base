export default {
  title: 'Multi Column Text',
  name: 'multiColumnText',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Columns',
      name: 'columns',
      type: 'array',
      of: [{type: 'multiColumnTextColumn'}],
      validation: Rule => Rule.required().max(4).error('No more than four please!')
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string'
    },
    {
      title: 'Button Link',
      name: 'buttonLink',
      type: 'url',
      validation: Rule => Rule.uri({allowRelative: true})
    }
  ]
}
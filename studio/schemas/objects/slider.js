export default {
  title: 'Slider',
  name: 'slider',
  type: 'object',
  fields: [
    {
      title: 'Slider Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [{ type: 'sliderSlide' }]
    }
  ]
}
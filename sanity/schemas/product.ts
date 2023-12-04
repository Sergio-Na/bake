export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of the product',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of the product',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images of the product',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product slug',
      options: {source: 'name'},
    },
  ],
}

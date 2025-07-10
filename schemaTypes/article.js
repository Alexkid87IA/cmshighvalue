export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Extrait',
      rows: 4
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Image principale',
      options: {
        hotspot: true
      }
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Contenu'
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Auteur',
      to: {type: 'author'}
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Catégories',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'reference', to: {type: 'tag'}}]
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publié le',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'readingTime',
      type: 'number',
      title: 'Temps de lecture (minutes)'
    },
    {
      name: 'sectionType',
      type: 'reference',
      title: 'Type de section',
      to: {type: 'sectionType'}
    },
    {
      name: 'isEssential',
      type: 'boolean',
      title: 'Article essentiel',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `par ${author}`
      })
    }
  }
}
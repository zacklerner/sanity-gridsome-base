import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPerson, MdLayers, MdLibraryBooks } from 'react-icons/md'
import { FaTags, FaCat } from 'react-icons/fa'

const hiddenDocTypes = listItem =>
  !['homepage', 'category', 'author', 'post', 'siteSettings', 'genericPage'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Pages')
        .icon(MdLibraryBooks)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Homepage')
                .schemaType('homepage')
                .child(
                  S.document('homepage')
                    .schemaType('homepage')
                    .documentId('d4f9087f-eee4-42af-bb09-3b9020c3c872')
                ),
              S.listItem()
                .title('Generic Secondary Pages')
                .schemaType('genericPage')
                .child(
                  S.documentTypeList('genericPage')
                    .title('Generic Secondary Pages')
                ),
            ])
        ),
      S.listItem()
        .title('Blog')
        .icon(MdLayers)
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Posts')
                .icon(MdLayers)
                .schemaType('post')
                .child(
                  S.documentTypeList('post')
                    .title('Posts')
                ),
              S.listItem()
                .title('Authors')
                .icon(MdPerson)
                .schemaType('author')
                .child(
                  S.documentTypeList('author')
                    .title('Authors')),
              S.listItem()
                .title('Categories')
                .icon(FaCat)
                .schemaType('category')
                .child(
                  S.documentTypeList('category')
                    .title('Categories')),
            ])
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])

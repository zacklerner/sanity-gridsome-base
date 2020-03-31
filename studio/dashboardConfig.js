export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e83cfe6d85f3c02136198f5',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-base-studio',
                  apiId: 'ce3009c4-8e9f-42fc-a6f4-7c729c7563af'
                },
                {
                  buildHookId: '5e83cfe68f3f1f01b4edf472',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-base',
                  apiId: 'a4843987-c2e6-48ea-8162-89b57d3ee7d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zacklerner/sanity-gridsome-base',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-base.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

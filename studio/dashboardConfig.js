export default {
  widgets: [
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
                  buildHookId: '61264975df7e87fc201ce06b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-92sqa74a',
                  apiId: '8c4defa5-3357-4261-9035-941d7c731f1e'
                },
                {
                  buildHookId: '61264975e7f167eb2370c274',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-evg12c9c',
                  apiId: 'e71bc71d-cfe7-4ba2-9d21-2b79c3a243c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lucasltv/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-evg12c9c.netlify.app', category: 'apps'}
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

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
                  buildHookId: '5f3b4e764c146aab1960275a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hbk22sau',
                  apiId: 'bff21b04-9913-474f-8c38-147354ab7af0'
                },
                {
                  buildHookId: '5f3b4e764c146aaf27602671',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3yeut5t8',
                  apiId: 'fee538e2-5384-4cb2-a5d4-21b0e71da9c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prakash-nc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3yeut5t8.netlify.app', category: 'apps'}
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

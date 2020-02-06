export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5e3ba90b8512aa7715f8c0bf',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-yrnawz6e',
                  apiId: 'bf11cc51-bdce-4f7c-a92c-12a0b1773418'
                },
                {
                  buildHookId: '5e3ba90ba868eea50a1be999',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-iv9nz2sc',
                  apiId: 'e2604d1f-d780-4700-8ee1-588ab52d2643'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisjmccreadie/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-iv9nz2sc.netlify.com', category: 'apps'}
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

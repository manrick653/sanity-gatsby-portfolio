export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f5e04e25583441bb3e9d1e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ynn6h9oo',
                  apiId: '1b67f97b-b1fd-4e40-b632-75c1fdb53ee1'
                },
                {
                  buildHookId: '5f5e04e33b4b0e98c828f5aa',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dg7y17ih',
                  apiId: '12bbf86a-d638-440d-876e-2f81e247bdcf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/manrick653/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dg7y17ih.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

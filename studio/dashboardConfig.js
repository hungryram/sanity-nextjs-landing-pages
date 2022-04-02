export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6248bf73cf41f77f841b472f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fe4e9c8c',
                  apiId: '427aa536-44bc-479b-a4ea-62bfd865f11b'
                },
                {
                  buildHookId: '6248bf74eba34b073462537b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r94vvuo9',
                  apiId: '2144e90c-ad90-4982-8df7-769766d1ef50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hungryram/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r94vvuo9.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

const path = require('path') //在node module內寫import元件要用require

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
        path: '/projects/'+ node.frontmatter.slug,
        component: path.resolve('./src/template/project-detail.js'),
        context: { slug: node.frontmatter.slug }
      })
  })
}

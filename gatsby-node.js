const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      pages: allContentfulPage(filter: { layout: { ne: "home" } }) {
        edges {
          node {
            permalink
            contentful_id
          }
        }
      }
    }
  `).then(result => {
    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.permalink,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          permalink: node.permalink,
          id: node.contentful_id,
        },
      })
    })
  })
}

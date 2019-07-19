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
      locations: allContentfulLocation {
        edges {
          node {
            permalink
            contentful_id
          }
        }
      }
      settings: allContentfulSetting {
        edges {
          node {
            key
            value {
              value
            }
          }
        }
      }
    }
  `).then(result => {
    // Create Pages
    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.permalink,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          permalink: node.permalink,
          id: node.contentful_id,
          settings: result.data.settings.edges.map(e => e.node),
        },
      })
    })
    // Create Locations
    result.data.locations.edges.forEach(({ node }) => {
      createPage({
        path: `/locations/${node.permalink}`,
        component: path.resolve(`./src/templates/location.js`),
        context: {
          permalink: node.permalink,
          id: node.contentful_id,
          settings: result.data.settings.edges.map(e => e.node),
        },
      })
    })
  })
}

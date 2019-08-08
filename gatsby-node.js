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
            contentful_id
            permalink
            title
            address {
              address
            }
            phone
            hours {
              days
              hours
            }
            order_online_url
            menu_pdf {
              file {
                url
              }
            }
            social_links {
              icon
              url
            }
            lat
            lng
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
      navMenus: allContentfulNavMenu {
        edges {
          node {
            title
            links {
              title
              url
              contentfulchildren {
                title
                url
              }
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
          locations: result.data.locations.edges.map(e => e.node),
          navMenus: result.data.navMenus.edges.map(e => e.node),
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
          navMenus: result.data.navMenus.edges.map(e => e.node),
          settings: result.data.settings.edges.map(e => e.node),
        },
      })
    })
  })
}

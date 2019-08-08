import React from "react"
import { graphql } from "gatsby"

import { Page } from "../templates/page"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

export default class extends React.Component {
  render = () => {
    return (
      <Page
        page={this.props.data.page}
        navMenus={this.props.data.navMenus.edges.map(e => e.node)}
        settings={this.props.data.settings.edges.map(e => e.node)}
      />
    )
  }
}

export const query = graphql`
  query HomePageQuery {
    page: contentfulPage(layout: { eq: "home" }) {
      ...PageAttributes
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
`

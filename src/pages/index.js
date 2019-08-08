import React from "react"
import { graphql } from "gatsby"

import { Page } from "../templates/page"

import HTML from "../components/utilities/html"
import Jumbotron from "../components/jumbotron"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

export default class extends React.Component {
  render = () => {
    const { page, navMenus, settings } = this.props.data
    return (
      <Page
        page={page}
        navMenus={navMenus.edges.map(e => e.node)}
        settings={settings.edges.map(e => e.node)}
      >
        <Jumbotron theme="home" image={page.jumbotronImage}>
          <HTML field={page.description} />
        </Jumbotron>
      </Page>
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

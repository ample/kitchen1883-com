import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-grid-system"

import Jumbotron from "../components/jumbotron"
import Layout from "../components/layout"
import Link from "../components/utilities/link"

export default class extends React.Component {
  render = () => {
    const { page, navMenus, settings } = this.props.data
    return (
      <Layout navMenus={navMenus.edges.map(e => e.node)} settings={settings.edges.map(e => e.node)}>
        <Jumbotron theme="error" image={page.jumbotronImage}>
          <h1>Page Not Found</h1>
          <p>The page you're trying to access cannot be located.</p>
          <p>
            Please <Link to="/contact">contact us</Link> if you need help.
          </p>
        </Jumbotron>
      </Layout>
    )
  }
}

export const query = graphql`
  query NotFoundPageQuery {
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

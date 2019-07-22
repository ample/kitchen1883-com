import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

import Containers from "../containers"

import Layout from "../components/layout"
import Markdown from "../components/markdown"

// ---------------------------------------- | Page (Shared Component)

class Page extends React.Component {
  render() {
    const { page } = this.props

    return (
      <Layout>
        <div>
          <h1>{page.title}</h1>
          <Markdown node={page.description} />
          <Img fluid={page.jumbotronImage.fluid} style={{ width: "200px" }} />
          <hr />
        </div>

        <Containers data={page.containers} />

        <hr />
      </Layout>
    )
  }
}

Page.propTypes = {
  page: PropTypes.object,
}

Page.defaultProps = {
  page: null,
}

export { Page }

// ---------------------------------------- | Page Template

class PageTemplate extends React.Component {
  render = () => <Page page={this.props.data.page} />
}

export default PageTemplate

// ---------------------------------------- | Query

export const query = graphql`
  query PageQuery($id: String!) {
    page: contentfulPage(contentful_id: { eq: $id }) {
      ...PageAttributes
    }
  }
`

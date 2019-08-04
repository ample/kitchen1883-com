import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

import ContentBlock from "../components/content-block"
import HTML from "../components/utilities/html"
import Layout from "../components/layout"

// ---------------------------------------- | Page (Shared Component)

class Page extends React.Component {
  containersMap = {
    ContentfulContentContainer: ContentBlock,
  }

  containers(data = []) {
    return (data || []).map((container, i) => {
      const Container = this.containersMap[container.internal.type]
      return <Container key={i} data={container.blocks} />
    })
  }

  render() {
    const { page } = this.props
    console.log(JSON.stringify(page.containers))

    return (
      <Layout>
        <div>
          <h1>{page.title}</h1>
          <HTML field={page.description} />
          <Img fluid={page.jumbotronImage.fluid} style={{ width: "200px" }} />
          <hr />
        </div>

        {this.containers(page.containers)}

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

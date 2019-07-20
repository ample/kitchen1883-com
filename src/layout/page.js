import React from "react"
import PropTypes from "prop-types"

import Layout from "./index"

import Markdown from "../components/markdown"
import Img from "gatsby-image"

class Page extends React.Component {
  render() {
    const { page } = this.props

    return (
      <Layout>
        <p>This is the {page.title} page</p>
        <Markdown node={page.description} />
        <Img fluid={page.jumbotronImage.fluid} />
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

export default Page

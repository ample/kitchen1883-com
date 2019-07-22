import React from "react"
import PropTypes from "prop-types"

import Layout from "./index"

import Containers from "../containers"

import Markdown from "../components/markdown"
import Img from "gatsby-image"

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

export default Page

import React from "react"
import PropTypes from "prop-types"

import Layout from "./index"

import Button from "../components/button"

class Page extends React.Component {
  render() {
    const { page } = this.props
    return (
      <Layout>
        <p>This is the {page.title} page</p>
        <Button>Hello</Button>
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

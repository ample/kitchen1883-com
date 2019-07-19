import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"

class Page extends React.Component {
  render() {
    const page = this.props.data.page

    return (
      <Layout>
        <p>This is the {page.title} page</p>
      </Layout>
    )
  }
}

export const query = graphql`
  query PageQuery($id: String!) {
    page: contentfulPage(contentful_id: { eq: $id }) {
      title
    }
  }
`

export default Page

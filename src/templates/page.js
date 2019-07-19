import React from "react"
import { graphql } from "gatsby"

import Page from "../layout/page"

export default class extends React.Component {
  render = () => <Page page={this.props.data.page} />
}

export const query = graphql`
  query PageQuery($id: String!) {
    page: contentfulPage(contentful_id: { eq: $id }) {
      title
    }
  }
`

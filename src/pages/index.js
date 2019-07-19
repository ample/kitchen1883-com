import React from "react"
import { graphql } from "gatsby"

import Page from "../layout/page"

export default class extends React.Component {
  render = () => <Page page={this.props.data.page} />
}

export const query = graphql`
  query HomePageQuery {
    page: contentfulPage(layout: { eq: "home" }) {
      title
    }
  }
`

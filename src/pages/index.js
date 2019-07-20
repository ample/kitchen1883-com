import React from "react"
import { graphql } from "gatsby"

import Page from "../layout/page"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

export default class extends React.Component {
  render = () => <Page page={this.props.data.page} />
}

export const query = graphql`
  query HomePageQuery {
    page: contentfulPage(layout: { eq: "home" }) {
      ...PageAttributes
    }
  }
`

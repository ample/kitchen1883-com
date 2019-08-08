import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class Location extends React.Component {
  render() {
    const location = this.props.data.location

    return (
      <Layout navMenus={this.props.pageContext.navMenus}>
        <p>This is the {location.title} Location</p>
      </Layout>
    )
  }
}

export const query = graphql`
  query locationQuery($id: String!) {
    location: contentfulLocation(contentful_id: { eq: $id }) {
      title
    }
  }
`

export default Location

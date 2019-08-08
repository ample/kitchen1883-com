import React from "react"
import { graphql } from "gatsby"

import Jumbotron from "../components/jumbotron"
import Layout from "../components/layout"
import Menu from "../components/menu"

// eslint-disable-next-line
import LocationAttributes from "../fragments/location-attributes"

class Location extends React.Component {
  render() {
    const { location } = this.props.data
    const { navMenus, settings } = this.props.pageContext

    const jumbotronAttributes = {
      title: location.title,
      address: location.address,
      hours: location.hours,
      phone: location.phone,
    }

    return (
      <Layout navMenus={navMenus} settings={settings}>
        <Jumbotron
          theme="location"
          image={location.images[0]}
          location={jumbotronAttributes}
        ></Jumbotron>
        <Menu menus={location.menus} />
      </Layout>
    )
  }
}

export const query = graphql`
  query locationQuery($id: String!) {
    location: contentfulLocation(contentful_id: { eq: $id }) {
      ...LocationAttributes
    }
  }
`

export default Location

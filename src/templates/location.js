import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { Container } from "react-grid-system"

import Button from "../components/button"
import HTML from "../components/utilities/html"
import Jumbotron from "../components/jumbotron"
import Layout from "../components/layout"
import Map from "../components/map"
import Menu from "../components/menu"
import SocialIcons from "../components/social-icons"

// eslint-disable-next-line
import LocationAttributes from "../fragments/location-attributes"
import Slideshow from "../components/utilities/slideshow"

class Location extends React.Component {
  menuButtons = () => {
    const { location } = this.props.data
    if (!location.menu_pdf && !location.order_online_url) return null
    return (
      <Container style={{ paddingBottom: "2rem", paddingTop: "3rem" }}>
        {location.menu_pdf && (
          <p className="text-center">
            <Button to={location.menu_pdf.file.url} color="white">
              Download Menu
            </Button>
          </p>
        )}
        {location.order_online_url && (
          <p className="text-center">
            <Button to={location.order_online_url}>Order Online</Button>
          </p>
        )}
      </Container>
    )
  }

  slideshow() {
    const { location } = this.props.data
    if (location.images.length === 0) return null
    const slides = location.images.map((img, i) => (
      <div key={i}>
        <Img fluid={img.fluid} />
      </div>
    ))
    return (
      <div>
        <Slideshow>{slides}</Slideshow>
      </div>
    )
  }

  chef() {
    const { location } = this.props.data
    return (
      <div>
        {location.chef_heading && <h2>{location.chef_heading}</h2>}
        {location.chef_subheading && <h3>{location.chef_subheading}</h3>}
        {location.chef_bio && <HTML field={location.chef_bio} />}
        {location.chef_image && <Img fluid={location.chef_image.fluid} />}
        {location.chef_social_links && <SocialIcons icons={location.chef_social_links} />}
      </div>
    )
  }

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
      <Layout
        location={this.props.location}
        navMenus={navMenus}
        page={location}
        settings={settings}
      >
        <Jumbotron
          theme="location"
          image={location.images[0]}
          location={jumbotronAttributes}
        ></Jumbotron>

        <Menu menus={location.menus} />

        {this.menuButtons()}

        <Container style={{ height: "48rem", marginBottom: "5rem", marginTop: "3rem" }}>
          <Map lat={location.lat} lng={location.lng} />
        </Container>

        {this.chef()}

        {this.slideshow()}
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

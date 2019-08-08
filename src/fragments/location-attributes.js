import { graphql } from "gatsby"

export const LocationAttributes = graphql`
  fragment LocationAttributes on ContentfulLocation {
    title
    permalink
    address {
      address
    }
    phone
    hours {
      days
      hours
    }
    images {
      fluid(maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    menus {
      title
      label
      sections {
        title
        label
        description {
          childMarkdownRemark {
            html
          }
        }
        items {
          title
          label
          body {
            childMarkdownRemark {
              html
            }
          }
          price
          vegetarian
          gluten_free
        }
      }
    }
    menu_pdf {
      file {
        url
      }
    }
    order_online_url
    social_links {
      icon
      url
    }
    lat
    lng
  }
`

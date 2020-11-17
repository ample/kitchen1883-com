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
      file {
        url
      }
    }
    menus {
      title
      label
      sections {
        title
        label
        body {
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
    order_pickup_url
    social_links {
      icon
      url
    }
    lat
    lng
    meta_image {
      file {
        url
      }
    }
    meta_description {
      meta_description
    }
    chef_heading
    chef_subheading
    chef_bio {
      childMarkdownRemark {
        html
      }
    }
    chef_image {
      fluid(maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    # chef_social_links {
    #   icon
    #   url
    # }
  }
`

import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on ContentfulPage {
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    jumbotronImage: image {
      fluid(maxWidth: 2400) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    containers {
      ... on ContentfulContentContainer {
        blocks {
          body {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid(maxWidth: 2400) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          background_color
          text_align
          button_label
          button_url
        }
        internal {
          type
        }
      }
      ... on ContentfulLocationsContainer {
        background_color
        label
        show_maps
        internal {
          type
        }
      }
    }
  }
`

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
  }
`
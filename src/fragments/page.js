import { graphql } from "gatsby"

export const PageAttributes = graphql`
  fragment PageAttributes on ContentfulPage {
    title
  }
`

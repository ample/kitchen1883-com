import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

// eslint-disable-next-line
import PageAttributes from "../fragments/page-attributes"

import ContentBlock from "../components/content-block"
import HTML from "../components/utilities/html"
import Jumbotron from "../components/jumbotron"
import Layout from "../components/layout"
import LocationsContainer from "../components/locations-container"

// ---------------------------------------- | Page (Shared Component)

class Page extends React.Component {
  containersMap = {
    ContentfulContentContainer: ContentBlock,
    ContentfulLocationsContainer: LocationsContainer,
  }

  containers(data = []) {
    return (data || []).map((container, i) => {
      const Container = this.containersMap[container.internal.type]
      return <Container key={i} {...container} />
    })
  }

  render() {
    const { children, page, navMenus, settings } = this.props

    return (
      <Layout navMenus={navMenus} settings={settings}>
        {children}
        {this.containers(page.containers)}
      </Layout>
    )
  }
}

Page.propTypes = {
  children: PropTypes.element,
  navMenus: PropTypes.array,
  page: PropTypes.object,
  settings: PropTypes.array,
}

Page.defaultProps = {
  page: null,
}

export { Page }

// ---------------------------------------- | Page Template

class PageTemplate extends React.Component {
  render = () => {
    const { page } = this.props.data
    const { navMenus, settings } = this.props.pageContext
    return (
      <Page page={page} navMenus={navMenus} settings={settings}>
        <Jumbotron theme="default" image={page.jumbotronImage}>
          <h1>{page.title}</h1>
          <HTML field={page.description} />
        </Jumbotron>
      </Page>
    )
  }
}

export default PageTemplate

// ---------------------------------------- | Query

export const query = graphql`
  query PageQuery($id: String!) {
    page: contentfulPage(contentful_id: { eq: $id }) {
      ...PageAttributes
    }
  }
`

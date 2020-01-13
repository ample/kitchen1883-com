import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "./global-styles"

import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"
import HelloBarScript from "./hellobar"

const Layout = ({ children, location = {}, navMenus = [], page = {}, settings = [] }) => {
  const getMenuLinks = name => {
    const menus = navMenus.filter(n => n.title === name)
    return menus.length > 0 ? menus[0].links : []
  }

  const getSetting = name => {
    const collection = settings.filter(n => n.key === name)
    return collection.length > 0 ? collection[0].value.value : null
  }

  return (
    <GlobalStyles>
      <SEO location={location} page={page} settings={settings} />
      <Header nav={getMenuLinks("HeaderMenu")} />
      <main>{children}</main>
      <Footer
        data={{
          nav: getMenuLinks("FooterMenu"),
          social: { location: "n/a", icons: JSON.parse(getSetting("footer_icons")) },
        }}
      />
      <HelloBarScript />
    </GlobalStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  navMenus: PropTypes.array,
  page: PropTypes.object.isRequired,
  settings: PropTypes.array.isRequired,
}

export default Layout

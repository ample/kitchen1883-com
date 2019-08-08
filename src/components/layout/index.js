import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "./global-styles"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, navMenus = [], settings = [] }) => {
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
      <Header nav={getMenuLinks("HeaderMenu")} />
      <main>{children}</main>
      <Footer
        data={{
          nav: getMenuLinks("FooterMenu"),
          social: { location: "n/a", icons: JSON.parse(getSetting("footer_icons")) },
        }}
      />
    </GlobalStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navMenus: PropTypes.array,
}

export default Layout

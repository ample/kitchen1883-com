import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "./global-styles"

import Header from "./header"
// import Footer from "./footer"

const Layout = ({ children, navMenus = [] }) => {
  const getMenuLinks = name => {
    const menus = navMenus.filter(n => n.title === name)
    return menus.length > 0 ? menus[0].links : []
  }

  return (
    <GlobalStyles>
      <Header nav={getMenuLinks("HeaderMenu")} />
      <main>{children}</main>
      {/* <Footer /> */}
    </GlobalStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navMenus: PropTypes.array,
}

export default Layout

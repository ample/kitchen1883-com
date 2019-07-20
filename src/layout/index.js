import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import GlobalStyles from "./global-styles"

const Layout = ({ children }) => {
  return (
    <GlobalStyles>
      <Header />
      <main>{children}</main>
      <Footer />
    </GlobalStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

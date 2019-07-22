import React from "react"
import PropTypes from "prop-types"

import("./globals.scss")

const GlobalStyles = ({ children }) => <>{children}</>

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalStyles

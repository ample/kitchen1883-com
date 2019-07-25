import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ children, to, activeClassName, ...other }) => {
  const internalLink = /^\/(?!\/)/.test(to)

  return internalLink ? (
    <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
      {children}
    </GatsbyLink>
  ) : (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
}

export default Link

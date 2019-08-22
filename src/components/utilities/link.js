import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ children, to, activeClassName, target, ...other }) => {
  const internalLink = /^\/(?!\/)/.test(to)

  return internalLink ? (
    <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
      {children}
    </GatsbyLink>
  ) : (
    <a href={to} target={target} rel={target === "_blank" ? "noopener" : ""} {...other}>
      {children}
    </a>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string, // exclusive to external links
  activeClassName: PropTypes.string, // exclusive to internal links
}

Link.defaultProps = {
  target: "_blank",
}

export default Link

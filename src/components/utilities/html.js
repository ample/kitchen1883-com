import React from "react"
import PropTypes from "prop-types"

const HTML = ({ field, className }) => {
  if (!field || !field.childMarkdownRemark) return null
  return (
    <div
      dangerouslySetInnerHTML={{ __html: field.childMarkdownRemark.html }}
      className={className}
    />
  )
}

HTML.propTypes = {
  field: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default HTML

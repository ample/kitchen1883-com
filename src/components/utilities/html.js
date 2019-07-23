import React from "react"
import PropTypes from "prop-types"

const HTML = ({ field }) => {
  if (!field || !field.childMarkdownRemark) return null
  return <div dangerouslySetInnerHTML={{ __html: field.childMarkdownRemark.html }} />
}

HTML.propTypes = {
  field: PropTypes.object.isRequired,
}

export default HTML

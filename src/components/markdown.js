import React from "react"
import PropTypes from "prop-types"

const Markdown = props => {
  if (!props.node || !props.node.childMarkdownRemark) return null
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.node.childMarkdownRemark.html }}
    />
  )
}

Markdown.propTypes = {
  node: PropTypes.object.isRequired,
}

export default Markdown

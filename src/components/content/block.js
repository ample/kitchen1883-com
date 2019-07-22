import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Markdown from "../markdown"

const ContentBlock = props => (
  <div>
    {props.image && <Img fluid={props.image.fluid} style={{ width: "200px" }} />}
    {props.body && <Markdown node={props.body} />}
  </div>
)

ContentBlock.propTypes = {
  background_color: PropTypes.string,
  body: PropTypes.object,
  button_label: PropTypes.string,
  button_url: PropTypes.string,
  image: PropTypes.object,
  text_align: PropTypes.string,
}

export default ContentBlock

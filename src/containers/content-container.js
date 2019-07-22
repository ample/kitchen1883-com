import React from "react"
import PropTypes from "prop-types"

import ContentBlock from "../blocks/content-block"

const ContentContainer = ({ data }) => data.map((block, i) => <ContentBlock {...block} key={i} />)

ContentContainer.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ContentContainer

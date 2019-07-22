import React from "react"
import PropTypes from "prop-types"

import ContentBlock from "./block"

const Content = ({ data }) => data.map((block, i) => <ContentBlock {...block} key={i} />)

Content.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Content

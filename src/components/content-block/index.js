import React from "react"
import PropTypes from "prop-types"

import Tile from "./tile"

const ContentBlock = ({ data }) => data.map((block, i) => <Tile {...block} key={i} />)

ContentBlock.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ContentBlock

import React from "react"
import PropTypes from "prop-types"

import ContentContainer from "./content-container"

const containersMap = {
  ContentfulContentContainer: ContentContainer,
}

const Containers = ({ data }) =>
  data.map((container, i) => {
    const Container = containersMap[container.internal.type]
    return <Container key={i} data={container.blocks} />
  })

Containers.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Containers

import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-grid-system"
import styled from "styled-components"

import Tile from "./tile"

const TileWrapper = styled.div`
  display: flex;
`

class ContentBlock extends React.Component {
  blocks() {
    return this.props.data.map((block, i) => <Tile idx={i} {...block} key={i} />)
  }

  isSolo() {
    return this.props.data.length <= 1
  }

  render() {
    const WrapperTagName = this.isSolo() ? Container : TileWrapper
    return (
      <WrapperTagName>
        {this.isSolo() && <Tile solo={true} {...this.props.data[0]} />}
        {!this.isSolo() && this.blocks()}
      </WrapperTagName>
    )
  }
}

ContentBlock.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ContentBlock

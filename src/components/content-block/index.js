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
    const blocks = this.props.data
    return blocks.map((block, i) => <Tile width={this.blockWidth(i)} {...block} key={i} />)
  }

  blockWidth(idx) {
    switch (this.props.data.length) {
      case 2:
        if (this.props.data.filter(b => b.image).length === 0) return "50%"
        return idx == 0 ? "75%" : "25%"
      case 3:
        return idx == 0 ? "50%" : "25%"
      case 4:
        return "25%"
      default:
        return "100%"
    }
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

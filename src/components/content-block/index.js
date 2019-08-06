import React from "react"
import PropTypes from "prop-types"
// import { Container } from "react-grid-system"
import styled from "styled-components"

// import Tile from "./tile"
import ImageBlock from "./image"
import TextBlock from "./text"

const Wrapper = styled.div`
  /* background: red; */
  display: flex;
  height: ${props => props.height || "auto"};
`

const Block = styled.div`
  position: relative;
  width: ${props => props.width || "100%"};
`

class ContentBlock extends React.Component {
  // blocks() {
  //   const blocks = this.props.data
  //   return blocks.map((block, i) => (
  //     <Tile featured={blocks.length === 1} width={this.blockWidth(i)} {...block} key={i} />
  //   ))
  // }

  hasImages() {
    return this.props.data.filter(b => b.image).length > 0
  }

  isSolo() {
    return this.props.data.length === 1
  }

  hasMultipleBlocks() {
    return this.props.data.length > 1
  }

  wrapperHeight() {
    return this.hasMultipleBlocks() || this.hasImages() ? "56.3rem" : "auto"
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

  renderBlock(block, idx) {
    const TagName = block.image ? ImageBlock : TextBlock
    return (
      <Block width={this.blockWidth(idx)} key={idx}>
        <TagName solo={this.isSolo()} {...block}></TagName>
      </Block>
    )
  }

  render() {
    return (
      <Wrapper height={this.wrapperHeight()}>
        {this.props.data.map((b, i) => this.renderBlock(b, i))}
      </Wrapper>
    )
  }
}

ContentBlock.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ContentBlock

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ImageBlock from "./image-block"
import TextBlock from "./text-block"

const Wrapper = styled.div`
  display: flex;
  height: ${props => props.height || "auto"};
`

const Block = styled.div`
  position: relative;
  width: ${props => props.width || "100%"};
`

class ContentBlock extends React.Component {
  hasImages() {
    return this.props.blocks.filter(b => b.image).length > 0
  }

  isSolo() {
    return this.props.blocks.length === 1
  }

  hasMultipleBlocks() {
    return this.props.blocks.length > 1
  }

  wrapperHeight() {
    return this.hasMultipleBlocks() || this.hasImages() ? "56.3rem" : "auto"
  }

  blockWidth(idx) {
    switch (this.props.blocks.length) {
      case 2:
        if (this.props.blocks.filter(b => b.image).length === 0) return "50%"
        return idx === 0 ? "75%" : "25%"
      case 3:
        return idx === 0 ? "50%" : "25%"
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
        <TagName solo={this.isSolo()} wrapperHeight={this.wrapperHeight()} {...block}></TagName>
      </Block>
    )
  }

  render() {
    return (
      <Wrapper height={this.wrapperHeight()}>
        {this.props.blocks.map((b, i) => this.renderBlock(b, i))}
      </Wrapper>
    )
  }
}

ContentBlock.propTypes = {
  blocks: PropTypes.array.isRequired,
}

export default ContentBlock

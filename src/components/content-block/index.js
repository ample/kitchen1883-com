import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ImageBlock from "./image-block"
import TextBlock from "./text-block"

import { screen } from "../global-variables"

const Wrapper = styled.div`
  @media ${screen.min.sm} {
    display: flex;
  }
  @media ${screen.min.sm} and ${screen.max.lg} {
    flex-wrap: wrap;
  }
`

const Block = styled.div`
  height: ${props => (props.height && props.image ? props.height.sm : "auto")};
  position: relative;

  @media ${screen.min.sm} and ${screen.max.lg} {
    flex: 1 1 auto;
    height: ${props => (props.height ? props.height.md : "auto")};
    flex-basis: ${props => (props.solo ? "100%" : "50%")};
  }

  @media ${screen.min.lg} {
    height: ${props => (props.height ? props.height.lg : "auto")};
    width: ${props => props.width || "100%"};
  }
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
    if (this.hasMultipleBlocks() || this.hasImages())
      return { sm: "36rem", md: "48rem", lg: "56.3rem" }
    return { sm: "auto", md: "auto", lg: "auto" }
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
      <Block
        height={this.wrapperHeight()}
        width={this.blockWidth(idx)}
        key={idx}
        solo={this.isSolo()}
        image={block.image ? 1 : 0}
      >
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

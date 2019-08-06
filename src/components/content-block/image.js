import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.div`
  .block-image {
    height: 100%;
    position: absolute !important;
    width: 100%;
  }
`

const ImageBlock = props => (
  <Wrapper>
    <Img className="block-image" fluid={props.image.fluid} />
  </Wrapper>
)

ImageBlock.propTypes = {
  image: PropTypes.object.isRequired,
  width: PropTypes.bool,
}

export default ImageBlock

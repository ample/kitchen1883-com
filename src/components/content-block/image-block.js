import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

import HTML from "../utilities/html"

import Button from "../button"
import { colors, fonts } from "../global"

const Wrapper = styled.div`
  .block-image {
    height: 100%;
    position: absolute !important;
    width: 100%;
  }

  .block-content-wrapper {
    position: relative;
    max-width: 100rem;
    height: ${props => props.wrapperHeight};
    margin: 0 auto;
  }

  .block-content {
    position: absolute;
    bottom: 5rem;
    left: ${props => (["left", null].includes(props.textAlign) ? "0" : "auto")};
    right: ${props => (props.textAlign === "right" ? "0" : "auto")};
    width: 100%;

    &,
    *:not(a) {
      color: ${colors.white};
      text-align: ${props => props.textAlign || "left"};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${fonts.sans};
      letter-spacing: 0.6rem;
      text-transform: uppercase;
    }
  }
`

const ImageBlock = props => (
  <Wrapper textAlign={props.text_align} wrapperHeight={props.wrapperHeight}>
    <Img className="block-image" fluid={props.image.fluid} />
    <div className="block-content-wrapper">
      <div className="block-content">
        <HTML field={props.body} />
        {props.button_label && props.button_url && (
          <Button to={props.button_url} color="white">
            {props.button_label}
          </Button>
        )}
      </div>
    </div>
  </Wrapper>
)

ImageBlock.propTypes = {
  image: PropTypes.object.isRequired,
  text_align: PropTypes.string,
  width: PropTypes.bool,
  wrapperHeight: PropTypes.string,
}

ImageBlock.defaultProps = {
  text_align: "left",
}

export default ImageBlock

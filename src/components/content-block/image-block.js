import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

import HTML from "../utilities/html"

import Button from "../button"
import { breakpoints, colors, fonts, screen } from "../global-variables"

const Wrapper = styled.div`
  .block-image {
    height: 100%;
    position: absolute !important;
    width: 100%;
  }

  .block-content-wrapper {
    position: relative;
    max-width: ${breakpoints.lg - 10}px;
    height: ${props => props.wrapperHeight.sm};
    margin: 0 auto;

    @media ${screen.min.sm} and ${screen.max.lg} {
      height: ${props => props.wrapperHeight.md};
    }

    @media ${screen.min.lg} {
      height: ${props => props.wrapperHeight.lg};
    }
  }

  .block-content {
    bottom: 3.6rem;
    font-family: ${props => (props.solo ? fonts.serif : "inherit")};
    font-size: ${props => (props.solo ? "2rem" : "inherit")};
    line-height: ${props => (props.solo ? "2.6rem" : "inherit")};
    position: absolute;
    padding: 0 2rem;
    width: 100%;

    ${'' /* reset button font */}
    a {
      font-family: ${fonts.sans};
    }

    @media ${screen.min.lg} {
      bottom: 5rem;
      left: ${props => (["left", null].includes(props.textAlign) ? "2rem" : "auto")};
      right: ${props => (props.textAlign === "right" ? "2rem" : "auto")};
    }

    @media ${screen.min.lg} {
      left: ${props => (["left", null].includes(props.textAlign) ? "0" : "auto")};
      right: ${props => (props.textAlign === "right" ? "0" : "auto")};
    }

    &,
    *:not(a):not(div) {
      color: ${colors.white};
      text-align: center;

      @media ${screen.min.md} {
        text-align: ${props => props.textAlign || "left"};
      }
    }

    *:not(a):not(div) {
      @media ${screen.min.md} {
        max-width: ${props => (props.solo ? "54rem" : "100%")};
        margin-left: ${props => {
          if (!props.solo) return "0"
          return ["center", "right"].includes(props.textAlign) ? "auto" : "0"
        }};
        margin-right: ${props => {
          if (!props.solo) return "0"
          return ["center"].includes(props.textAlign) ? "auto" : "0"
        }};
      }
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
  <Wrapper solo={props.solo} textAlign={props.text_align} wrapperHeight={props.wrapperHeight}>
    <Img className="block-image" fluid={props.image.fluid} />
    <div className="block-content-wrapper">
      <div className="block-content">
        {props.body && <HTML field={props.body} />}
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
  wrapperHeight: PropTypes.object,
}

ImageBlock.defaultProps = {
  text_align: "left",
}

export default ImageBlock

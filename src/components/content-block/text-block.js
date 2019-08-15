import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import HTML from "../utilities/html"

import Button from "../button"
import { colors, screen } from "../global-variables"

const colorMap = {
  dark_green: colors.olive700,
  grey: colors.gray800,
  light_green: colors.olive500,
  white: colors.white,
}

const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => colorMap[props.bgColor] || "transparent"};
  display: flex;
  flex-direction: row;
  height: 100%;

  &.is-solo {
    padding: 2rem 0;

    @media ${screen.min.lg} {
      padding: 6rem 0;
    }

    .block-content {
      max-width: 100rem;
      margin-left: ${props =>
        ["right", "center", null].includes(props.textAlign) ? "auto" : null};
      margin-right: ${props =>
        ["left", "center", null].includes(props.textAlign) ? "auto" : null};

      *:not(div):not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) {
        max-width: 80rem;
        margin-left: ${props =>
          ["right", "center", null].includes(props.textAlign) ? "auto" : null};
        margin-right: ${props =>
          ["left", "center", null].includes(props.textAlign) ? "auto" : null};
      }
    }
    *:not(a) {
      @media ${screen.min.sm} {
        text-align: ${props => props.textAlign || "center"};
      }
    }
  }

  *:not(a) {
    color: ${props => colors[props.bgColor === "white" || !props.bgColor ? "gray800" : "white"]};

    @media ${screen.min.sm} {
      text-align: ${props => props.textAlign || "left"};
    }
  }

  .block-content {
    margin-left: ${props => (["right", "center", null].includes(props.textAlign) ? "auto" : null)};
    margin-right: ${props => (["left", "center", null].includes(props.textAlign) ? "auto" : null)};
    padding: 7rem 2rem;
    text-align: center;

    @media ${screen.min.sm} {
      padding: 2rem;
      max-width: 40rem;
      text-align: left;
    }

    ul {
      padding-left: 0;
      list-style-type: none;
    }
  }
`

const buttonSizes = {
  Small: "sm",
  Medium: "md",
  Large: "lg",
}

const TextBlock = props => (
  <Wrapper
    bgColor={props.background_color}
    className={props.solo ? "is-solo" : null}
    textAlign={props.text_align}
  >
    <div className="block-content">
      {props.body && <HTML field={props.body} />}
      {props.button_label && props.button_url && (
        <Button
          to={props.button_url}
          color={props.background_color === "white" ? "gray800" : "white"}
          size={buttonSizes[props.button_size]}
        >
          {props.button_label}
        </Button>
      )}
    </div>
  </Wrapper>
)

TextBlock.propTypes = {
  background_color: PropTypes.string,
  body: PropTypes.object.isRequired,
  button_size: PropTypes.string,
  button_label: PropTypes.string,
  button_url: PropTypes.string,
  solo: PropTypes.bool,
  text_align: PropTypes.string,
}

TextBlock.defaultProps = {
  solo: false,
  text_align: "center",
}

export default TextBlock

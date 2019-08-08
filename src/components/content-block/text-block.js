import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import HTML from "../utilities/html"

import Button from "../button"
import { colors, screen } from "../../styles/variables"

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

    @media ${screen.min.md} {
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
  }

  *:not(a) {
    color: ${props => colors[props.bgColor === "white" || !props.bgColor ? "gray800" : "white"]};
    text-align: ${props => props.textAlign || "center"};
  }

  .block-content {
    margin-left: ${props => (["right", "center", null].includes(props.textAlign) ? "auto" : null)};
    margin-right: ${props => (["left", "center", null].includes(props.textAlign) ? "auto" : null)};
    max-width: 40rem;
    padding: 2rem;
  }
`

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

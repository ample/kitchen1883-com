import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colors } from "./global"

const StyledButton = styled.a`
  background-color: ${props => colors[props.color]};
  color: ${props => colors[props.color == "white" ? "grey800" : "white"]};
  display: inline-block;
  line-height: 1;
  padding: 1rem 2.5rem;
  text-decoration: none;
  text-transform: uppercase;
`

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Button.defaultProps = {
  color: "grey800",
}

export default Button

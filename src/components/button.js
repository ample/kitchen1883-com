import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Styles from "../layout/style-variables"

const StyledButton = styled.a`
  background-color: ${props => Styles.colors[props.color]};
  color: ${props => Styles.colors[props.color == "white" ? "grey" : "white"]};
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
  color: "grey",
}

export default Button

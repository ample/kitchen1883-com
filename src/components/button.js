import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colors } from "./global"

const StyledButton = styled.a`
  background-color: ${props => colors[props.color]};
  color: ${props => colors[props.color == "white" ? "gray800" : "white"]};
  display: inline-block;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: ${props => (props.block ? "100%" : "auto")};
`

const SmallButton = styled(StyledButton)`
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
`

const MediumButton = styled(StyledButton)`
  font-size: 1.8rem;
  padding: 1rem 2rem;
`

const LargeButton = styled(StyledButton)`
  font-size: 2.1rem;
  padding: 1.4rem 2.6rem;
`

const buttonMap = {
  sm: SmallButton,
  md: MediumButton,
  lg: LargeButton,
}

const Button = props => {
  const TagName = buttonMap[props.size] || MediumButton
  return <TagName {...props}>{props.children}</TagName>
}

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
}

Button.defaultProps = {
  block: false,
  color: "grey800",
  size: "md",
}

export default Button

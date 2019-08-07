import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Link from "./utilities/link"

import { colors, screen } from "./global"

const StyledButton = styled(Link)`
  background-color: ${props => colors[props.color]};
  color: ${props => colors[props.color === "white" ? "gray800" : "white"]};
  display: inline-block;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: ${props => (props.block === "true" ? "100%" : "auto")};
`

const SmallButton = styled(StyledButton)`
  font-size: 0.9rem;
  letter-spacing: 0.13rem;
  padding: 0.7rem 1.8rem;

  @media ${screen.min.md} {
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
    padding: 1rem 2rem;
  }
`

const MediumButton = styled(StyledButton)`
  font-size: 1.1rem;
  letter-spacing: 0.18rem;
  padding: 1.1rem 1.2rem;

  @media ${screen.min.md} {
    font-size: 1.3rem;
    padding: 1.2rem;
  }
`

const LargeButton = styled(StyledButton)`
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
  padding: 1rem 2rem;

  @media ${screen.min.md} {
    font-size: 1.8rem;
    letter-spacing: 0.28rem;
    padding: 1.4rem 2.5rem;
  }
`

const buttonMap = {
  sm: SmallButton,
  md: MediumButton,
  lg: LargeButton,
}

const Button = props => {
  const TagName = buttonMap[props.size] || MediumButton
  return (
    <TagName {...props} block={props.block.toString()}>
      {props.children}
    </TagName>
  )
}

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,

  // Passed onto the Link component
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  activeClassName: PropTypes.string,
}

Button.defaultProps = {
  block: false,
  color: "gray800",
  size: "md",
}

export default Button

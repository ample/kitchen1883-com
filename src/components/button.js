import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: red;
`

const Button = ({ props, children }) => <StyledButton>{children}</StyledButton>

export default Button

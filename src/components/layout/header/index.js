import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import MediaQuery from 'react-responsive'

import * as g from "../../global"

import Link from "../../utilities/link"
import Logo from "../../logo"
import HeaderNavMobile from "./nav-mobile"
import HeaderNavDesktop from "./nav-desktop"


const StyledHeader = styled.header`
  border: 1px solid pink;
  text-align: center;
  color: ${g.colors.gray800};
  position: relative;
`

const StyledLogo = styled(Logo)`
  height: 3.6rem;
  margin-top: 4.4rem;
  @media ${g.screen.max.md} {
    height: 2.2rem;
    margin-top: 2.8rem;
    margin-bottom: 2.8rem;
  }
`

const Header = props => (
  <StyledHeader>
    <Link to="/">
      <StyledLogo />
    </Link>
    <MediaQuery query={g.screen.max.md}>
      <HeaderNavMobile nav={props.data} />
    </MediaQuery>
    <MediaQuery query={g.screen.min.md}>
      <HeaderNavDesktop nav={props.data} />
    </MediaQuery>
  </StyledHeader>
)

Header.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Header

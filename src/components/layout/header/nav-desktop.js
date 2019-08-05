import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container } from "react-grid-system"
import ReactTooltip from "react"

import * as g from "../../global"
import Link from "../../utilities/link"

const StyledNav = styled(Container)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: ${g.fonts.serif};
    padding: 2rem 0.2rem;

    &:hover,
    &:focus,
    &.nav-active {
      font-weight: 700;
      color: ${g.colors.olive};
    }
  }
`

const HeaderNavDesktop = props => (
  <Container>
    <StyledNav>
      {props.nav.map((link, idx) => (
        <Link to={link.url} activeClassName="nav-active" key={`headerNav_${idx}`}>
          {link.title}
        </Link>
      ))}
    </StyledNav>
  </Container>
)

HeaderNavDesktop.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default HeaderNavDesktop

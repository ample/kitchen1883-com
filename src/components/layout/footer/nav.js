import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../../global"
import Link from "../../utilities/link"

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    font-family: ${g.fonts.serif};
    padding: 2rem 3.2rem;
    &:hover {
      text-decoration: underline;
    }
  }

  @media ${g.screen.max.sm} {
    flex-direction: column;
    margin: 1rem auto;
    a {
      padding: 1.1rem;
    }
  }
`

const FooterNav = props => (
  <StyledNav className="dark">
    {props.nav.map((link, idx) => (
      <Link to={link.url} key={`footerNav_${idx}`}>
        {link.label}
      </Link>
    ))}
  </StyledNav>
)

FooterNav.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default FooterNav

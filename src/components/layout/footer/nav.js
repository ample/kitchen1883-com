import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../../global-variables"
import Link from "../../utilities/link"

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 1rem auto;
  @media ${g.screen.min.sm} {
    flex-direction: row;
    margin: auto;
  }
`

const LinkContainer = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: ${g.fonts.serif};
    padding: 1.1rem;
    &:hover {
      font-weight: bold;
      color: ${g.colors.olive500};
    }
  }

  @media ${g.screen.min.sm} {
    position: relative;
    a{
      padding: 2rem 3rem;
    }
    ${"" /* Creates a spacer element to fix bug with hover: bold */}
    &:after {
      position: relative;
      content: '${props => props.spacer}';
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-family: ${g.fonts.serif};
      font-weight: 700;
      padding: 0rem 3rem;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }
`

const FooterNav = props => (
  <StyledNav className="dark">
    {props.nav.map((link, idx) => (
      <LinkContainer spacer={link.title} key={`footerNav_${idx}`}>
        <Link to={link.url}>{link.title}</Link>
      </LinkContainer>
    ))}
  </StyledNav>
)

FooterNav.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default FooterNav

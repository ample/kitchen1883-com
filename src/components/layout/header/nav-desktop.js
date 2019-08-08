import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container } from "react-grid-system"

import * as g from "../../global-variables"
import Link from "../../utilities/link"
import Tooltip from "../../utilities/tooltip"

const StyledNav = styled(Container)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a,
  .tooltip-trigger {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: ${g.fonts.serif};
    padding: 2rem 0.2rem;
    cursor: pointer;

    &:hover,
    &:focus,
    &.nav-active {
      font-weight: 700;
      color: ${g.colors.olive500};
    }
  }

  .tooltip-container {
    border-radius: 0px !important;
  }
`

const HeaderNavDesktop = props => {
  const dropdown = content =>
    content.map((navItem, idx) => (
      <Link to={navItem.url} activeClassName="nav-active" key={`headerNav_${navItem.title}_${idx}`}>
        {navItem.title}
      </Link>
    ))
  return (
    <Container>
      <StyledNav>
        {props.nav.map((navItem, idx) =>
          navItem.contentfulchildren ? (
            <Tooltip
              placement="bottom"
              trigger="click"
              tooltip={dropdown(navItem.contentfulchildren)}
              key={`headerNav_${idx}`}
            >
              {navItem.title}
            </Tooltip>
          ) : (
            <Link to={navItem.url} activeClassName="nav-active" key={`headerNav_${idx}`}>
              {navItem.title}
            </Link>
          )
        )}
      </StyledNav>
    </Container>
  )
}

HeaderNavDesktop.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default HeaderNavDesktop

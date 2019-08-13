import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Container } from "react-grid-system"

import * as g from "../../global-variables"
import Link from "../../utilities/link"
import Tooltip from "../../utilities/tooltip"

const StyledNav = styled(Container)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .tooltip-container {
    border-radius: 0px !important;
  }
`

const linkMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: ${g.fonts.serif};
`

const LinkContainer = styled.div`
  flex: auto;
  position: relative;

  a,
  .tooltip-trigger {
    ${linkMixin}
    padding: 2rem 0.2rem;
    cursor: pointer;
    &:hover,
    &:focus,
    &.nav-active {
      font-weight: 700;
      color: ${g.colors.olive500};
    }
  }

  ${"" /* Creates a spacer element to fix bug with hover: bold */}
  &:after {
    ${linkMixin}
    content: '${props => props.spacer}';
    position: relative;
    font-weight: 700;
    padding: 0rem 0.2rem;
    height: 0;
    overflow: hidden;
    visibility: hidden;
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
            <LinkContainer spacer={navItem.title} key={`headerNav_${idx}`}>
              <Tooltip
                placement="bottom"
                trigger="click"
                tooltip={dropdown(navItem.contentfulchildren)}
              >
                {navItem.title}
              </Tooltip>
            </LinkContainer>
          ) : (
            <LinkContainer spacer={navItem.title} key={`headerNav_${idx}`}>
              <Link to={navItem.url} activeClassName="nav-active">
                {navItem.title}
              </Link>
            </LinkContainer>
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

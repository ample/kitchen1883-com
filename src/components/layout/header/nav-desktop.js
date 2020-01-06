import React, { useState } from "react"
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
    cursor: pointer;
    &:hover,
    &:focus,
    &.nav-active {
      font-weight: 700;
      color: ${g.colors.olive500};
    }
  }
  a {
    padding: 2rem 0.2rem;
  }
  .tooltip-trigger {
    width: 100%;
    height: 100%;
    > div{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span:focus {
      outline: none;
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
  const [showTooltip, setShowTooltip] = useState(false)
  const dropdown = content =>
    content.map((navItem, idx) => (
      <Link
        to={navItem.url}
        activeClassName="nav-active"
        key={`headerNav_${navItem.title}_${idx}`}
        tabIndex="0"
      >
        {navItem.title}
      </Link>
    ))
  const handleTab = e => {
    if (e.which === 13) {
      setShowTooltip(!showTooltip)
    }
  }
  return (
    <Container>
      <StyledNav>
        {props.nav.map((navItem, idx) =>
          navItem.contentfulchildren ? (
            <LinkContainer spacer={navItem.title} key={`headerNav_${idx}`}>
              <Tooltip
                trigger="click"
                placement="bottom"
                tooltip={dropdown(navItem.contentfulchildren)}
                id={`nav${idx}Menu`}
                ariaLabelledby={`nav${idx}Button`}
              >
                <div
                  tabIndex="0"
                  role="button"
                  onClick={() => setShowTooltip(!showTooltip)}
                  onKeyPress={e => handleTab(e)}
                  id="navButton"
                  aria-controls={showTooltip ? `nav${idx}Menu` : ""}
                  aria-haspopup="true"
                  aria-expanded={showTooltip}
                >
                  <span tabIndex="-1">{navItem.title}</span>
                </div>
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

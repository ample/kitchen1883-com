import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import SVG from "react-inlinesvg"

import * as g from "../../global"
import Link from "../../utilities/link"
import { Accordion, Panel } from "../../utilities/accordion"
import hamburger from "../../../images/icons/icon-hamburger.svg"

const NavIcon = styled.div`
  display: block;
  position: absolute;
  left: 2.4rem;
  top: 2.8rem;
`

const navMixin = css`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${g.colors.gray800};
  color: ${g.colors.white};
  font-family: ${g.fonts.serif};
  font-size: 1.6rem;
  text-decoration: none;
  padding: 1.7rem 2rem;
  border-bottom: 1px solid ${g.colors.black};
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;

  a {
    ${navMixin}
  }
`

const StyledAccordion = styled(Accordion)`
  &.rc-collapse {
    .rc-collapse-item .rc-collapse-header {
      ${navMixin}
    }

    .rc-collapse-content-box a {
      background-color: ${g.colors.white};
      color: ${g.colors.gray800};
      border-bottom: 1px solid ${g.colors.gray200};
    }
  }
`

const Expandable = props => (
  <StyledAccordion accordion={false}>
    <Panel header={props.header}>
      {props.menu.map((navItem, idx) => (
        <Link to={navItem.url} activeClassName="nav-active" key={`headerNav_${props.idx}_${idx}`}>
          {navItem.label}
        </Link>
      ))}
    </Panel>
  </StyledAccordion>
)

const HeaderNavMobile = props => {
  return (
    <StyledNav>
      <NavIcon>
        <SVG src={hamburger} />
      </NavIcon>

      {props.nav.map((navItem, idx) =>
        navItem.menu ? (
          <Expandable
            header={navItem.label}
            menu={navItem.menu}
            idx={idx}
            key={`headerNav_${idx}`}
          />
        ) : (
          <Link to={navItem.url} activeClassName="nav-active" key={`headerNav_${idx}`}>
            {navItem.label}
          </Link>
        )
      )}
    </StyledNav>
  )
}

HeaderNavMobile.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default HeaderNavMobile

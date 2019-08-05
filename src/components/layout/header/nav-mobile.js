import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import SVG from "react-inlinesvg"

import * as g from "../../global"
import Link from "../../utilities/link"
import { Accordion, Panel } from "../../utilities/accordion"
import hamburger from "../../../images/icons/icon-hamburger.svg"

const linkMixin = css`
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
  &.nav-active {
    font-weight: 700;
    color: ${g.colors.cream};
  }
`

const NavIcon = styled.div`
  display: block;
  position: absolute;
  left: 0rem;
  top: 0rem;
  padding: 2.6rem 2.4rem;
  cursor: pointer;
`

const StyledList = styled.nav`
  display: ${props => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  a {
    ${linkMixin}
  }
`

const StyledAccordion = styled(Accordion)`
  &.rc-collapse {
    .rc-collapse-item .rc-collapse-header {
      ${linkMixin}
    }
    .rc-collapse-content-box a {
      background-color: ${g.colors.white};
      color: ${g.colors.gray800};
      border-bottom: 1px solid ${g.colors.gray200};
      &.nav-active {
        font-weight: 700;
        color: ${g.colors.olive};
      }
    }
  }
`

const NavLink = props => (
  <Link to={props.link.url} activeClassName="nav-active" onClick={props.onclick}>
    {props.link.title}
  </Link>
)

const Expandable = props => (
  <StyledAccordion accordion={false}>
    <Panel header={props.header}>
      {props.menu.map((link, idx) => (
        <NavLink link={link} key={`nav_mobile_${props.header}_${idx}`} onclick={props.onclick} />
      ))}
    </Panel>
  </StyledAccordion>
)

const HeaderNavMobile = props => {
  const [isOpen, setOpen] = useState(false)
  const toggleNav = () => setOpen(!isOpen)

  return (
    <>
      <NavIcon onClick={toggleNav}>
        <SVG src={hamburger} />
      </NavIcon>

      <StyledList isOpen={isOpen}>
        {props.nav.map((navItem, idx) =>
          navItem.contentfulchildren ? (
            <Expandable
              header={navItem.title}
              menu={navItem.contentfulchildren}
              onclick={toggleNav}
              key={`nav_mobile_${idx}`}
            />
          ) : (
            <NavLink link={navItem} key={`nav_mobile_${idx}`} onclick={toggleNav} />
          )
        )}
      </StyledList>
    </>
  )
}

HeaderNavMobile.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default HeaderNavMobile

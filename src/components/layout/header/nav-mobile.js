import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import SVG from "react-inlinesvg"

import * as g from "../../global-variables"
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
  &:hover,
  &:focus,
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
  position: absolute;
  top: 7.8rem;
  left: 0rem;
  width: 100%;
  z-index: 9999;
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
      &:hover,
      &:focus,
      &.nav-active {
        font-weight: 700;
        color: ${g.colors.olive500};
      }
    }
  }
`
const Expandable = props => (
  <StyledAccordion accordion={false}>
    <Panel header={props.header}>
      {props.menu.map((link, idx) => (
        <Link
          to={link.url}
          activeClassName="nav-active"
          onClick={props.onclick}
          key={`nav_mobile_${props.header}_${idx}`}
        >
          {link.title}
        </Link>
      ))}
    </Panel>
  </StyledAccordion>
)

const HeaderNavMobile = props => {
  const [isOpen, setOpen] = useState(false)
  const toggleNav = () => setOpen(!isOpen)

  const nodeRef = useRef()

  useEffect(() => {
    const handleOutsideClick = e => {
      if (!nodeRef.current.contains(e.target)) {
        toggleNav()
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    }
    // effect clean up function
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isOpen])

  return (
    <div ref={nodeRef}>
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
            <Link
              to={navItem.url}
              activeClassName="nav-active"
              onClick={toggleNav}
              key={`nav_mobile_${idx}`}
            >
              {navItem.title}
            </Link>
          )
        )}
      </StyledList>
    </div>
  )
}

HeaderNavMobile.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default HeaderNavMobile

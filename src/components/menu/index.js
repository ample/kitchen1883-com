import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container } from "react-grid-system"
import MediaQuery from "react-responsive"
import SVG from "react-inlinesvg"

import * as g from "../global-variables"
import NavDesktop from "./nav-desktop"
import NavMobile from "./nav-mobile"
import MenuCategory from "./category"
import gluten_free from "../../images/icons/diet-gluten-free.svg"
import vegetarian from "../../images/icons/diet-vegetarian.svg"

const StyledHeader = styled.header`
  background-color: ${g.colors.navy};
  padding-top: 13rem;
  height: 100%;
  h3 {
    color: ${g.colors.white};
    text-align: center;
    padding-bottom: 1.8rem;
  }

  @media ${g.screen.max.md} {
    padding-top: 3rem;
  }
`

const Legend = styled.div`
  color: ${g.colors.navy};
  font-family: ${g.fonts.serif};
  font-size: 1.4rem;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  svg {
    vertical-align: baseline;
    margin-right: 0.5rem;
  }
`

const Menu = props => {
  const tabs = Array.from(props.menus, menu => menu.label)
  const sections = Array.from(props.menus, menu => menu.sections)

  let [activeIdx, setIdx] = useState(0)
  const changeCategory = idx => setIdx(idx)

  return (
    <>
      <MediaQuery query={g.screen.max.md}>
        <StyledHeader>
          <h3>Menu</h3>
          <NavMobile tabs={tabs} sections={sections} />
        </StyledHeader>
      </MediaQuery>

      <MediaQuery query={g.screen.min.md}>
        <StyledHeader>
          <h3>Menu</h3>
          <NavDesktop tabs={tabs} activeTab={activeIdx} onClick={changeCategory} />
        </StyledHeader>
        <MenuCategory sections={sections[activeIdx]} />
      </MediaQuery>

      <Container>
        <Legend>
          <div>
            <SVG src={vegetarian} /> Vegetarian
          </div>
          <div>
            <SVG src={gluten_free} /> Gluten Free
          </div>
        </Legend>
      </Container>
    </>
  )
}

Menu.propTypes = {
  menus: PropTypes.array.isRequired,
}

export default Menu

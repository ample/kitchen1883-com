import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container } from "react-grid-system"
import SVG from "react-inlinesvg"

import * as g from "../global"
import MenuTabs from "./tabs"
import MenuCategory from "./category"
import gluten_free from "../../images/icons/diet-gluten-free.svg"
import vegetarian from "../../images/icons/diet-vegetarian.svg"

const StyledHeader = styled.header`
  background-color: ${g.colors.navy};
  padding-top: 13rem;
  h3 {
    color: ${g.colors.white};
    text-align: center;
    padding-bottom: 1.8rem;
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
    <div>
      <StyledHeader>
        <h3>Menu</h3>
        <MenuTabs tabs={tabs} activeTab={activeIdx} onClick={changeCategory} />
      </StyledHeader>

      <Container>
        <MenuCategory sections={sections[activeIdx]} />
        <Legend>
          <div>
            <SVG src={vegetarian} /> Vegetarian
          </div>
          <div>
            <SVG src={gluten_free} /> Gluten Free
          </div>
        </Legend>
      </Container>
    </div>
  )
}

Menu.propTypes = {
  menus: PropTypes.array.isRequired,
}

export default Menu

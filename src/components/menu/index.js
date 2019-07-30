import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container } from "react-grid-system"

import * as g from "../global"
import MenuTabs from "./tabs"
import MenuCategory from "./category"

const StyledHeader = styled.header`
  background-color: ${g.colors.navy};
  padding-top: 13rem;
  h3 {
    color: ${g.colors.white};
    text-align: center;
    padding-bottom: 1.8rem;
  }
`

const Menu = props => {
  const tabs = Array.from(props.menus, menu => menu.label)
  const sections = Array.from(props.menus, menu => menu.sections)

  let [activeCategory, setCategory] = useState(sections[0])
  let [activeTab, setTab] = useState(0)
  const changeTab = idx => {
    setCategory(sections[idx])
    setTab(idx)
  }

  return (
    <div>
      <StyledHeader>
        <h3>Menu</h3>
        <MenuTabs tabs={tabs} onClick={changeTab} activeTab={activeTab} />
      </StyledHeader>
      <Container>
        <MenuCategory sections={activeCategory} />
        {/* Legend */}
      </Container>
    </div>
  )
}

Menu.propTypes = {
  menus: PropTypes.array.isRequired,
}

export default Menu

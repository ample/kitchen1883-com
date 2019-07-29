import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container } from "react-grid-system"

import * as g from "../global"
import MenuSection from "./section"

const StyledHeader = styled.header`
  background-color: ${g.colors.navy};
  padding-top: 13rem;
  h3 {
    color: ${g.colors.white};
    text-align: center;
    padding-bottom: 1.8rem;
  }
`

const Menu = props => (
  <div>
    <StyledHeader>
      <h3>Menu</h3>
      {/* Category Tabs */}
    </StyledHeader>
    <Container>
      {props.sections.map((section, idx) => (
        <MenuSection
          {...section}
          firstSection={idx === 0 ? true : false}
          key={`${props.title}_section_${idx}`}
        />
      ))}
      {/* Legend */}
    </Container>
  </div>
)

Menu.propTypes = {
  label: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
}

export default Menu

import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-grid-system"

import MenuSection from "./section"

const MenuCategory = props => (
  <Container>
    {props.sections.map((section, idx) => (
      <MenuSection
        {...section}
        idx={idx}
        key={`${section.label.replace(/\s/g, "")}_section_${idx}`}
      />
    ))}
  </Container>
)

MenuCategory.propTypes = {
  sections: PropTypes.array.isRequired,
}

export default MenuCategory

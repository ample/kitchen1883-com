import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-grid-system"

import * as g from "../global"
import MenuSection from "./section"

const MenuCategory = props =>
  props.sections.map((section, idx) => (
    <MenuSection
      {...section}
      firstSection={idx === 0 ? true : false}
      key={`${props.title}_section_${idx}`}
    />
  ))

MenuCategory.propTypes = {
  sections: PropTypes.array.isRequired,
}

export default MenuCategory

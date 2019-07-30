import React from "react"
import PropTypes from "prop-types"

import * as g from "../global"
import MenuSection from "./section"

const MenuCategory = props =>
  props.sections.map((section, idx) => (
    <MenuSection
      {...section}
      idx={idx}
      key={`${section.label.replace(/\s/g, "")}_section_${idx}`}
    />
  ))

MenuCategory.propTypes = {
  sections: PropTypes.array.isRequired,
}

export default MenuCategory

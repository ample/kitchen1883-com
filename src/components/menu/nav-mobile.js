import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as g from "../global"
import { Accordion, Panel } from "../utilities/accordion"
import MenuCategory from "./category"

const StyledAccordion = styled(Accordion)`
  &.rc-collapse {
    .rc-collapse-item {
      background-color: ${g.colors.white};
      .rc-collapse-header {
        justify-content: center;
        background-color: ${g.colors.navy};
        -webkit-tap-highlight-color: transparent;
        box-shadow: inset 0 0.1rem 1rem 0 #4c6581;
        color: ${g.colors.white};
        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: 0.2rem;
        padding: 2rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          box-shadow 0.15s ease-in-out;
      }
    }
    .rc-collapse-item-active {
      .rc-collapse-header {
        background-color: ${g.colors.white};
        color: ${g.colors.navy};
        box-shadow: inset 0 0.1rem 1rem 0 ${g.colors.gray200};
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          box-shadow 0.15s ease-in-out;
      }
    }
  }
`

const NavMobile = props => (
  <StyledAccordion>
    {props.sections.map((group, idx) => (
      <Panel header={props.tabs[idx]} key={`mobile_menu_${idx}`}>
        <MenuCategory sections={group} />
      </Panel>
    ))}
  </StyledAccordion>
)

NavMobile.propTypes = {
  tabs: PropTypes.array.isRequired,
  sections: PropTypes.array.isRequired,
}

export default NavMobile

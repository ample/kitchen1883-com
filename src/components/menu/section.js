import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Col } from "react-grid-system"

import * as g from "../global-variables"
import HTML from "../utilities/html"
import MenuItem from "./item"

const StyledSection = styled.section`
  font-family: ${g.fonts.serif};
  font-size: 1.4rem;
  margin-top: 7rem;

  @media ${g.screen.max.md} {
    margin-top: 3rem;
  }
`

const StyledHTML = styled(HTML)`
  text-align: center;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    flex: 1 1 50%;
    max-width: 50%;
    &:nth-of-type(odd) {
      padding-right: 4.25rem;
    }
    &:nth-of-type(even) {
      padding-left: 4.25rem;
    }
  }
  @media ${g.screen.max.md} {
    & > div {
      flex: 1 1 100%;
      max-width: 100%;
      &:nth-of-type(odd) {
        padding-right: 0rem;
      }
      &:nth-of-type(even) {
        padding-left: 0rem;
      }
    }
  }
`

const MenuSection = props => (
  <StyledSection>
    {props.idx === 0 ? <h4>{props.label}</h4> : <h5>{props.label}</h5>}

    {props.body && (
      <Col sm={10} xl={8} offset={{ sm: 1, xl: 2 }}>
        <StyledHTML field={props.body} />
      </Col>
    )}

    <Items>
      {props.items.map((item, idx) => (
        <MenuItem {...item} key={`${props.label.replace(/\s/g, "")}_menu-item_${idx}`} />
      ))}
    </Items>
  </StyledSection>
)

MenuSection.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array,
  body: PropTypes.object,
  idx: PropTypes.number.isRequired,
}

export default MenuSection

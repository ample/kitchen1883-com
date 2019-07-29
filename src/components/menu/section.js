import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Row, Col } from "react-grid-system"

import * as g from "../global"
import HTML from "../utilities/html"
import MenuItem from "./item"

const StyledSection = styled.section`
  font-family: ${g.fonts.serif};
  font-size: 1.4rem;
  margin-top: 7rem;
`

const StyledHTML = styled(HTML)`
  text-align: center;
`

const MenuSection = props => (
  <StyledSection>
    {props.firstSection ? <h4>{props.label}</h4> : <h5>{props.label}</h5>}
    {props.body && <StyledHTML field={props.body} />}
    <Row gutterWidth={85}>
      {props.items.map((item, idx) => (
        <Col md={6} key={`${props.label}_menu-item_${idx}`}>
          <MenuItem {...item} />
        </Col>
      ))}
    </Row>
  </StyledSection>
)

MenuSection.propTypes = {
  label: PropTypes.string.isRequired,
  body: PropTypes.object,
  items: PropTypes.array,
  firstSection: PropTypes.bool,
}

MenuSection.defaultProps = {
  firstSection: false,
}

export default MenuSection

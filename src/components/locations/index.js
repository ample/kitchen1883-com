import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Container, Row, Col } from "react-grid-system"

import * as g from "../global"
import Location from "./location"

const StyledLocations = styled.div`
  background-color: ${props => (props.bgColor ? g.colors[props.bgColor] : "transparent")};
  padding-top: 7rem;
  padding-bottom: ${props => (props.label ? "11rem" : "2rem")};
  h2 {
    margin-bottom: 3.5rem;
  }
`
const Wrapper = styled.div`
  max-width: ${g.breakpoints.sm * 0.7}px;
  margin: auto;
  margin-bottom: 5rem;
`

const Locations = props => {
  return (
    <StyledLocations bgColor={props.background_color} label={props.label ? 1 : 0}>
      <Container>
        {props.label && <h2>{props.label}</h2>}
        <Row justify="center">
          {props.locations.map((loc, idx) => (
            <Col
              md={6}
              xl={props.locations.length < 3 || props.locations.length == 4 ? 6 : 4}
              key={`location_${idx}`}
            >
              <Wrapper>
                <Location {...loc} />
              </Wrapper>
            </Col>
          ))}
        </Row>
      </Container>
    </StyledLocations>
  )
}

Locations.propTypes = {
  locations: PropTypes.string,
  background_color: PropTypes.string,
  label: PropTypes.string,
  show_maps: PropTypes.bool
}

export default Locations

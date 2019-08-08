import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container, Row, Col } from "react-grid-system"

import * as g from "../global-variables"
import Location from "./location"

const StyledLocations = styled.div`
  background-color: ${props => (props.bgColor ? g.colors[props.bgColor] : "transparent")};
  padding-top: 7rem;
  padding-bottom: ${props => (props.label ? "11rem" : "2rem")};
  h2 {
    margin-bottom: 3.5rem;
  }
  .loc > div {
    max-width: ${g.breakpoints.sm * 0.7}px;
    margin: auto;
    margin-bottom: 5rem;
  }
`

const NoMaps = props => (
  <StyledLocations bgColor={props.background_color} label={props.label ? 1 : 0}>
    <Container>
      {props.label && <h2>{props.label}</h2>}

      <Row justify="center">
        {props.locations.map((loc, idx) => (
          <Col
            md={6}
            xl={props.locations.length < 3 || props.locations.length === 4 ? 6 : 4}
            key={`location_${idx}`}
            className="loc"
          >
            <div>
              <Location {...loc} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </StyledLocations>
)

NoMaps.propTypes = {
  background_color: PropTypes.string,
  label: PropTypes.string,
  locations: PropTypes.array,
}

export default NoMaps

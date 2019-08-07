import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container, Row, Col } from "react-grid-system"

import * as g from "../global"
import Location from "./location"
import Map from "../map"

const StyledLocations = styled.div`
  padding-top: 7rem;
  padding-bottom: 7rem;

  .loc > div {
    padding-top: 4rem;
    padding-bottom: 4rem;
    max-width: ${g.breakpoints.sm * 0.7}px;
    margin: auto;
  }

  &:nth-of-type(odd) {
    background-color: ${g.colors.white};
  }
  &:nth-of-type(even) {
    background-color: ${g.colors.gray100};
    .loc {
      order: 2;
    }
    .map {
      order: 1;
    }
  }

  @media ${g.screen.max.md} {
    padding-top: 1rem;
    padding-bottom: 2rem;
    .map {
      display: none;
    }
  }
`

const HasMaps = props =>
  props.locations.map((loc, idx) => (
    <StyledLocations
      bgColor={props.background_color}
      label={props.label ? 1 : 0}
      key={`location_${idx}`}
    >
      <Container>
        <Row gutterWidth={50}>
          <Col className="loc">
            <div>
              <Location {...loc} />
            </div>
          </Col>
          <Col className="map">
            <Map lat={loc.map.lat} lng={loc.map.lng} />
          </Col>
        </Row>
      </Container>
    </StyledLocations>
  ))

HasMaps.propTypes = {
  background_color: PropTypes.string,
  label: PropTypes.string,
  locations: PropTypes.array,
  show_maps: PropTypes.bool,
}

export default HasMaps

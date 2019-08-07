import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Container, Row, Col } from "react-grid-system"

import * as g from "../global"
import Location from "./location"

const Wrapper = styled.div`
  max-width: ${g.breakpoints.sm * 0.7}px;
  margin: auto;
  margin-bottom: 5rem;
`

const Locations = props => {
  return (
    <Container>
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
  )
}

Locations.propTypes = {}

export default Locations

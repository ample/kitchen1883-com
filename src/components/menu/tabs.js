import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Container, Row, Col } from "react-grid-system"

import * as g from "../global"

const Tab = styled.button`
  background: ${g.colors.navy};
  color: ${g.colors.white};
  border: none;
  text-transform: uppercase;
  width: 100%;
  height: 4.4rem;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.2rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: background 0.15s ease;
  }
  &:focus {
    outline: none;
  }

  &.active-tab {
    background: ${g.colors.white};
    color: ${g.colors.navy};
    &:hover {
      text-decoration: none;
    }
  }
`

const MenuTabs = props => {
  return (
    <Container>
      <Row>
        {props.tabs.map((tab, idx) => (
          <Col key={`menu_category_${idx}`}>
            <Tab
              onClick={() => props.onClick(idx)}
              type="button"
              className={idx == props.activeTab ? " active-tab " : ""}
            >
              {tab}
            </Tab>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

MenuTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuTabs

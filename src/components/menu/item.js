import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SVG from "react-inlinesvg"

import * as g from "../../styles/variables"
import HTML from "../utilities/html"

import gluten_free from "../../images/icons/diet-gluten-free.svg"
import vegetarian from "../../images/icons/diet-vegetarian.svg"

const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${g.colors.navy};
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;
  margin-top: 0.5rem;

  & > .label svg {
    vertical-align: baseline;
    margin: auto 0.4rem;
    &:first-of-type {
      margin-left: 0.8rem;
    }
  }

  @media ${g.screen.max.md} {
    font-size: 1.7rem;
    margin-top: 0.8rem;
  }
`

const MenuItem = props => (
  <div>
    <Headline>
      <div className="label">
        {props.label}
        {props.vegetarian && <SVG src={vegetarian} />}
        {props.gluten_free && <SVG src={gluten_free} />}
      </div>
      <div>{props.price}</div>
    </Headline>
    <HTML field={props.body} />
  </div>
)

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  body: PropTypes.object,
  price: PropTypes.string,
  vegetarian: PropTypes.bool,
  gluten_free: PropTypes.bool,
}

MenuItem.defaultProps = {
  vegetarian: false,
  gluten_free: false,
}

export default MenuItem

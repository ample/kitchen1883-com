import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SVG from "react-inlinesvg"

import * as g from "../global"
import gluten_free from "../../images/icons/diet-gluten-free.svg"
import vegetarian from "../../images/icons/diet-vegetarian.svg"

const StyledItem = styled.div`
  font-family: ${g.fonts.serif};
  p {
    font-size: 1.4rem;
  }
`

const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${g.colors.navy};
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;

  & > .label svg {
    vertical-align: baseline;
    margin: auto 0.5rem;
    &:first-of-type {
      margin-left: 1rem;
    }
  }

  @media ${g.screen.max.md} {
    font-size: 1.7rem;
  }
`

const Item = props => (
  <StyledItem>
    <Headline>
      <div className="label">
        {props.label}
        {props.vegetarian && <SVG src={vegetarian} />}
        {props.gluten_free && <SVG src={gluten_free} />}
      </div>
      <div>{props.price}</div>
    </Headline>
    <p>{props.body}</p>
  </StyledItem>
)

Item.propTypes = {
  label: PropTypes.string.isRequired,
  body: PropTypes.string,
  price: PropTypes.string,
  vegetarian: PropTypes.bool,
  gluten_free: PropTypes.bool,
}

Item.defaultProps = {
  vegetarian: false,
  gluten_free: false,
}

export default Item

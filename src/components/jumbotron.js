import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

import { breakpoints, colors, fonts, screen } from "./global"

const Wrapper = styled.div`
  height: ${props => props.wrapperHeight.sm || Jumbotron.defaultProps.wrapperHeight.sm};
  position: relative;

  @media ${screen.min.md} {
    height: ${props => props.wrapperHeight.lg || Jumbotron.defaultProps.wrapperHeight.lg};
  }

  .jumbotron-image {
    height: 100%;
    position: absolute !important;
    width: 100%;
  }

  .jumbotron-content-wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    position: relative;

    @media ${screen.min.md} {
      display: block;
      max-width: ${() => breakpoints.md - 10}px;
      margin: 0 auto;
    }
  }

  .jumbotron-content {
    position: relative;
    max-width: 48rem;

    @media ${screen.min.md} {
      position: absolute;
      bottom: 4rem;
    }

    &,
    *:not(a) {
      color: ${colors.white};
      font-family: ${fonts.serif};
      font-size: 1.7rem;
      line-height: 2.6rem;
      text-align: center;
      margin: 0 auto;

      @media ${screen.min.md} {
        font-size: 2.2rem;
        text-align: left;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${fonts.sans};
      font-size: 3.2rem;
      letter-spacing: 0.6rem;
      margin-bottom: 1rem;
      text-transform: uppercase;

      @media ${screen.min.md} {
        font-size: 4rem;
      }
    }
  }
`

const Jumbotron = props => (
  <Wrapper wrapperHeight={props.height}>
    <Img className="jumbotron-image" fluid={props.image.fluid} />
    <div className="jumbotron-content-wrapper">
      <div className="jumbotron-content">{props.children}</div>
    </div>
  </Wrapper>
)

Jumbotron.propTypes = {
  height: PropTypes.object,
  image: PropTypes.object.isRequired,
  width: PropTypes.bool,
}

Jumbotron.defaultProps = {
  height: { sm: "38rem", lg: "43rem" },
}

export default Jumbotron

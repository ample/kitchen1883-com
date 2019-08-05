import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

import { colors } from "../global"

import HTML from "../utilities/html"

const colorMap = {
  dark_green: colors.oliveDark,
  grey: colors.gray800,
  light_green: colors.olive,
  white: colors.white,
}

// TODO: Add support for:
//  - Buttons
//  - Full-width image with text
//  - Full-width image without text

const Wrapper = styled.div`
  background-color: ${props => colorMap[props.backgroundColor] || "transparent"};
  position: relative;
  text-align: ${props => props.textAlign || "center"};

  * {
    color: ${props => colors[props.props.backgroundColor == "white" ? "grey800" : "white"]};
    text-align: ${props => props.textAlign || "center"};
  }

  .tile-img {
    height: 100%;
    position: absolute;
    width: 100%;
  }
`

const SoloWrapper = styled(Wrapper)`
  padding-bottom: 11.1rem;
  padding-top: 11.1rem;
`

const TileWrapper = styled(Wrapper)`
  height: 56.3rem;
  width: ${props => props.width || "100%"};

  .tile-text {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 4rem;
  }
`

const Tile = props => {
  const WrapperTagName = props.solo ? SoloWrapper : TileWrapper
  console.log(props.background_color)
  return (
    <WrapperTagName
      backgroundColor={props.background_color}
      textAlign={props.text_align}
      width={props.width}
    >
      {props.image && <Img className="tile-img" fluid={props.image.fluid} />}
      {props.body && (
        <div className="tile-text">
          <HTML field={props.body} />
        </div>
      )}
    </WrapperTagName>
  )
}

Tile.propTypes = {
  background_color: PropTypes.string,
  body: PropTypes.object,
  button_label: PropTypes.string,
  button_url: PropTypes.string,
  idx: PropTypes.number,
  image: PropTypes.object,
  solo: PropTypes.bool,
  text_align: PropTypes.string,
  width: PropTypes.string,
}

Tile.defaultProps = {
  solo: false,
  text_align: "center",
}

export default Tile

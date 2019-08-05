import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

import { colors } from "../global"

import Button from "../button"
import HTML from "../utilities/html"

const colorMap = {
  dark_green: colors.oliveDark,
  grey: colors.gray800,
  light_green: colors.olive,
  white: colors.white,
}

// TODO:
//  - Full-width image with text
//  - Full-width image without text
//  - Write tests for this component

const Wrapper = styled.div`
  background-color: ${props => colorMap[props.backgroundColor] || "transparent"};
  position: relative;
  text-align: ${props => props.textAlign || "center"};

  * {
    color: ${props => colors[props.backgroundColor == "white" ? "gray800" : "white"]};
    text-align: ${props => props.textAlign || "center"};
  }

  .tile-img {
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .tile-button {
    background-color: ${props => colors[props.backgroundColor == "white" ? "gray800" : "white"]};
    color: ${props => colors[props.backgroundColor == "white" ? "white" : "gray800"]};
    width: auto;
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
  return (
    <WrapperTagName
      backgroundColor={props.background_color}
      textAlign={props.text_align}
      width={props.width}
    >
      {props.image && <Img className="tile-img" fluid={props.image.fluid} />}
      {props.body && (
        <div className="tile-text">
          <div>
            <HTML field={props.body} />
            {props.button_label && props.button_url && (
              <Button className="tile-button" to={props.button_url} color="white">
                {props.button_label}
              </Button>
            )}
          </div>
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

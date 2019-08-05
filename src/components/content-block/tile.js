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
  background-color: ${props => colorMap[props.bgColor] || "transparent"};
  position: relative;
  text-align: ${props => props.textAlign || "center"};

  * {
    color: ${props => colors[props.bgColor === "white" || !props.bgColor ? "gray800" : "white"]};
    text-align: ${props => props.textAlign || "center"};
  }

  .tile-img {
    height: 100%;
    position: absolute !important;
    width: 100%;
  }

  .tile-button {
    background-color: ${props => colors[props.bgColor == "white" ? "gray800" : "white"]};
    color: ${props => colors[props.bgColor == "white" ? "white" : "gray800"]};
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
    position: relative;
  }
`

const FeaturedWrapper = styled(Wrapper)`
  height: 56.3rem;
  width: 100%;

  .tile-text {
    bottom: 5rem;
    left: ${props => (props.textAlign !== "right" ? "1rem" : "auto")};
    position: absolute;
    right: ${props => (props.textAlign === "right" ? "1rem" : "auto")};

    &,
    *:not(a) {
      color: ${props => colors.white};
      text-align: ${props => (props.textAlign === "right" ? "right" : "left")};
    }
  }
`

class Tile extends React.Component {
  wrapperTagName() {
    if (this.props.solo) return SoloWrapper
    return this.props.featured ? FeaturedWrapper : TileWrapper
  }

  render() {
    const WrapperTagName = this.wrapperTagName()
    return (
      <WrapperTagName
        bgColor={this.props.background_color}
        textAlign={this.props.text_align}
        width={this.props.width}
      >
        {this.props.image && <Img className="tile-img" fluid={this.props.image.fluid} />}
        {this.props.body && (
          <div className="tile-text">
            <div>
              <HTML field={this.props.body} />
              {this.props.button_label && this.props.button_url && (
                <Button className="tile-button" to={this.props.button_url} color="white">
                  {this.props.button_label}
                </Button>
              )}
            </div>
          </div>
        )}
      </WrapperTagName>
    )
  }
}

Tile.propTypes = {
  background_color: PropTypes.string,
  body: PropTypes.object,
  button_label: PropTypes.string,
  button_url: PropTypes.string,
  featured: PropTypes.bool,
  idx: PropTypes.number,
  image: PropTypes.object,
  solo: PropTypes.bool,
  text_align: PropTypes.string,
  width: PropTypes.string,
}

Tile.defaultProps = {
  featured: false,
  solo: false,
  text_align: "center",
}

export default Tile

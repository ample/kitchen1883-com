import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

import HTML from "../utilities/html"

const Wrapper = styled.div`
  position: relative;
  text-align: ${props => props.textAlign || "center"};

  * {
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
  return (
    <WrapperTagName width={props.width} textAlign={props.text_align}>
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

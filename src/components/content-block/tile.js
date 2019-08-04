import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

import HTML from "../utilities/html"

const Wrapper = styled.div`
  position: relative;
  text-align: ${props => props.textAlign};

  * {
    text-align: ${props => props.textAlign};
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

// TODO: If image is first and text second, then image should be 75% and text
// should be 25%. Should that be handled by the blocks wrapper?

const TileWrapper = styled(Wrapper)`
  height: 56.3rem;
  width: ${props => ((props.count == 3 && props.idx == 0) || props.count == 2 ? "50%" : "25%")};

  .tile-text {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 4rem;
  }
`

const Tile = props => {
  const WrapperTagName = props.count > 1 ? TileWrapper : SoloWrapper
  return (
    <WrapperTagName count={props.count} idx={props.idx} textAlign={props.text_align}>
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
  count: PropTypes.number,
  idx: PropTypes.number,
  image: PropTypes.object,
  text_align: PropTypes.string,
}

Tile.defaultProps = {
  text_align: "center",
}

export default Tile

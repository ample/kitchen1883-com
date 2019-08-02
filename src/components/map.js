import React from "react"
import GoogleMapReact from "google-map-react"
import SVG from "react-inlinesvg"
import GooglePin from "../images/icons/google-pin.svg"
import styled from "styled-components"
import * as g from "./global"

const StyledMap = styled.div`
height: ${props => props.size}
width: ${props => props.shape}

@media ${g.screen.max.sm} {
  width: 100%
}

`

const Pin = () => {
  return (
    <div>
      <SVG src={GooglePin} />
    </div>
  )
}

const Map = props => {

  const sizeOptions = {
    default: {
      height: 41.2,
    }
  }

  const size = `${
    Object.keys(sizeOptions).includes(props.size)
      ? sizeOptions[props.size].height
      : sizeOptions.default.height
  }rem`

  const shape = `${props.shape == 'rectangle' ? sizeOptions.default.height * 2 : sizeOptions.default.height}rem`

  return (
    <StyledMap size={size} shape={shape}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.STORYBOOK_GOOGLE_MAPS_KEY || process.env.GATSBY_GOOGLE_MAPS_KEY,
        }}
        defaultCenter={{
          lat: props.lat,
          lng: props.lng,
        }}
        defaultZoom={props.zoom}
      >
        <Pin lat={props.lat} lng={props.lng} />
      </GoogleMapReact>
    </StyledMap>
  )
}

Map.defaultProps = {
  size: "default",
  shape: "square",
  lat: 38.9620796,
  lng: -84.6784822,
  zoom: 15,
}

export default Map

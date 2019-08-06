import React from "react"
import GoogleMapReact from "google-map-react"
import SVG from "react-inlinesvg"
import GooglePin from "../images/icons/google-pin.svg"
import styled from "styled-components"
import * as g from "./global"

const StyledMap = styled.div`
  height: 100%;
  width: 100%;
`

const Pin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29px"
    height="40px"
    viewBox="0 0 29 40"
    version="1.1"
  >
    <title>Pin</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g
        id="map-marker"
        transform="translate(-10.000000, -4.000000)"
        fill-rule="nonzero"
        fill="#807F21"
      >
        <path
          d="M26.8719186,40.7769517 C26.3239679,41.554865 25.8150151,42.2629483 25.3580069,42.8876283 C25.0831397,43.2633417 24.8861802,43.528405 24.7800869,43.669225 C24.4478107,44.1102583 23.7874835,44.1102583 23.4552072,43.669225 C23.3491139,43.528405 23.1521545,43.2633417 22.8772872,42.8876283 C22.420279,42.2629483 21.9113262,41.554865 21.3633755,40.7769517 C19.7978547,38.55442 18.2322807,36.21613 16.7699698,33.8699833 C15.8285487,32.3595583 14.9601971,30.89323 14.1800177,29.4865283 C11.5071718,24.667255 10,20.8150833 10,18.1666667 C10,10.3426333 16.3206865,4 24.1176471,4 C31.9146076,4 38.2352941,10.3426333 38.2352941,18.1666667 C38.2352941,20.8150833 36.7281224,24.667255 34.0552764,29.4865283 C33.275097,30.89323 32.4067455,32.3595583 31.4653243,33.8699833 C30.0030134,36.21613 28.4374394,38.55442 26.8719186,40.7769517 Z M24.1176471,22.3333333 C27.3281611,22.3333333 29.9307958,19.7216617 29.9307958,16.5 C29.9307958,13.2783383 27.3281611,10.6666667 24.1176471,10.6666667 C20.907133,10.6666667 18.3044983,13.2783383 18.3044983,16.5 C18.3044983,19.7216617 20.907133,22.3333333 24.1176471,22.3333333 Z"
          id="Shape"
        />
      </g>
    </g>
  </svg>
)

const Map = props => (
  <StyledMap>
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

Map.defaultProps = {
  lat: 38.9620796,
  lng: -84.6784822,
  zoom: 15,
}

export default Map

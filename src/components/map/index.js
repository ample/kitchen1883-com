import React from "react"
import GoogleMapReact from "google-map-react"
import SVG from "react-inlinesvg"
import styled from "styled-components"
import PropTypes from "prop-types"

import GooglePin from "../../images/icons/google-pin.svg"
import mapOptions from "./options"

const StyledMap = styled.div`
  height: 100%;
  width: 100%;
`

const Pin = () => <SVG src={GooglePin} />

const Map = props => (
  <StyledMap>
    <GoogleMapReact
      options={mapOptions}
      bootstrapURLKeys={{
        key: process.env.GATSBY_GOOGLE_MAPS_KEY || process.env.STORYBOOK_GOOGLE_MAPS_KEY,
      }}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
      defaultZoom={props.zoom || 15}
    >
      <Pin lat={props.lat} lng={props.lng} />
    </GoogleMapReact>
  </StyledMap>
)

Map.defaultProps = {
  zoom: 15,
}

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
}

export default Map

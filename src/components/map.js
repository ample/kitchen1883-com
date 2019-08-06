import React from "react"
import GoogleMapReact from "google-map-react"
import SVG from "react-inlinesvg"
import GooglePin from "../images/icons/google-pin.svg"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledMap = styled.div`
  height: 100%;
  width: 100%;
`

const mapOptions = {
  styles: [{
    'elementType': 'geometry',
    'stylers': [ { 'color': '#f5f5f5' } ]
  },
  {
    'elementType': 'labels.icon',
    'stylers': [ { 'visibility': 'off' } ]
  },
  {
    'elementType': 'labels.text.fill',
    'stylers': [ { 'color': '#616161' } ]
  },
  {
    'elementType': 'labels.text.stroke',
    'stylers': [ { 'color': '#f5f5f5' } ]
  },
  {
    'featureType': 'administrative.land_parcel',
    'elementType': 'labels.text.fill',
    'stylers': [ { 'color': '#bdbdbd' } ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry',
    'stylers': [ { 'color': '#eeeeee' } ]
  },
  {
    'featureType': 'poi',
    'elementType': 'labels.text.fill',
    'stylers': [ { 'color': '#757575' } ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [ { 'color': '#e5e5e5' } ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels.text.fill',
    'stylers': [ { 'color': '#9e9e9e' } ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry',
    'stylers': [ { 'color': '#ffffff' } ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'labels.text.fill',
    'stylers': [ { 'color': '#757575' } ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [ { 'color': '#dadada' } ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'labels.text.fill',
    'stylers': [ { 'color': '#616161' } ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels.text.fill',
    'stylers': [ { 'color': '#9e9e9e' } ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'geometry',
    'stylers': [ { 'color': '#e5e5e5' } ]
  },
  {
    'featureType': 'transit.station',
    'elementType': 'geometry',
    'stylers': [ { 'color': '#eeeeee' } ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [ { 'color': '#c9c9c9' } ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.fill',
    'stylers': [ { 'color': '#9e9e9e' } ]
  }]
}

const Pin = () => {
  return (
    <div>
      <SVG src={GooglePin} />
    </div>
  )
}

const Map = props => {
  return (
    <StyledMap>
      <GoogleMapReact
        options={mapOptions}
        bootstrapURLKeys={{
          key: process.env.STORYBOOK_GOOGLE_MAPS_KEY || process.env.GATSBY_GOOGLE_MAPS_KEY,
        }}
        defaultCenter={{
          lat: props.lat,
          lng: props.lng,
        }}
        defaultZoom={props.zoom}
      >
        <Pin lat={props.lat} lng={props.lng}/>
      </GoogleMapReact>
    </StyledMap>
  )
}

Map.defaultProps = {
  zoom: 15
}

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
}

export default Map

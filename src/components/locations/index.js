import React from "react"
import PropTypes from "prop-types"

import HasMaps from "./has-maps"
import NoMaps from "./no-maps"

const Locations = props => {
  return props.show_maps ? <HasMaps {...props} /> : <NoMaps {...props} />
}

Locations.propTypes = {
  background_color: PropTypes.string,
  label: PropTypes.string,
  locations: PropTypes.array,
  show_maps: PropTypes.bool,
}

export default Locations

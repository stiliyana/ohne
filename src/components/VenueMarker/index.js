import React from "react"
import PropTypes from 'prop-types'
import { Marker } from 'react-map-gl'

import bar from './assets/bar.svg'
import restaurant from './assets/restaurant.svg'
import pizza from './assets/pizza.svg'
import cafe from './assets/cafe.svg'
import bakery from './assets/bakery.svg'

const VenueMarker = ({ info, index, onClick, classes }) => {
  const icons = {
    'cafe': cafe,
    'bakery': bakery,
    'bar': bar,
    'restaurant': restaurant,
    'pizza': pizza
  }

  return (
    <Marker
      key={`marker-${index}`}
      longitude={info.longitude}
      latitude={info.latitude}
    >
      <img src={icons[info.type]} alt={info.type} onClick={onClick} />
    </Marker>
  )
}

VenueMarker.propTypes = {
  index: PropTypes.number.isRequired,
  info: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
}


export default VenueMarker

import React from 'react'
import PropTypes from 'prop-types'
import { Marker } from 'react-map-gl'

import bar from './assets/bar.svg'
import restaurant from './assets/restaurant.svg'
import pizza from './assets/pizza.svg'
import cafe from './assets/cafe.svg'
import bakery from './assets/bakery.svg'
import icecream from './assets/ice-cream.svg'

const VenueMarker = ({
  info, index, onClick
}) => {
  const icons = {
    cafe,
    bakery,
    bar,
    restaurant,
    pizza,
    icecream
  }

  return (
    <Marker
      key={`marker-${index}`}
      longitude={info.longitude}
      latitude={info.latitude}
    >
      <img src={icons[info.type.replace('-', '')]} alt={info.type} onClick={onClick} onKeyPress={onClick} role="presentation" />
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

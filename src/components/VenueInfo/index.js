import React from "react"
import PropTypes from 'prop-types'

import Headline from '../../typography/Headline'
import Body from '../../typography/Body'
import Link from '../../typography/Link'
import injectSheet from 'react-jss'
import styles from './styles'

const _VenueInfo = ({ info, classes }) =>
  <div className={classes.root}>
    <Headline size="small" margin={{ bottom: 15 }} color="brand">{info.name}</Headline>
    <Body size="small" margin={{ bottom: 20 }} color="light">{info.address}</Body>
    {
      info.description && (
        <Body size="small" margin={{ bottom: 20 }}>{info.description}</Body>
      )
    }
    <Link href={info.website} margin={{ bottom: 7 }}>Website</Link>
    { info.phone && (
      <Link href={`tel:${info.phone}`}>{info.phone}</Link>
    )}
  </div>

_VenueInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    address: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    phone: PropTypes.string,
    website: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
}


const VenueInfo = injectSheet(styles)(_VenueInfo)
export default VenueInfo

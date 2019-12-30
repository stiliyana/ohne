import React from "react"
import PropTypes from 'prop-types'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import Headline from '../../typography/Headline'
import Body from '../../typography/Body'
import Link from '../../typography/Link'
import DisplayOnlyWhen from '../DisplayOnlyWhen'
import HideButton from '../HideButton'
import injectSheet from 'react-jss'
import styles from './styles'

const getScaleString = scale => {
  if (scale === '1') {
    return '1 - Coeliac Dedicated'
  }
  return '2 - Gluten Friendly'
}

const _VenueInfo = ({ info, classes, onClose }) =>
  <div className={classes.root}>
    <div className={classes.titleContainer}>
      <DisplayOnlyWhen device="mobile">
        <HideButton onClick={onClose} />
      </DisplayOnlyWhen>
      <Headline size="small" color="brand">{info.name}</Headline>
    </div>
    {info.scale && (
      <AnchorLink style={{ color: 'inherit', textDecoration: 'none' }} offset='85' href="#gluten-scale">
        <Body size="small" margin={{ bottom: 20 }} color="light">{getScaleString(info.scale)}</Body>
      </AnchorLink>
    )}
    {
      info.description && (
        <Body size="small" margin={{ bottom: 20 }}>{info.description}</Body>
      )
    }
    {
      info.address && (
        <Link href={`https://www.google.com/maps/place/${info.address}`} margin={{ bottom: 7 }}>{info.address}</Link>
      )
    }
    {
      info.website && (
        <Link href={info.website} margin={{ bottom: 7 }}>Website</Link>
      )
    }
    { info.phone && (
      <Link href={`tel:${info.phone}`}>{info.phone}</Link>
    )}
  </div>

_VenueInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
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

import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Headline from '../../typography/Headline'
import Body from '../../typography/Body'
import DisplayOnlyWhen from '../DisplayOnlyWhen'
import styles from './styles'
import clearIcon from './assets/clear.svg'

const types = [
  "bakery",
  "bar",
  "cafe",
  "restaurant",
  "pizza",
  "ice cream"
]

const _Filter = ({ classes, selectedVenueType, onCheckboxSelect, onFilterClear }) => (
  <div className={classes.root}>
    <DisplayOnlyWhen device="desktop">
      <Headline size="small" color="brand" margin={{ bottom: 24 }}>Filters</Headline>
    </DisplayOnlyWhen>
    <div>
    { types.map(type => (
      <label className={classes.checkboxContainer} key={`checkbox-${type}`}>
        <input
          className={classes.checkbox}
          type="checkbox"
          name={type}
          value={type}
          checked={selectedVenueType === type}
          onChange={onCheckboxSelect}
        />
        <span className={classes.label}>{type}</span>
      </label>
    ))}
    </div>
    <div className={classes.clearContainer} onClick={onFilterClear} role="button">
      <img src={clearIcon} className={classes.clearIcon} alt="clear all" />
      <Body size="small" component="span" color="light">clear filters</Body>
    </div>
  </div>
)

_Filter.defaultProps = {
  selectedVenueType: null
}

_Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedVenueType: PropTypes.string,
  onCheckboxSelect: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired
}


const Filter = injectSheet(styles)(_Filter)
export default Filter

import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Headline from '../../typography/Headline'
import Body from '../../typography/Body'
import DisplayOnlyWhen from '../DisplayOnlyWhen'
import styles from './styles'
import clearIcon from './assets/clear.svg'

const scale = [
  "coeliac-dedicated",
  "gluten-friendly"
]

const types = [
  "bakery",
  "bar",
  "cafe",
  "ice-cream",
  "restaurant",
  "pizza"
]

const _Filter = ({ classes, selectedVenueType, onTypeCheckboxSelect, onScaleCheckboxSelect, onFilterClear }) => (
  <div className={classes.root}>
    <DisplayOnlyWhen device="desktop">
      <Headline size="small" color="brand" margin={{ bottom: 24 }}>Filters</Headline>
    </DisplayOnlyWhen>
    <div>
    { scale.map(s => (
      <label className={classes.checkboxContainer} key={`checkbox-${s}`}>
        <input
          className={classes.checkbox}
          type="checkbox"
          name={s}
          value={s}
          checked={selectedVenueType === s}
          onChange={onScaleCheckboxSelect}
        />
        <span className={classes.label}>{s.replace('-', ' ')}</span>
      </label>
    ))}
    { types.map(type => (
      <label className={classes.checkboxContainer} key={`checkbox-${type}`}>
        <input
          className={classes.checkbox}
          type="checkbox"
          name={type}
          value={type}
          checked={selectedVenueType === type}
          onChange={onTypeCheckboxSelect}
        />
        <span className={classes.label}>{type.replace('-', ' ')}</span>
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
  onTypeCheckboxSelect: PropTypes.func.isRequired,
  onScaleCheckboxSelect: PropTypes.func.isRequired,
  onFilterClear: PropTypes.func.isRequired
}


const Filter = injectSheet(styles)(_Filter)
export default Filter

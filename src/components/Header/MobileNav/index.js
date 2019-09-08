import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { CSSTransition } from 'react-transition-group'

import IconButton from '../../IconButton'
import NavLink from '../../NavLink'
import Filter from '../../Filter'
import icon from '../assets/filter-icon.svg'
import styles from './styles'

const _MobileNav = ({ classes, show, onHide, onFilterClear, selectedVenueType, onCheckboxSelect }) => (
  <CSSTransition
    in={show}
    classNames={{
      enter: classes.navEnter,
      enterDone: classes.navEnterDone,
      exit: classes.navExit,
      exitDone: classes.navExitActive
    }}
    timeout={0}
  >
    <div className={classes.mobileNav}>
      <div className={classes.closeMobileNav}>
        <IconButton onClick={onHide}>
          <img src={icon} alt="filter" />
        </IconButton>
      </div>
      <div className={classes.mobileNavLinks}>
        <NavLink href="#map" onClick={onHide}>map</NavLink>
        <NavLink href="#about" onClick={onHide}>about us</NavLink>
        <NavLink href="#contact" onClick={onHide}>contact</NavLink>
      </div>
      <Filter
        onFilterClear={onFilterClear}
        selectedVenueType={selectedVenueType}
        onCheckboxSelect={onCheckboxSelect}
      />
    </div>
  </CSSTransition>
)

_MobileNav.defaultProps = {
  selectedVenueType: null
}

_MobileNav.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedVenueType: PropTypes.string,
  onFilterClear: PropTypes.func.isRequired,
  onCheckboxSelect: PropTypes.func.isRequired,
  isFilterOpen: PropTypes.bool.isRequired,
}

const MobileNav = injectSheet(styles)(_MobileNav)
export default MobileNav

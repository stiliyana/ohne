import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import IconButton from '../../IconButton'
import NavLink from '../../NavLink'
import icon from '../assets/filter-icon.svg'
import styles from './styles'

const _DesktopNav = ({ classes, onFilterToggle }) => (
  <>
    <div className={classes.linksContainer}>
      <NavLink href="#map">map</NavLink>
      <NavLink href="#about">about us</NavLink>
      <NavLink href="#contact">contact</NavLink>
    </div>
    <div className={classes.filterContainer}>
      <IconButton onClick={onFilterToggle}>
        <img src={icon} alt="filter" />
      </IconButton>
    </div>
  </>
)

_DesktopNav.propTypes = {
  classes: PropTypes.object.isRequired,
  onFilterToggle: PropTypes.func.isRequired
}

const DesktopNav = injectSheet(styles)(_DesktopNav)
export default DesktopNav

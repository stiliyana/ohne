import React, { useState } from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Body from '../../typography/Body'
import Headline from '../../typography/Headline'
import IconButton from '../IconButton'
import Filter from '../Filter'
import DisplayOnlyWhen from '../DisplayOnlyWhen'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import icon from './assets/filter-icon.svg'
import styles from './styles'

const _Header = ({ classes, selectedVenueType, onCheckboxSelect, onFilterClear, isFilterOpen, onFilterToggle }) => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const _handleHideMobileNav = () => {
    setShowMobileNav(false)
  }

  const _handleMobileFilterClear = () => {
    onFilterClear()
    _handleHideMobileNav()
  }

  const _handleMobileCheckboxSelect = (e) => {
    onCheckboxSelect(e)
    _handleHideMobileNav()
  }

  return (
    <header className={classes.nav}>
      <div className={classes.container}>
        <DisplayOnlyWhen device="mobile">
          <MobileNav
            show={showMobileNav}
            onHide={_handleHideMobileNav}
            onFilterClear={_handleMobileFilterClear}
            onCheckboxSelect={_handleMobileCheckboxSelect}
            selectedVenueType={selectedVenueType}
          />
        </DisplayOnlyWhen>
        <div className={classes.hamburger}>
          <IconButton onClick={() => setShowMobileNav(true)}>
            <img src={icon} alt="filter" />
          </IconButton>
        </div>
        <div className={classes.brandContainer}>
          <Headline size="large">OHNE</Headline>
          <Body className={classes.brandDescription} size="default" color="brand">a gluten free map</Body>
        </div>
        <DisplayOnlyWhen device="desktop">
          <DesktopNav onFilterToggle={onFilterToggle} />
          {
            isFilterOpen && (
              <Filter
                onFilterClear={onFilterClear}
                selectedVenueType={selectedVenueType}
                onCheckboxSelect={onCheckboxSelect}
              />
            )
          }
        </DisplayOnlyWhen>
      </div>
    </header>
  )
}

_Header.defaultProps = {
  selectedVenueType: null
}

_Header.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedVenueType: PropTypes.string,
  onFilterClear: PropTypes.func.isRequired,
  onCheckboxSelect: PropTypes.func.isRequired,
  isFilterOpen: PropTypes.bool.isRequired,
  onFilterToggle: PropTypes.func.isRequired
}

const Header = injectSheet(styles)(_Header)
export default Header

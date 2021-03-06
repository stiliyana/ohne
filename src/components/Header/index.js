import React, { useState } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Body from '../../typography/Body'
import Headline from '../../typography/Headline'
import IconButton from '../IconButton'
import Filter from '../Filter'
import DisplayOnlyWhen from '../DisplayOnlyWhen'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import hamburger from './assets/hamburger.svg'
import styles from './styles'

const _Header = ({
  classes,
  selectedVenueType,
  onTypeCheckboxSelect,
  onScaleCheckboxSelect,
  onFilterClear,
  isFilterOpen,
  onFilterToggle
}) => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const _handleHideMobileNav = () => {
    setShowMobileNav(false)
  }

  const _handleMobileFilterClear = () => {
    onFilterClear()
    _handleHideMobileNav()
  }

  const _handleMobileTypeCheckboxSelect = e => {
    onTypeCheckboxSelect(e)
    _handleHideMobileNav()
  }

  const _handleMobileScaleCheckboxSelect = e => {
    onScaleCheckboxSelect(e)
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
            onTypeCheckboxSelect={_handleMobileTypeCheckboxSelect}
            onScaleCheckboxSelect={_handleMobileScaleCheckboxSelect}
            selectedVenueType={selectedVenueType}
          />
        </DisplayOnlyWhen>
        <div className={classes.hamburger}>
          <IconButton onClick={() => setShowMobileNav(true)}>
            <img src={hamburger} alt="filter" />
          </IconButton>
        </div>
        <div className={classes.brandContainer}>
          <Headline size="large" color="brand">OHNE</Headline>
          <Body className={classes.brandDescription} size="large">a gluten free map</Body>
        </div>
        <DisplayOnlyWhen device="desktop">
          <DesktopNav onFilterToggle={onFilterToggle} />
          {
            isFilterOpen && (
              <Filter
                onFilterClear={onFilterClear}
                selectedVenueType={selectedVenueType}
                onTypeCheckboxSelect={onTypeCheckboxSelect}
                onScaleCheckboxSelect={onScaleCheckboxSelect}
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
  onTypeCheckboxSelect: PropTypes.func.isRequired,
  onScaleCheckboxSelect: PropTypes.func.isRequired,
  isFilterOpen: PropTypes.bool.isRequired,
  onFilterToggle: PropTypes.func.isRequired
}

const Header = injectSheet(styles)(_Header)
export default Header

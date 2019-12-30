import React, { Component } from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import ReactMapGL, { Popup, NavigationControl } from 'react-map-gl'
import VenueInfo from '../VenueInfo'
import VenueMarker from '../VenueMarker'

import styles from './styles'

class _Map extends Component {
  state = {
    viewport: {
      latitude: 52.5200,
      longitude: 13.4050,
      zoom: 11,
      bearing: 0,
      pitch: 0
    },
    popupInfo: null
  };

  componentDidUpdate(prevProps) {
    if (prevProps.venues !== this.props.venues) {
      this.setState({
        popupInfo: null
      })
    }
  }

  _updateViewport = viewport => {
    this.setState({ viewport })
  }

  _setPopupInfo = venue => {
    if (this.state.popupInfo !== null && this.state.popupInfo.name === venue.name) {
      this.setState({ popupInfo: null })
    } else {
      this.setState({
        popupInfo: venue
      })
    }
  }

  _renderVenueMarker = (venue, index) => {
    return (
      <VenueMarker
        key={index}
        info={venue}
        index={index}
        onClick={() => this._setPopupInfo(venue)}
      />
    );
  }

  _renderPopup() {
    const { popupInfo } = this.state
    const { selectedVenueType } = this.props

    return popupInfo && (!selectedVenueType || popupInfo.type === selectedVenueType) && (
      <Popup
        className={this.props.classes.popup}
        anchor="top"
        offsetTop={10}
        offsetLeft={10}
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        closeOnClick={true}
      >
        <VenueInfo info={popupInfo} />
      </Popup>
    );
  }

  _removePopup = () => {
    this.setState({ popupInfo: null })
  }

  render() {
    const { viewport } = this.state
    const { classes, venues } = this.props

    return (
      <div className={classes.root} id="map">
        <ReactMapGL
          {...viewport}
          scrollZoom={false}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          width="100%"
          height="100%"
          onViewportChange={this._updateViewport}
          onClick={this._removePopup}
          touchAction="pan-y"
        >
          <NavigationControl
            className={classes.controls}
            onViewportChange={this._updateViewport}
            showCompass={false}
          />
          { venues.length > 0 && venues.map(this._renderVenueMarker) }
          { this._renderPopup() }
        </ReactMapGL>
      </div>
    );
  }
}

_Map.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedVenueType: PropTypes.string,
  venues: PropTypes.arrayOf(PropTypes.object).isRequired
}


const Map = injectSheet(styles)(_Map)
export default Map

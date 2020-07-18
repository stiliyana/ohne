import React, { Component } from "react"
import Layout from "./components/Layout"
import Header from "./components/Header"
import About from "./components/About"
import GlutenScale from "./components/GlutenScale"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Map from "./components/Map"
import Tabletop from 'tabletop'

class App extends Component {
  state = {
    selectedVenueType: null,
    filteredVenues: [],
    isFilterOpen: true
  }

  venues = []

  componentDidMount() {
    window.addEventListener('scroll', this._handleScroll)
    this._getVenues()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll)
  }

  _getVenues = () => {
    Tabletop.init({
      key: process.env.REACT_APP_SHEETS_KEY,
      simpleSheet: true,
      callback: (data, tabletop) => {
        const mappedVenues = data.map(venue => (
          { ...venue, latitude: Number(venue.latitude), longitude: Number(venue.longitude)}
        )).filter(venue => venue.description !== "")
        this.setState({
          filteredVenues: mappedVenues
        })
        this.venues = mappedVenues
      }
    })
  }

  _handleScroll = event => {
    if (window.scrollY > window.innerHeight) {
      this.setState({
        isFilterOpen: false
      })
    }

  }

  _handleFilterToggle = () => {
    this.setState({
      isFilterOpen: !this.state.isFilterOpen
    })
  }

  _handleSelectVenueType = (event) => {
    this.setState({
      selectedVenueType: event.target.value,
      filteredVenues: this.venues.filter(v => v.type === event.target.value)
    })
  }

  _handleSelectVenueScale = (event) => {
    const scaleMap = {
      "coeliac-dedicated": "1",
      "gluten-friendly": "2"
    }
    this.setState({
      selectedVenueType: event.target.value,
      filteredVenues: this.venues.filter(v => v.scale === scaleMap[event.target.value])
    })
  }

  _handleFilterClear = () => {
    this.setState({
      selectedVenueType: null,
      filteredVenues: this.venues
    })
  }

  render() {
    return (
      <Layout>
        <Header
          onTypeCheckboxSelect={this._handleSelectVenueType}
          onScaleCheckboxSelect={this._handleSelectVenueScale}
          selectedVenueType={this.state.selectedVenueType}
          isFilterOpen={this.state.isFilterOpen}
          onFilterToggle={this._handleFilterToggle}
          onFilterClear={this._handleFilterClear}
        />
        <Map venues={this.state.filteredVenues} selectedVenueType={this.state.selectedVenueType} />
        <GlutenScale />
        <About />
        <Contact />
        <Footer />
      </Layout>
    )
  }
}

export default App

import { Component } from 'react'
import PropTypes from 'prop-types'

export default class DisplayOnlyWhen extends Component {
  state = {
    show: false
  }

  componentDidMount() {
    this.mediaQuery = window.matchMedia(this.buildQuery())
    this.mediaQuery.addListener(this.onMatch)
    this.onMatch(this.mediaQuery)
  }

  componentWillUnmount() {
    if (this.mediaQuery) {
      this.mediaQuery.removeListener(this.onMatch)
    }
  }

  onMatch = mediaQuery => {
    const show = !!mediaQuery.matches
    this.setState({ show })
  }

  buildQuery = () => {
    const { device } = this.props
    if (device === 'mobile') {
      return `(max-width: ${992 - 1}px)`
    }
    return `(min-width: ${992}px)`
  }

  render() {
    if (!this.state.show) return null
    return this.props.children
  }
}

DisplayOnlyWhen.propTypes = {
  children: PropTypes.node.isRequired,
  device: PropTypes.oneOf(['desktop', 'mobile']).isRequired
}

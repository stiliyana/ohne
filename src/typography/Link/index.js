import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styles from './styles'

const _Link = ({ children, href, classes }) =>
  <a className={classes.root} target="_blank" href={href} rel="noopener noreferrer">
    { children }
  </a>

_Link.defaultProps = {
  margin: 0
}

_Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      bottom: PropTypes.number,
      left: PropTypes.number,
      right: PropTypes.number,
      top: PropTypes.number
    })
  ])
}


const Link = injectSheet(styles)(_Link)
export default Link

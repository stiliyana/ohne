import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styles from './styles'

const _Link = ({ children, href, classes }) => (
  <a className={classes.root} target="_blank" rel="noreferrer" href={href} rel="noopener noreferrer">
    { children }
  </a>
)

_Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}

const Link = injectSheet(styles)(_Link)
export default Link

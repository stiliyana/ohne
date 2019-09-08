import React from "react"
import PropTypes from 'prop-types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import injectSheet from 'react-jss'
import styles from './styles'

const _NavLink = ({ children, href, onClick, classes }) =>
  <AnchorLink offset='85' className={classes.root} href={href} onClick={onClick}>
    { children }
  </AnchorLink>

_NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  classes: PropTypes.object.isRequired
}


const NavLink = injectSheet(styles)(_NavLink)
export default NavLink

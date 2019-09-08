import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import styles from './styles'
import './global.css'
import './font.css'

const _Layout = ({ classes, children }) => (
  <div className={classes.root}>
    {children}
  </div>
)

_Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}


const Layout = injectSheet(styles)(_Layout)
export default Layout

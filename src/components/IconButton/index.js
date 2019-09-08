import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import styles from './styles'

const _IconButton = ({ classes, children, onClick }) => (
  <button className={classes.button} onClick={onClick}>
    {children}
  </button>
)

_IconButton.defaultProps = {
  onClick: null
}

_IconButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}


const IconButton = injectSheet(styles)(_IconButton)
export default IconButton

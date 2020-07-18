import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styles from './styles'
import hideIcon from './assets/hide.svg'

const HideButton = ({ classes, onClick }) => (
  <button className={classes.hide} onClick={onClick} type="button">
    hide
    <img alt="hide" src={hideIcon} />
  </button>
)

HideButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default injectSheet(styles)(HideButton)

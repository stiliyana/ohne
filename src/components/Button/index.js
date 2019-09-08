import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styles from './styles'

const _Button = ({ classes, src, title, onClick }) => (
  <button onClick={onClick} className={classes.button}>
    <img src={src} alt={title} />
    <p className={classes.label}>{title}</p>
  </button>
)

_Button.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}


const Button = injectSheet(styles)(_Button)
export default Button

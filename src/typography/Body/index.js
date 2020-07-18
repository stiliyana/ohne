import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import styles from './styles'

const _Body = ({ children, className, size, color, uppercase, classes }) => {
  const bodyClassName = classNames(className, classes.root, {
    [classes[`color--${color}`]]: true,
    [classes[`size--${size}`]]: true,
    [classes.uppercase]: uppercase
  })

  return (
    <p className={bodyClassName}>
      { children }
    </p>
  )
}

_Body.defaultProps = {
  size: "default",
  color: "default",
  margin: 0,
  className: null,
  uppercase: false
}

_Body.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  color: PropTypes.oneOf(["default", "light", "brand"]),
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      bottom: PropTypes.number,
      left: PropTypes.number,
      right: PropTypes.number,
      top: PropTypes.number
    })
  ]),
  uppercase: PropTypes.bool
}


const Body = injectSheet(styles)(_Body)
export default Body

import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import styles from './styles'

const _Headline = ({
  children, className, size, color, classes
}) => {
  const headlineClassName = classNames(className, classes.root, {
    [classes[`color--${color}`]]: true,
    [classes[`size--${size}`]]: true
  })

  return (
    <h1 className={headlineClassName}>
      { children }
    </h1>
  )
}

_Headline.defaultProps = {
  size: 'default',
  color: 'default',
  className: null
}

_Headline.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
  color: PropTypes.oneOf(['default', 'light', 'brand']),
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

const Headline = injectSheet(styles)(_Headline)
export default Headline

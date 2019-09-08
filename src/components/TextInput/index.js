import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import styles from './styles'

const _TextInput = ({ classes }) => (
  <input></input>
)

_TextInput.defaultProps = {
  onClick: null
}

_TextInput.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}


const TextInput = injectSheet(styles)(_TextInput)
export default TextInput

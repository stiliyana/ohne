import React from "react"
import PropTypes from 'prop-types'
import Body from '../../typography/Body'
import injectSheet from 'react-jss'
import styles from './styles'

const ButtonCard = ({ classes, iconSrc, title, description, onClick }) => (
  <button onClick={onClick} className={classes.button}>
    <img src={iconSrc} alt={title} />
    <Body
      uppercase
      color="brand"
      margin={{ bottom: 16 }}
    >
      {title}
    </Body>
    <Body>{description}</Body>
  </button>
)

ButtonCard.propTypes = {
  classes: PropTypes.object.isRequired,
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default injectSheet(styles)(ButtonCard)

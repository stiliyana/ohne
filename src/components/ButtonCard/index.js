import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Body from '../../typography/Body'
import styles from './styles'

const ButtonCard = ({
  classes, iconSrc, title, description, onClick
}) => (
  <button onClick={onClick} className={classes.button} type="button">
    <img src={iconSrc} alt={title} />
    <Body
      uppercase={true}
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

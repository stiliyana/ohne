import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Body from '../../typography/Body'
import Headline from '../../typography/Headline'
import NavLink from '../NavLink'
import instagram from './assets/instagram-icon.svg'
import email from './assets/email-icon.svg'
import styles from './styles'

const _Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <div className={classes.container}>
      <div className={classes.brandContainer}>
        <Headline size="large">OHNE</Headline>
        <Body size="default" color="brand">a gluten free map</Body>
      </div>
      <div className={classes.linksContainer}>
        <NavLink href="#map">map</NavLink>
        <NavLink href="#about">about us</NavLink>
        <NavLink href="#contact">contact</NavLink>
      </div>
      <div className={classes.socialContainer}>
        <a href="mailto:emmeline@email.com" target="_blank" rel="noopener noreferrer">
          <img src={email} alt="email" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  </footer>
)

_Footer.propTypes = {
  classes: PropTypes.object.isRequired
}


const Footer = injectSheet(styles)(_Footer)
export default Footer

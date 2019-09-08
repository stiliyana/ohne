import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Body from '../../typography/Body'
import Headline from '../../typography/Headline'
import styles from './styles'

const _About = ({ classes }) => (
  <section className={classes.root} id='about'>
    <Headline color="brand" className={classes.headline}>About us</Headline>
    <Body className={classes.body}>Ohne is an approach to sharing the scarce gluten free locations within Berlin, in the form of a simple map, as well as hopefully creating awareness to the need and want of more gluten free choices within Berlin. </Body>
    <div className={classes.divider} />
    <Body >The website is run by Emmeline Hubbard.</Body>
    <Body className={classes.body}>Having moved to Berlin in 2016 from London, a city with an abundance of gluten free choice, she found herself searching for a tool that would fill the empty gluten free hole in Berlin. Two years later after discovering these GF locations, she decided to design her own map to help others in need who are visting, have just moved, or are living in Berlin.</Body>
    <Body className={classes.body}>A massive thank you to Stiliyana Yordanova for developing Ohne’s website.</Body>
  </section>
)

_About.propTypes = {
  classes: PropTypes.object.isRequired
}


const About = injectSheet(styles)(_About)
export default About

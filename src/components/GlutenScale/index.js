import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Body from '../../typography/Body'
import Headline from '../../typography/Headline'
import styles from './styles'

const _About = ({ classes }) => (
  <section className={classes.root} id='gluten-scale'>
    <Headline color="brand" className={classes.headline}>Gluten Scale</Headline>
    <Body
      size="small"
      uppercase
      color="brand"
      margin={{ bottom: 12 }}
    >
      1 - Coeliac Dedicated
    </Body>
    <Body className={classes.body}>This represents locations that are 100% dedicated to being entirely gluten free. These standards usually include food that is inherintely gluten free, or is free of gluten-containing grains e.g. wheat, rye, barley, etc.</Body>
    <Body
      size="small"
      uppercase
      color="brand"
      margin={{ bottom: 12 }}
    >
      2 - Gluten Friendly
    </Body>
    <Body className={classes.body}>This is a term used by locations that offer gluten free options which are either made or sold amongst gluten-containing foods. It implies that the food may not be entirely gluten-free because it is prepared in a non-dedicated kitchen and there may be a risk of cross-contamination. However, this can be acceptable for those with mild gluten sensitivities.</Body>
  </section>
)

_About.propTypes = {
  classes: PropTypes.object.isRequired
}


const About = injectSheet(styles)(_About)
export default About

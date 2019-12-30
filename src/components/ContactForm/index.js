import React from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styles from './styles'

const ContactForm = ({ classes }) => (
  <form action={`https://formspree.io/${process.env.REACT_APP_FORM_EMAIL}`} method="POST" className={classes.form}>
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} for="name">Name*</label>
      <input className={classes.input} required type="text" name="name" id="name" />
    </div>
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} for="email">Email*</label>
      <input className={classes.input} required type="email" name="email" id="email" />
    </div>
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} for="message">Message*</label>
      <textarea className={classes.textArea} required type="text" name="message" id="message" />
    </div>
    <input className={classes.submitButton} type="submit" value="okay"/>
  </form>
)

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(ContactForm)

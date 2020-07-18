import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styles from './styles'

const SuggestionForm = ({ classes }) => (
  <form action={`https://formspree.io/${process.env.REACT_APP_FORM_EMAIL}`} method="POST" className={classes.form}>
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} htmlFor="name">Name</label>
      <input className={classes.input} type="text" name="name" id="name" />
    </div>
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} htmlFor="location">Gluten Free Location *</label>
      <input className={classes.input} required={true} type="text" name="gluten free location" id="location" />
    </div>
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} htmlFor="message">Message (optional)</label>
      <textarea className={classes.textArea} type="text" name="message" id="message" />
    </div>
    <input className={classes.submitButton} type="submit" value="okay" />
  </form>
)

SuggestionForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(SuggestionForm)

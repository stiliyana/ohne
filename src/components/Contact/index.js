import React, { useState } from "react"
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'

import Body from '../../typography/Body'
import Headline from '../../typography/Headline'
import SuggestionForm from '../SuggestionForm'
import ContactForm from '../ContactForm'

import ButtonCard from '../ButtonCard'
import styles from './styles'
import contactIcon from './assets/contact.svg'
import suggestIcon from './assets/suggest.svg'

const _Contact = ({ classes }) => {
  const [showContactForm, setShowContactForm] = useState(false)
  const [showSuggestForm, setShowSuggestForm] = useState(false)

  const renderHideButton = onClick => (
    <button className={classes.hide} onClick={onClick}>hide</button>
  )

  const buttonContainerClassName = classNames(classes.buttonsContainer, {
    [classes.buttonsContainerHidden]: showContactForm || showContactForm
  })

  return (
    <section className={classes.root} id='contact'>
      <div className={buttonContainerClassName}>
        <ButtonCard
          onClick={() => setShowSuggestForm(true)}
          iconSrc={suggestIcon}
          title="Suggest a place"
          description="Don’t see your favourite gluten free location on the map? Send us your suggestions and we’ll make sure to add them!"
        />
        <ButtonCard
          onClick={() => setShowContactForm(true)}
          iconSrc={contactIcon}
          title="Contact us"
          description="Drop us a line if you feel like chatting about how we can make Berlin a more gluten free friendly place."

        />
      </div>
      <CSSTransition
        in={showSuggestForm}
        classNames={{
          enter: classes.formEnter,
          enterActive: classes.formEnterDone,
          exit: classes.formExit,
          exitActive: classes.formExitActive
        }}
        unmountOnExit
        timeout={300}
      >
        <div className={classes.slideInContainer}>
          {renderHideButton(() => setShowSuggestForm(false))}
          <Headline margin={{ bottom: 50 }} size="default" color="brand">Have your say</Headline>
          <Body margin={{ bottom: 30 }}>Don’t see your favourite gluten free location on the map? Send us your suggestions below and we’ll make sure to add them!</Body>
          <SuggestionForm />
        </div>
      </CSSTransition>
      <CSSTransition
        in={showContactForm}
        classNames={{
          enter: classes.formEnter,
          enterActive: classes.formEnterDone,
          exit: classes.formExit,
          exitActive: classes.formExitActive
        }}
        unmountOnExit
        timeout={300}
      >
        <div className={classes.slideInContainer}>
          {renderHideButton(() => setShowContactForm(false))}
          <Headline margin={{ bottom: 50 }} size="default" color="brand">Hungry for more?</Headline>
          <Body margin={{ bottom: 30 }}>Drop us a line below if you feel like chatting about how we can make Berlin a more gluten free motherf*cking friendly place.</Body>
          <ContactForm />
        </div>
      </CSSTransition>
    </section>
  )
}

_Contact.propTypes = {
  classes: PropTypes.object.isRequired
}


const Contact = injectSheet(styles)(_Contact)
export default Contact

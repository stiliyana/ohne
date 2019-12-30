import colors from '../../utils/colors'
import { min, max } from '../../utils/breakpoints'

export default {
  root: {
    padding: '0 0 60px',
    maxWidth: 800,
    left: 0,
    right: 0,
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    [`@media(max-width: ${max}px)`]: {
      padding: '0 28px 52px',
      maxWidth: 'auto'
    }
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [`@media(max-width: 620px)`]: {
      flexDirection: 'column'
    }
  },
  formEnter: {
    transform: 'translateX(150%)',
    transition: 'transform 300ms'
  },
  formEnterDone: {
    transform: 'translateX(0)',
    transition: 'transform 300ms'
  },
  formExit: {
    transform: 'translateX(0)',
    transition: 'transform 300ms'
  },
  formExitActive: {
    transform: 'translateX(150%)',
    transition: 'transform 300ms'
  },
  slideInContainer: {
    position: 'relative',
    backgroundColor: 'white',
    [`@media(max-width: 620px)`]: {
      marginTop: -600
    },
    [`@media(min-width: 621px)`]: {
      marginTop: -300
    }
  },
  hide: {
    cursor: 'pointer',
    '-webkit-appearance': 'none',
    backgroundColor: 'unset',
    border: 'none',
    fontFamily: 'brandon-grotesque, sans-serif',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    fontSize: 24,
    color: colors.wafer,
    position: 'absolute',
    right: 0,
    top: 0,
    '&:focus': {
      outline: 'none'
    }
  },
  buttonsContainerHidden: {
    visibility: 'hidden'
  }
}

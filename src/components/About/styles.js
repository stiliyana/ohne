import colors from '../../utils/colors'
import { min, max } from '../../utils/breakpoints'

export default {
  root: {
    padding: '120px 0 60px',
    maxWidth: 800,
    left: 0,
    right: 0,
    margin: 'auto',
    '& > h1': {
      textAlign: 'center'
    },
    [`@media(max-width: ${max}px)`]: {
      padding: '52px 28px',
      maxWidth: 'auto'
    }
  },
  headline: {
    [`@media(max-width: ${max}px)`]: {
      marginBottom: 25
    },
    [`@media(min-width: ${min}px)`]: {
      marginBottom: 50
    },
  },
  body: {
    [`@media(max-width: ${max}px)`]: {
      marginBottom: 20
    },
    [`@media(min-width: ${min}px)`]: {
      marginBottom: 40
    },
  },
  divider: {
    width: 17,
    height: 4,
    backgroundColor: colors.wafer,
    margin: '10px auto 30px'
  }
}

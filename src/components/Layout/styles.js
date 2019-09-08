import { min, max } from '../../utils/breakpoints'

export default {
  root: {
    width: '100%',
    [`@media(max-width: ${max}px)`]: {
      marginTop: 94
    },
    [`@media(min-width: ${min}px)`]: {
      marginTop: 85
    }
  }
}

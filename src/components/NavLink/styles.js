import colors from '../../utils/colors'
import { min, max } from '../../utils/breakpoints'

export default {
  root: {
    fontFamily: 'brandon-grotesque, sans-serif',
    fontWeight: 'bold',
    color: colors.lightGray,
    textDecoration: 'none',
    '&::selection': {
      backgroundColor: colors.wafer
    },
    '&:hover': {
      textDecoration: 'underline'
    },
    [`@media(max-width: ${max}px)`]: {
      fontSize: 16,
      lineHeight: .88,
      textTransform: 'uppercase',
      marginBottom: 30
    },
    [`@media(min-width: ${min}px)`]: {
      fontSize: 24
    }
  }
}

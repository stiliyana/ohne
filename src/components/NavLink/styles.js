import colors from '../../utils/colors'
import { min, max } from '../../utils/breakpoints'

export default {
  root: {
    fontFamily: 'brandon-grotesque, sans-serif',
    fontWeight: 500,
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
      marginBottom: 30
    },
    [`@media(min-width: ${min}px)`]: {
      fontSize: 24
    }
  }
}

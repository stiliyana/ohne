import colors from '../../utils/colors'
import extractMargin from '../../utils/extractMargin'
import { max } from '../../utils/breakpoints'

export default {
  root: {
    fontFamily: 'brandon-grotesque, sans-serif',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textTransform: 'uppercase',
    padding: 0,
    margin: ({ margin }) => extractMargin()(margin),
    marginTop: ({ margin }) => extractMargin('top')(margin),
    marginRight: ({ margin }) => extractMargin('right')(margin),
    marginBottom: ({ margin }) => extractMargin('bottom')(margin),
    marginLeft: ({ margin }) => extractMargin('left')(margin)
  },
  'color--default': {
    color: colors.darkGray,
    '&::selection': {
      backgroundColor: colors.wafer
    }
  },
  'color--light': {
    color: colors.lightGray,
    '&::selection': {
      backgroundColor: colors.wafer
    }
  },
  'color--brand': {
    color: colors.wafer,
    '&::selection': {
      backgroundColor: colors.lightGray
    }
  },
  'size--default': {
    fontSize: 28,
    [`@media(max-width: ${max}px)`]: {
      fontSize: 25
    }
  },
  'size--small': {
    fontSize: 20,
    [`@media(max-width: ${max}px)`]: {
      fontSize: 25
    }
  },
  'size--large': {
    fontSize: 36,
    [`@media(max-width: ${max}px)`]: {
      fontSize: 30
    }
  }
}

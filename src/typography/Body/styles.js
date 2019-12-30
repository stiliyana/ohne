import colors from '../../utils/colors'
import extractMargin from '../../utils/extractMargin'
import { max } from '../../utils/breakpoints'

export default {
  root: {
    fontFamily: 'brandon-grotesque, sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
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
    fontSize: 16,
    [`@media(max-width: ${max}px)`]: {
      fontSize: 16
    }
  },
  'size--small': {
    fontSize: 16,
    [`@media(max-width: ${max}px)`]: {
      fontSize: 16
    }
  },
  'uppercase': {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
}

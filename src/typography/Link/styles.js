import colors from '../../utils/colors'
import extractMargin from '../../utils/extractMargin'

export default {
  root: {
    display: 'block',
    fontFamily: 'brandon-grotesque, sans-serif',
    fontStyle: 'normal',
    fontStretch: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: colors.lightGray,
    fontSize: 14,
    textDecoration: 'underline',
    margin: ({ margin }) => extractMargin()(margin),
    marginTop: ({ margin }) => extractMargin('top')(margin),
    marginRight: ({ margin }) => extractMargin('right')(margin),
    marginBottom: ({ margin }) => extractMargin('bottom')(margin),
    marginLeft: ({ margin }) => extractMargin('left')(margin),
    padding: 0,
    '&:hover': {
      textDecoration: 'underline',
      color: colors.darkGray
    },
    '&::selection': {
      backgroundColor: colors.wafer
    }
  }
}

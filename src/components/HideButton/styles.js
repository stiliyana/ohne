import colors from '../../utils/colors'

export default {
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
    height: 40,
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      outline: 'none'
    },
    '& > img': {
      marginLeft: 16,
      height: 24
    },
    '@media(max-width: 620px)': {
      fontSize: 16,
      marginBottom: 50,
      '& > img': {
        height: 16
      }
    }
  }
}

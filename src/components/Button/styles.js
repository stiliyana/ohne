import colors from '../../utils/colors'

export default {
  button: {
    '-webkit-appearance': 'none',
    backgroundColor: 'unset',
    cursor: 'pointer',
    margin: '10px 25px',
    border: `2px solid ${colors.wafer}`,
    borderRadius: 16,
    width: 180,
    height: 180,
    '&:focus': {
      outline: 'none'
    }
  },
  label: {
    fontFamily: 'brandon-grotesque, sans-serif',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    fontSize: 18,
    color: colors.wafer,
    textTransform: 'uppercase',
    marginTop: 0
  }
}

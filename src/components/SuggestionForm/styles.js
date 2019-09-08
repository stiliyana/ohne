import colors from '../../utils/colors'

export default {
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 30
  },
  inputLabel: {
    fontFamily: 'brandon-grotesque, sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    padding: 0,
    fontSize: 10,
    color: colors.darkGray,
    textTransform: 'uppercase',
    marginBottom: 6
  },
  input: {
    fontFamily: 'brandon-grotesque, sans-serif',
    color: colors.darkGray,
    fontSize: 16,
    width: 'calc(100% - 24px)',
    height: 50,
    backgroundColor: colors.background,
    border: 'none',
    padding: '0 12px',
    '&:focus': {
      outline: 'none'
    }
  },
  textArea: {
    extend: 'input',
    height: 100,
    padding: '9px 12px'
  },
  submitButton: {
    alignSelf: 'flex-end',
    '-webkit-appearance': 'none',
    fontFamily: 'brandon-grotesque, sans-serif',
    color: colors.wafer,
    fontSize: 24,
    fontWeight: 'bold',
    padding: '4px 12px',
    border: `2px solid ${colors.wafer}`,
    borderRadius: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(220, 208, 192, .2)'
    },
    '&:focus': {
      outline: 'none'
    }
  }
}

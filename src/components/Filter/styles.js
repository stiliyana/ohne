import bodyStyles from '../../typography/Body/styles'
import colors from '../../utils/colors'
import { min, max } from '../../utils/breakpoints'

export default {
  root: {
    [`@media(min-width: ${min}px)`]: {
      position: 'fixed',
      width: 250,
      top: 12,
      right: 15,
      backgroundColor: 'white',
      borderRadius: 16,
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
      zIndex: 999,
      padding: '16px 30px 30px',
      boxSizing: 'border-box',
      minWidth: 280,
      cursor: 'default'
    }
  },
  checkboxContainer: {
    marginBottom: 17,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    '&::selection': {
      backgroundColor: colors.wafer
    }
  },
  checkbox: {
    marginRight: 20,
    '-webkit-appearance': 'none',
    backgroundColor: 'unset',
    cursor: 'pointer',
    width: 17,
    height: 17,
    border: `2px solid ${colors.wafer}`,
    borderRadius: '50%',
    '&:focus': {
      outline: 'none'
    },
    '&:checked': {
      background: 'radial-gradient(circle at center, #dcd0c0 0%, #dcd0c0 50%, white 50%, white 100%)'
    },
    '&::selection': {
      background: 'radial-gradient(circle at center, #dcd0c0 0%, #dcd0c0 50%, white 50%, white 100%)'
    }
  },
  label: {
    ...bodyStyles.root,
    textTransform: 'capitalize',
    [`@media(max-width: ${max}px)`]: {
      color: colors.lightGray
    },
    '&::selection': {
      backgroundColor: colors.wafer
    }
  },
  clearContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    [`@media(max-width: ${max}px)`]: {
      marginTop: 40
    }
  },
  clearIcon: {
    marginRight: 20,
    padding: 0,
    '&::selection': {
      backgroundColor: colors.wafer
    }
  }
}

import colors from '../../utils/colors'
import { min, max } from '../../utils/breakpoints'

export default {
  root: {
    width: '100%',
    height: 'calc(100vh - 85px)',
    minHeight: '600px',
    [`@media(max-width: ${max}px)`]: {
      marginTop: 94,
      minHeight: 500
    },
    [`@media(min-width: ${min}px)`]: {
      marginTop: 85
    }
  },
  marker: {
    width: 20,
    height: 20,
    backgroundColor: 'red'
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    boxShadow: 'none !important',
    borderRadius: 0,
    height: 35,
    '& > button': {
      width: '35px !important',
      height: '35px !important',
      backgroundColor: `${colors.background} !important`,
      backgroundImage: 'none !important',
      position: 'relative',
      display: 'inline-block !important',
      '&:focus': {
        boxShadow: 'none !important',
        borderRadius: '0 !important'
      },
      '&:after': {
        content: '""',
        width: '50%',
        height: 2,
        position: 'absolute',
        left: '25%',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: colors.lightGray,
      },
      '&:first-child': {
        '&:before': {
          content: '""',
          height: '50%',
          width: 2,
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: colors.lightGray,
        }
      },
      '&:last-child': {
        borderTop: 'none'
      }
    }
  },
  popup: {
    width: 340,
    '& > .mapboxgl-popup-content': {
      borderRadius: 16,
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
      padding: 30,
      borderTopLeftRadius: '16px !important',
      '& > button': {
        display: 'none'
      }
    },
  }
}

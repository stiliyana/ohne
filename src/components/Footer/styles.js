import colors from '../../utils/colors'
import { min, max } from '../../utils/breakpoints'

export default {
  footer: {
    width: '100%',
    backgroundColor: colors.background,
    display: 'flex',
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.19)',
    alignItems: 'flex-start',
    [`@media(max-width: ${max}px)`]: {
      height: 'auto'
    },
    [`@media(min-width: ${min}px)`]: {
      height: 123
    }
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  container: {
    extend: 'flexContainer',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
    [`@media(max-width: ${max}px)`]: {
      padding: 25
    },
    [`@media(min-width: ${min}px)`]: {
      padding: '26px 40px 0 40px',
    }
  },
  brandContainer: {
    extend: 'flexContainer',
    flex: 1,
    justifyContent: 'flex-start',
    [`@media(max-width: ${max}px)`]: {
      flex: '0 0 100%',
      flexDirection: 'column',
      marginBottom: 33,
      alignItems: 'flex-start'
    },
    [`@media(min-width: ${min}px)`]: {
      '& > h1': {
        marginRight: 40
      }
    }
  },
  linksContainer: {
    extend: 'flexContainer',
    flex: 1,
    justifyContent: 'center',
    [`@media(max-width: ${max}px)`]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexGrow: 1,
      '& > a': {
        marginBottom: 10
      }
    },
    [`@media(min-width: ${min}px)`]: {
      minWidth: 375,
      '& > a': {
        margin: '0 30px'
      }
    }
  },
  socialContainer: {
    extend: 'flexContainer',
    flex: 1,
    justifyContent: 'flex-end',
    '& > a': {
      display: 'block'
    },
    [`@media(max-width: ${max}px)`]: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      '& > a': {
        marginBottom: 10
      }
    },
    [`@media(min-width: ${min}px)`]: {
      '& > a': {
        margin: '0 10px'
      }
    }
  },
  rightContainer: {
    extend: 'flexContainer'
  }
}

import colors from '../../utils/colors'
import { min, max } from '../../utils/breakpoints'

export default {
  nav: {
    width: '100%',
    backgroundColor: colors.background,
    position: 'fixed',
    display: 'flex',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 999,
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.19)',
    [`@media(max-width: ${max}px)`]: {
      height: 94
    },
    [`@media(min-width: ${min}px)`]: {
      height: 85,
    }
  },
  filter: {
    [`@media(max-width: ${max}px)`]: {
      display: 'none'
    }
  },
  flexContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '0 25px 0 43px',
    position: 'relative',
    [`@media(max-width: ${max}px)`]: {
      justifyContent: 'center',
      padding: '0 25px'
    }
  },
  hamburger: {
    [`@media(max-width: ${max}px)`]: {
      position: 'absolute',
      left: 25
    },
    [`@media(min-width: ${min}px)`]: {
      display: 'none'
    }
  },
  brandContainer: {
    extend: 'flexContainer',
    justifyContent: 'flex-start',
    [`@media(max-width: ${max}px)`]: {
      flexDirection: 'column',
    },
    [`@media(min-width: ${min}px)`]: {
      '& > h1': {
        marginRight: 30
      }
    }
  },
  linksContainer: {
    extend: 'flexContainer',
    justifyContent: 'center',
    minWidth: 375,
    [`@media(max-width: ${max}px)`]: {
      display: 'none'
    },
    [`@media(min-width: ${min}px)`]: {
      '& > a': {
        margin: '0 30px'
      }
    }
  },
  filterContainer: {
    extend: 'flexContainer',
    zIndex: 1001,
    justifyContent: 'flex-end',
    [`@media(max-width: ${max}px)`]: {
      display: 'none'
    }
  },
  brandDescription: {
    lineHeight: 1
  },
  mobileNav: {
    width: 265,
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: -350,
    backgroundColor: colors.background,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 38px',
    zIndex: 1
  },
  mobileNavLinks: {
    margin: '90px 0',
    display: 'flex',
    flexDirection: 'column'
  },
  navEnter: {
    left: -350
  },
  navEnterDone: {
    left: 0,
    transition: 'left 300ms'
  },
  navExit: {
    left: 0
  },
  navExitActive: {
    left: -350,
    transition: 'left 300ms'
  },
  closeMobileNav: {
    position: 'absolute',
    top: 24,
    right: 38
  }
}

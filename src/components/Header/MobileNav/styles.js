import colors from '../../../utils/colors'

export default {
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
    margin: '90px 0 40px',
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

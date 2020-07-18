import { min, max } from '../../../utils/breakpoints'

export default {
  flexContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
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
  }
}

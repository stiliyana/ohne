export default {
  button: {
    '-webkit-appearance': 'none',
    backgroundColor: 'white',
    cursor: 'pointer',
    margin: '10px 25px',
    border: 'none',
    borderRadius: 15,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.33)',
    width: 250,
    minHeight: 280,
    padding: '36px 30px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    '& > img': {
      marginBottom: 16
    },
    '&:focus': {
      outline: 'none'
    }
  }
}

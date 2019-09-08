const extractMargin = side => margin => {
  let _margin = margin
  if (side) {
    _margin =
      margin && Object.prototype.hasOwnProperty.call(margin, side)
        ? margin[side]
        : 0
  }
  return Number.isFinite(_margin) ? _margin : 0
}

export default extractMargin

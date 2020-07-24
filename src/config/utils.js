const merge = require('deepmerge')

export const mergeConfigs = (provided, fallback) => merge(fallback, provided)

/**
 * Return a CSS property value as a unit-less integer.
 * @param cssVal
 * @returns {*}
 */
export const valueToNumber = cssVal =>
  Number(
    cssVal
      .replace('px', '')
      .replace('rem', '')
      .replace('em', '')
      .replace('vw', '')
      .replace('vh', '')
      .replace('cm', '')
      .replace('mm', '')
      .replace('in', '')
      .replace('pt', '')
      .replace('pc', '')
      .replace('ex', '')
      .replace('ch', '')
      .replace('vmin', '')
      .replace('vmax', '')
      .replace('%', '')
  )

// eslint-disable-next-line no-restricted-globals
export const isNumber = v => typeof v === 'number' && !isNaN(v)

export const isString = v =>
  Object.prototype.toString.call(v) === '[object String]'

export const mergeBorderProps = (props = {}, config = {}) => {
  const { all, x, y, top, bottom, left, right } = props
  const {
    all: cAll,
    x: cX,
    y: cY,
    top: cTop,
    bottom: cBottom,
    left: cLeft,
    right: cRight,
  } = config
  return {
    all: {
      width: all && all.width ? all.width : cAll.width,
      style: all && all.style ? all.style : cAll.style,
    },
    x: {
      width: x && x.width ? x.width : cX.width,
      style: x && x.style ? x.style : cX.style,
    },
    y: {
      width: y && y.width ? y.width : cY.width,
      style: y && y.style ? y.style : cY.style,
    },
    top: {
      width: top && top.width ? top.width : cTop.width,
      style: top && top.style ? top.style : cTop.style,
    },
    bottom: {
      width: bottom && bottom.width ? bottom.width : cBottom.width,
      style: bottom && bottom.style ? bottom.style : cBottom.style,
    },
    left: {
      width: left && left.width ? left.width : cLeft.width,
      style: left && left.style ? left.style : cLeft.style,
    },
    right: {
      width: right && right.width ? right.width : cRight.width,
      style: right && right.style ? right.style : cRight.style,
    },
  }
}

// @TODO remove this if we can get rid of margin in favor of spacing containers like stacks etc.
export const unprefixMargin = (props = {}) => {
  const {
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  } = props
  return {
    all: margin,
    x: marginX,
    y: marginY,
    top: marginTop,
    bottom: marginBottom,
    left: marginLeft,
    right: marginRight,
  }
}

export const evalSides = (sides = {}) => {
  const { all, x, y, top, bottom, left, right } = sides
  return {
    top: top || y || all,
    bottom: bottom || y || all,
    left: left || x || all,
    right: right || x || all,
  }
}

export const evalBorders = (sides = {}) => {
  const { all, x, y, top, bottom, left, right } = sides
  return {
    top: {
      width: top.width || y.width || all.width,
      style: top.style || y.style || all.style,
    },
    bottom: {
      width: bottom.width || y.width || all.width,
      style: bottom.style || y.style || all.style,
    },
    left: {
      width: left.width || x.width || all.width,
      style: left.style || x.style || all.style,
    },
    right: {
      width: right.width || x.width || all.width,
      style: right.style || x.style || all.style,
    },
  }
}

export const mergeProps = (props, config) => {
  const result = {}
  Object.keys(config).forEach(c => {
    result[c] = props[c] || config[c]
  })
  return result
}

export const evalCorners = (corners = {}) => {
  const {
    all,
    top,
    bottom,
    left,
    right,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
  } = corners
  return {
    topLeft: topLeft || top || left || all,
    topRight: topRight || top || right || all,
    bottomLeft: bottomLeft || bottom || left || all,
    bottomRight: bottomRight || bottom || right || all,
  }
}

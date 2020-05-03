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

export const getSideValues = (sides = {}) => {
  const { all, x, y, top, bottom, left, right } = sides
  const result = {
    top: all,
    right: all,
    bottom: all,
    left: all,
  }
  if (x) {
    result.left = x
    result.right = x
  }
  if (y) {
    result.top = y
    result.bottom = y
  }
  if (top) {
    result.top = top
  }
  if (bottom) {
    result.bottom = bottom
  }
  if (left) {
    result.left = left
  }
  if (right) {
    result.right = right
  }
  return result
}

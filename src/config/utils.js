const merge = require('deepmerge')

export const mergeConfigs = (provided, fallback) => merge(fallback, provided)

/**
 * Return a CSS property value as a unit-less integer.
 * @param cssVal
 * @returns {*}
 */
export const valueToNumber = cssVal =>
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

// eslint-disable-next-line no-restricted-globals
export const isNumber = v => typeof v === 'number' && !isNaN(v)

export const isString = v =>
  Object.prototype.toString.call(v) === '[object String]'

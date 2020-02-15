const merge = require('deepmerge')

export const mergeConfigs = (provided, fallback) => merge(fallback, provided)

/**
 * Return a CSS property value as a unit-less integer.
 * @param cssVal
 * @returns {*}
 */
export const valueToInt = cssVal =>
  cssVal
    .replace('px', '')
    .replace('rem', '')
    .replace('em', '')
    .replace('vw', '')
    .replace('vh', '')

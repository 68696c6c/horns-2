const merge = require('deepmerge')

export const mergeConfigs = (provided, fallback) => merge(fallback, provided)

// eslint-disable-next-line no-restricted-globals
export const isNumber = v => typeof v === 'number' && !isNaN(v)

export const isString = v =>
  Object.prototype.toString.call(v) === '[object String]'

const merge = require('deepmerge')

// eslint-disable-next-line import/prefer-default-export
export const mergeConfigs = (provided, fallback) => merge(fallback, provided)

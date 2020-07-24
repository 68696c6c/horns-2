import React from 'react'
import PropTypes from 'prop-types'

// @TODO don't spread non-html attributes to prevent console warnings.
export const handleProps = (
  { className: propsClassName, ...others },
  className = ''
) => ({
  className: [className, propsClassName].join(' ').trim(),
  ...others,
})

export const isUndefined = val => {
  return typeof val === 'undefined'
}

export const isArray = arr => {
  return arr.constructor === Array
}

export const isFragment = v => {
  if (v.type) {
    return v.type === React.Fragment
  }
  return v === React.Fragment
}

export const iterateChildren = (children, callback) => {
  return (isArray(children) ? children : [children]).forEach(child => {
    if (!isUndefined(child.type)) {
      callback(child)
    }
  })
}

export const childrenPropTypes = () =>
  PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])

/**
 * Returns an array of sequential integers starting at 1 of the given length. This is used instead
 * of `const items = new Array(itemCount)` because that returns an array of empty values, which
 * doesn't seem to work in the iterateColors function. Since the resulting array is used to print
 * human-friendly values in a loop, the 0 index is sliced out so that the first item is displayed
 * as item 1.
 */
// @TODO deal with the duplicate of this function in src/_story
export const makeIntArray = itemCount =>
  [...Array(itemCount + 1).keys()].slice(1, itemCount + 1)

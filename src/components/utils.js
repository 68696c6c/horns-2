import React from 'react'
import PropTypes from 'prop-types'

export const listTypes = {
  ordered: [
    'armenian',
    'cjk-ideographic',
    'decimal',
    'decimal-leading-zero',
    'georgian',
    'hebrew',
    'hiragana',
    'hiragana-iroha',
    'katakana',
    'katakana-iroha',
    'lower-alpha',
    'lower-greek',
    'lower-latin',
    'lower-roman',
    'none',
    'upper-alpha',
    'upper-greek',
    'upper-latin',
    'upper-roman',
  ],
  unordered: {
    disc: '●',
    circle: '○',
    none: '',
    square: '■',
    icon: '',
  },
}

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

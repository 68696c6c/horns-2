import { mergeConfigs } from '../utils'

import defaultConfig from './config'

export { default as sizing } from './config'

export const sizes = [
  'min',
  'tiny',
  'xxSmall',
  'xSmall',
  'small',
  'medium',
  'large',
  'xLarge',
  'xxLarge',
  'giant',
  'max',
]

export const getSideSizes = (sides = {}) => {
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

class SizingConfig {
  constructor(config = {}) {
    this.config = mergeConfigs(config, defaultConfig)

    const sizeValues = {}
    sizes.forEach(size => {
      sizeValues[size] = this.config[size]
    })
    this.sizes = sizeValues
  }

  getPX(size) {
    if (typeof this.sizes[size] !== 'undefined') {
      return `${this.sizes[size]}px`
    }
    return null
  }

  getValue(size) {
    if (this.sizes[size]) {
      return this.sizes[size]
    }
    return null
  }

  getSidesPX(sides) {
    const result = getSideSizes(sides)
    return {
      top: this.getPX(result.top),
      bottom: this.getPX(result.bottom),
      left: this.getPX(result.left),
      right: this.getPX(result.right),
    }
  }
}

export default SizingConfig

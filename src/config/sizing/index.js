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
    return {
      top: this.getPX(sides.top),
      bottom: this.getPX(sides.bottom),
      left: this.getPX(sides.left),
      right: this.getPX(sides.right),
    }
  }

  getCornersPX(c) {
    const result = {}
    ;['topRight', 'topLeft', 'bottomRight', 'bottomLeft'].forEach(corner => {
      result[corner] = c[corner] === 'max' ? '50%' : this.getPX(c[corner])
    })
    return result
  }
}

export default SizingConfig

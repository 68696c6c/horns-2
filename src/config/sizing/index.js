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
    if (this.sizes[size]) {
      return this.sizes[size]
    }
    return null
  }
}

export default SizingConfig

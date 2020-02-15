import { mergeConfigs } from '../utils'

import defaultConfig from './config'

export { default as spacing } from './config'

export const spacingSizes = [
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

class SpacingConfig {
  constructor(typographyConfig, config = {}) {
    this.config = mergeConfigs(config, defaultConfig)

    const sizes = {}
    spacingSizes.forEach(size => {
      sizes[size] = this.config[size]
    })
    this.sizes = sizes
  }

  getSpacing(size) {
    if (this.sizes[size]) {
      return this.sizes[size]
    }
    return null
  }
}

export default SpacingConfig

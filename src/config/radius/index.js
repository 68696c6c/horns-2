import { mergeConfigs } from '../utils'
import SizingConfig from '../sizing'

import defaultConfig from './config'

export { default as radius } from './config'

export const corners = ['topRight', 'topLeft', 'bottomRight', 'bottomLeft']

class RadiusConfig {
  constructor(sizingConfig, config = {}) {
    if (!(sizingConfig instanceof SizingConfig)) {
      throw new Error('RadiusConfig: invalid SizingConfig')
    }
    this.config = mergeConfigs(config, defaultConfig)

    const cornerRadii = {}
    corners.forEach(c => {
      const size = this.config.corners[c]
        ? this.config.corners[c]
        : this.config.size
      if (size === 'max') {
        cornerRadii[c] = '50%'
      } else if (!sizingConfig.getValue(size)) {
        // if the size comes out to 0 or null, use null for the value to avoid setting an unnecessary CSS property.
        cornerRadii[c] = null
      } else {
        cornerRadii[c] = sizingConfig.getPX(size)
      }
    })
    this.corners = cornerRadii
  }

  getRadius() {
    return this.corners
  }
}

export default RadiusConfig

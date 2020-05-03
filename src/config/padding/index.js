import { mergeConfigs } from '../utils'
import SizingConfig from '../sizing'

import defaultConfig from './config'

class PaddingConfig {
  constructor(sizingConfig, config = {}) {
    if (!(sizingConfig instanceof SizingConfig)) {
      throw new Error('PaddingConfig: invalid SizingConfig')
    }
    this.sizing = sizingConfig
    this.config = mergeConfigs(config, defaultConfig)
    this.targets = {}
    Object.keys(this.config).forEach(target => {
      const t = this.config[target]
      this.targets[target] = {
        x: this.sizing.getPX(t.x),
        y: this.sizing.getPX(t.y),
      }
    })
  }

  getSizes(target) {
    if (this.config[target]) {
      return this.config[target]
    }
    return { x: null, y: null }
  }

  getValues(target) {
    if (this.targets[target]) {
      return this.targets[target]
    }
    return { x: null, y: null }
  }
}

export default PaddingConfig

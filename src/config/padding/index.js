import { evalSides, mergeConfigs, mergeProps } from '../utils'
import SizingConfig from '../sizing'

import defaultConfig from './config'

export const unprefixPadding = (props = {}) => {
  const {
    paddingConfig,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  } = props
  return {
    config: paddingConfig,
    all: padding,
    x: paddingX,
    y: paddingY,
    top: paddingTop,
    bottom: paddingBottom,
    left: paddingLeft,
    right: paddingRight,
  }
}

class PaddingConfig {
  constructor(sizingConfig, config = {}) {
    if (!(sizingConfig instanceof SizingConfig)) {
      throw new Error('PaddingConfig: invalid SizingConfig')
    }
    this.sizing = sizingConfig
    this.config = mergeConfigs(config, defaultConfig)
    this.targets = {}
    Object.keys(this.config).forEach(target => {
      const merged = mergeProps(this.config[target], {
        config: null,
        all: null,
        x: null,
        y: null,
        top: null,
        bottom: null,
        left: null,
        right: null,
      })
      const t = evalSides(merged)
      this.targets[target] = this.sizing.getSidesPX(t)
    })
  }

  getPadding(paddingProps = {}) {
    const propValues = unprefixPadding(paddingProps)
    if (propValues.config && this.targets[propValues.config]) {
      return this.targets[propValues.config]
    }
    const p = evalSides(propValues)
    return this.sizing.getSidesPX(p)
  }
}

export default PaddingConfig

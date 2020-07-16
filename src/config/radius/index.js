import { evalCorners, mergeConfigs, mergeProps } from '../utils'
import SizingConfig from '../sizing'

import defaultConfig from './config'

export { default as radius } from './config'

export const unprefixRadius = (props = {}) => {
  const {
    radiusAll,
    radiusTop,
    radiusBottom,
    radiusLeft,
    radiusRight,
    radiusTopLeft,
    radiusTopRight,
    radiusBottomLeft,
    radiusBottomRight,
  } = props
  return {
    all: radiusAll,
    top: radiusTop,
    bottom: radiusBottom,
    left: radiusLeft,
    right: radiusRight,
    topLeft: radiusTopLeft,
    topRight: radiusTopRight,
    bottomLeft: radiusBottomLeft,
    bottomRight: radiusBottomRight,
  }
}

class RadiusConfig {
  constructor(sizingConfig, config = {}) {
    if (!(sizingConfig instanceof SizingConfig)) {
      throw new Error('RadiusConfig: invalid SizingConfig')
    }
    this.config = mergeConfigs(config, defaultConfig)
    this.sizing = sizingConfig
  }

  getCorners(radiusProps = {}) {
    const propValues = unprefixRadius(radiusProps)
    const merged = mergeProps(propValues, this.config)
    const evaled = evalCorners(merged)
    return this.sizing.getCornersPX(evaled)
  }
}

export default RadiusConfig

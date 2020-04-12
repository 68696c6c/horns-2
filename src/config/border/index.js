import { getSideValues, mergeConfigs } from '../utils'
import SizingConfig from '../sizing'

import defaultConfig from './config'

export { default as borders } from './config'

export const borderStyles = [
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  'none',
  'hidden',
]

export const getBorderSides = (config, sizingConfig) => {
  const { width, style, x, y, top, bottom, left, right } = config
  return {
    all: {
      width: sizingConfig.getPX(width),
      style,
    },
    x: {
      width: sizingConfig.getPX(x.width),
      style: x.style,
    },
    y: {
      width: sizingConfig.getPX(y.width),
      style: y.style,
    },
    top: {
      width: sizingConfig.getPX(top.width),
      style: top.style,
    },
    bottom: {
      width: sizingConfig.getPX(bottom.width),
      style: bottom.style,
    },
    left: {
      width: sizingConfig.getPX(left.width),
      style: left.style,
    },
    right: {
      width: sizingConfig.getPX(right.width),
      style: right.style,
    },
  }
}

class BorderConfig {
  constructor(sizingConfig, config = {}) {
    if (!(sizingConfig instanceof SizingConfig)) {
      throw new Error('BorderConfig: invalid SizingConfig')
    }
    this.config = mergeConfigs(config, defaultConfig)
    this.borderSides = getBorderSides(this.config, sizingConfig)
  }

  getSidesWidth(sides = {}) {
    const { all, x, y, top, bottom, left, right } = this.borderSides
    return getSideValues({
      all: sides.all || all.width,
      x: sides.x || x.width,
      y: sides.y || y.width,
      top: sides.top || top.width,
      bottom: sides.bottom || bottom.width,
      left: sides.left || left.width,
      right: sides.right || right.width,
    })
  }

  getSidesStyle(sides = {}) {
    const { all, x, y, top, bottom, left, right } = this.borderSides
    return getSideValues({
      all: sides.all || all.style,
      x: sides.x || x.style,
      y: sides.y || y.style,
      top: sides.top || top.style,
      bottom: sides.bottom || bottom.style,
      left: sides.left || left.style,
      right: sides.right || right.style,
    })
  }
}

export default BorderConfig

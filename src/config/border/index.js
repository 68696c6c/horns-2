import { getSideValues, mergeConfigs } from '../utils'
import SizingConfig from '../sizing'

import defaultConfig from './config'

const merge = require('deepmerge')

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

const defaultBorders = () => ({
  all: { width: null, style: null },
  x: { width: null, style: null },
  y: { width: null, style: null },
  top: { width: null, style: null },
  bottom: { width: null, style: null },
  left: { width: null, style: null },
  right: { width: null, style: null },
})

class BorderConfig {
  constructor(sizingConfig, config = {}) {
    if (!(sizingConfig instanceof SizingConfig)) {
      throw new Error('BorderConfig: invalid SizingConfig')
    }
    this.sizing = sizingConfig
    this.config = mergeConfigs(config, defaultConfig)
  }

  getWidthPX() {
    return this.sizing.getPX(this.config.all.width)
  }

  getBorders(sides = {}) {
    const { all, x, y, top, bottom, left, right } = merge(
      defaultBorders(),
      sides
    )
    const {
      all: configAll,
      x: configX,
      y: configY,
      top: configTop,
      bottom: configBottom,
      left: configLeft,
      right: configRight,
    } = this.config
    const widths = getSideValues({
      all: all.width || configAll.width,
      x: x.width || configX.width,
      y: y.width || configY.width,
      top: top.width || configTop.width,
      bottom: bottom.width || configBottom.width,
      left: left.width || configLeft.width,
      right: right.width || configRight.width,
    })
    const styles = getSideValues({
      all: all.style || configAll.style,
      x: x.style || configX.style,
      y: y.style || configY.style,
      top: top.style || configTop.style,
      bottom: bottom.style || configBottom.style,
      left: left.style || configLeft.style,
      right: right.style || configRight.style,
    })
    return {
      top: {
        width: this.sizing.getPX(widths.top),
        style: styles.top,
      },
      bottom: {
        width: this.sizing.getPX(widths.bottom),
        style: styles.bottom,
      },
      left: {
        width: this.sizing.getPX(widths.left),
        style: styles.left,
      },
      right: {
        width: this.sizing.getPX(widths.right),
        style: styles.right,
      },
    }
  }
}

export default BorderConfig

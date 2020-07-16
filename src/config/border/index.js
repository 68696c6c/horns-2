import { evalBorders, mergeBorderProps, mergeConfigs } from '../utils'
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

export const unprefixBorder = (props = {}) => {
  const {
    borderAll,
    borderX,
    borderY,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
  } = props
  return {
    all: borderAll,
    x: borderX,
    y: borderY,
    top: borderTop,
    bottom: borderBottom,
    left: borderLeft,
    right: borderRight,
  }
}

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

  getBorders(borderProps = {}) {
    const propValues = unprefixBorder(borderProps)
    const merged = mergeBorderProps(propValues, this.config)
    const evaled = evalBorders(merged)
    const result = {}
    const sides = ['top', 'bottom', 'left', 'right']
    sides.forEach(side => {
      const { width, style } = evaled[side]
      result[side] = {
        width: this.sizing.getPX(width),
        style,
      }
    })
    return result
  }
}

export default BorderConfig

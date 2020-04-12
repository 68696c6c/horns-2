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

// export const getBorders = borderSides => {
//   const { width, style, x, y, top, bottom, left, right } = borderSides
//   const widths = getSideValues({
//     all: width,
//     x: x.width,
//     y: y.width,
//     top: top.width,
//     bottom: bottom.width,
//     left: left.width,
//     right: right.width,
//   })
//   const styles = getSideValues({
//     all: style,
//     x: x.style,
//     y: y.style,
//     top: top.style,
//     bottom: bottom.style,
//     left: left.style,
//     right: right.style,
//   })
//   return {
//     top: {
//       width: widths.top,
//       style: styles.top,
//     },
//     bottom: {
//       width: widths.bottom,
//       style: styles.bottom,
//     },
//     left: {
//       width: widths.left,
//       style: styles.left,
//     },
//     right: {
//       width: widths.right,
//       style: styles.right,
//     },
//   }
// }

class BorderConfig {
  constructor(sizingConfig, config = {}) {
    if (!(sizingConfig instanceof SizingConfig)) {
      throw new Error('BorderConfig: invalid SizingConfig')
    }
    this.config = mergeConfigs(config, defaultConfig)
    this.borderSides = getBorderSides(this.config, sizingConfig)
    // this.borders = getBorders(this.borderSides)
  }

  // getBorders() {
  //   return this.borders
  // }

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

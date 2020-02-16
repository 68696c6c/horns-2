import { mergeConfigs, valueToNumber } from '../utils'
import SizingConfig from '../sizing'

import defaultConfig from './config'

export { default as grid } from './config'

export const breakpoints = ['min', 'small', 'medium', 'large', 'max']

class GridConfig {
  constructor(sizingConfig, config = {}) {
    if (!(sizingConfig instanceof SizingConfig)) {
      throw new Error('GridConfig: invalid SizingConfig')
    }
    this.config = mergeConfigs(config, defaultConfig)

    const { breakpoints: bp, columnMin, gap } = this.config
    this.gap = sizingConfig.getPX(gap)
    this.columnMin = columnMin
    this.breakpoints = {
      ...bp,
      mobile: bp[bp.mobile],
    }
    this.columns = parseInt(
      valueToNumber(bp.max) / valueToNumber(columnMin),
      10
    )
  }

  getGap() {
    return this.gap
  }

  getColumnMin() {
    return this.columnMin
  }

  getBreakpoint(breakpoint) {
    if (this.breakpoints[breakpoint]) {
      return this.breakpoints[breakpoint]
    }
    return this.breakpoints.mobile
  }
}

export default GridConfig

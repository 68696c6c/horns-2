import { mergeConfigs } from '../utils'
import SizingConfig from '../sizing'

import defaultConfig from './config'

export { default as borders } from './config'

class BorderConfig {
  constructor(sizingConfig, config = {}) {
    if (!(sizingConfig instanceof SizingConfig)) {
      throw new Error('BorderConfig: invalid SizingConfig')
    }
    this.config = mergeConfigs(config, defaultConfig)

    const { width: configWidth, style: configStyle } = this.config

    // Emotion will omit a CSS property if the value is null, which is what we want in this case.
    // Set width or style to null instead of 0 or 'none' so that Emotion will simply omit the corresponding properties.
    const width = !sizingConfig.getValue(configWidth)
      ? null
      : sizingConfig.getPX(configWidth)
    const style = configStyle === 'none' ? null : configStyle
    this.borders = {
      width,
      style,
    }
  }

  getBorder() {
    return this.borders
  }
}

export default BorderConfig

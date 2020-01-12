import { safeGetValue } from './utils'

const MODE_LIGHT = 'light'
const MODE_DARK = 'dark'
const MODE_DEFAULT = MODE_DARK

const basePallet = {
  primary: '#FFAA00',
  secondary: '#3914AF',
  tertiary: '#009999',
  violet: '#7f00ff',
  indigo: '#3f00ff',
  blue: '#1a99ff',
  green: '#00aa33',
  yellow: '#f6d500',
  orange: '#ff9900',
  red: '#ff3600',
  white: '#ffffff',
  gray: '#888888',
  black: '#010101',
}

const defaultConfig = {
  mode: MODE_DEFAULT,
  pallet: {
    primary: basePallet.primary,
    secondary: basePallet.secondary,
    tertiary: basePallet.tertiary,
    light: basePallet.white,
    neutral: basePallet.gray,
    dark: basePallet.black,
    success: basePallet.green,
    info: basePallet.blue,
    warning: basePallet.orange,
    danger: basePallet.red,
    prominent: basePallet.primary,
  },
  factors: {
    alpha: 0.3,
    dark: {
      min: 0.08,
      less: 0.15,
      more: 0.2,
      max: 0.5,
    },
    light: {
      min: 0.2,
      less: 0.5,
      more: 25,
      max: 50,
    },
  },
}

const makeSwatches = config => {
  return {}
}

class ColorConfig {
  constructor(config = {}) {
    this.config = {
      mode: safeGetValue(config, 'mode', defaultConfig.mode),
      pallet: safeGetValue(config, 'pallet', defaultConfig.pallet),
      factors: safeGetValue(config, 'factors', defaultConfig.factors),
    }

    this.swatches = makeSwatches(this.config)
  }
}

export default ColorConfig

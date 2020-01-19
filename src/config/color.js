import Color from 'color'

import { mergeConfigs } from './utils'

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

export const defaultConfig = {
  mode: MODE_DEFAULT,
  prominent: 'primary',
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

export const colors = [
  'primary',
  'secondary',
  'tertiary',
  'light',
  'neutral',
  'dark',
  'success',
  'info',
  'warning',
  'danger',
]
export const shades = ['base', 'darker', 'dark', 'light', 'lighter']
export const variants = ['base', 'hover', 'active']
export const swatches = ['base', 'readable', 'border', 'alpha', 'negative']

export const getColorValue = c => c.hex()

const makeSwatches = (variant, config) => {
  const { dark: fd, light: fl } = config.factors
  const alpha = variant.alpha(config.factors.alpha)
  const negative = variant.negate()

  let readable
  let border
  if (variant.isDark()) {
    readable = Color(basePallet.white)
    border = variant.lighten(fl.min)
  } else {
    readable = Color(basePallet.black)
    border = variant.lighten(fd.min)
  }

  return {
    base: getColorValue(variant),
    readable: getColorValue(readable),
    border: getColorValue(border),
    alpha: getColorValue(alpha),
    negative: getColorValue(negative),
  }
}

const makeVariants = (shade, config) => {
  const { dark: fd, light: fl } = config.factors

  let hover
  let active
  if (shade.isDark()) {
    hover = shade.lighten(fl.min)
    active = shade.lighten(fl.less)
  } else {
    hover = shade.lighten(fd.min)
    active = shade.lighten(fd.less)
  }

  return {
    base: makeSwatches(shade, config),
    hover: makeSwatches(hover, config),
    active: makeSwatches(active, config),
  }
}

const makeShades = (colorName, config) => {
  const base = Color(config.pallet[colorName])
  const { dark: fd, light: fl } = config.factors

  let darker = base.darken(fd.min)
  let dark = base.darken(fd.less)
  let lighter = base.lighten(fl.min)
  let light = base.lighten(fl.less)

  if (colorName === 'dark') {
    lighter = base.lighten(fl.max)
    light = base.lighten(fl.more)
  } else if (colorName === 'light') {
    darker = base.lighten(fd.max)
    dark = base.lighten(fd.more)
  }

  return {
    base: makeVariants(base, config),
    darker: makeVariants(darker, config),
    dark: makeVariants(dark, config),
    light: makeVariants(light, config),
    lighter: makeVariants(lighter, config),
  }
}

export const makeColorways = config => {
  const result = {}
  colors.forEach(colorName => {
    result[colorName] = makeShades(colorName, config)
  })
  return result
}

export const getBackground = (mode, cw) =>
  mode === MODE_DARK ? cw.dark : cw.light

export const getProminent = (prominent, cw) =>
  typeof cw[prominent] === 'undefined'
    ? cw[defaultConfig.prominent]
    : cw[prominent]

export const getSwatchPath = (colorSwatch = '') => {
  const parts = colorSwatch.split('.')
  if (!colors.includes(parts[0])) {
    return {
      color: 'neutral',
      shade: 'base',
      variant: 'base',
      swatch: 'base',
    }
  }
  switch (parts.length) {
    case 1:
      return {
        color: parts[0],
        shade: 'base',
        variant: 'base',
        swatch: 'base',
      }
    case 2:
      return {
        color: parts[0],
        shade: parts[1],
        variant: 'base',
        swatch: 'base',
      }
    case 3:
      return {
        color: parts[0],
        shade: parts[1],
        variant: parts[2],
        swatch: 'base',
      }
    default:
      return {
        color: parts[0],
        shade: parts[1],
        variant: parts[2],
        swatch: parts[3],
      }
  }
}

class ColorConfig {
  constructor(config = {}) {
    this.config = mergeConfigs(config, defaultConfig)

    this.colorways = makeColorways(this.config)
    this.background = getBackground(this.config.mode, this.colorways)
    this.prominent = getProminent(this.config.prominent, this.colorways)
  }

  getColorway(colorway) {
    const path = getSwatchPath(colorway)
    return this.colorways[path.color][path.shade][path.variant]
  }
}

export default ColorConfig

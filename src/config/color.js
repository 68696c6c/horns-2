import Color from 'color'

import { mergeConfigs } from './utils'

const MODE_LIGHT = 'light'
const MODE_DARK = 'dark'
const MODE_DEFAULT = MODE_DARK

const basePallet = {
  primary: '#ffaa00',
  secondary: '#3914af',
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
    darker: {
      min: 0.08,
      max: 0.15,
    },
    dark: {
      min: 0.2,
      max: 0.5,
    },
    light: {
      min: 0.2,
      max: 0.5,
    },
    lighter: {
      min: 25,
      max: 50,
    },
  },
}

const colorWhite = Color(basePallet.white)
const colorBlack = Color(basePallet.black)

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

const makeSwatches = (colorName, variant, config) => {
  const { dark: fd, light: fl } = config.factors
  const alpha = variant.alpha(config.factors.alpha)
  const negative = variant.negate()

  let readable
  let border
  if (variant.isDark()) {
    readable = colorWhite
    border = variant.lighten(fl.min)
  } else {
    readable = colorBlack
    border = variant.darken(fd.min)
  }
  if (colorName === 'dark') {
    border = variant.lighten(fl.min)
  } else if (colorName === 'light') {
    border = variant.darken(fd.min)
  }

  return {
    base: getColorValue(variant),
    readable: getColorValue(readable),
    border: getColorValue(border),
    alpha: getColorValue(alpha),
    negative: getColorValue(negative),
  }
}

const makeVariants = (colorName, shadeName, shade, config) => {
  const { dark: fd, darker: fdr, light: fl, lighter: flr } = config.factors

  let hover
  let active
  if (colorName === 'dark') {
    if (shadeName === 'light' || shadeName === 'lighter') {
      hover = shade.lighten(fl.min)
      active = shade.lighten(fl.max)
    } else {
      hover = shade.lighten(flr.min)
      active = shade.lighten(flr.max)
    }
  } else if (colorName === 'light') {
    hover = shade.darken(fdr.min)
    active = shade.darken(fdr.max)
  } else if (shade.isDark()) {
    hover = shade.lighten(fl.min)
    active = shade.lighten(fl.max)
  } else {
    hover = shade.darken(fd.min)
    active = shade.darken(fd.max)
  }

  return {
    base: makeSwatches(colorName, shade, config),
    hover: makeSwatches(colorName, hover, config),
    active: makeSwatches(colorName, active, config),
  }
}

const makeShades = (colorName, config) => {
  const base = Color(config.pallet[colorName])
  const { dark: fd, darker: fdr, light: fl, lighter: flr } = config.factors

  let darker = base.darken(fd.max)
  let dark = base.darken(fd.min)
  let lighter = base.lighten(fl.max)
  let light = base.lighten(fl.min)

  if (colorName === 'dark') {
    lighter = base.lighten(flr.max)
    light = base.lighten(flr.min)
  } else if (colorName === 'light') {
    darker = base.darken(fdr.max)
    dark = base.darken(fdr.min)
  }

  return {
    base: makeVariants(colorName, 'base', base, config),
    darker: makeVariants(colorName, 'darker', darker, config),
    dark: makeVariants(colorName, 'dark', dark, config),
    light: makeVariants(colorName, 'light', light, config),
    lighter: makeVariants(colorName, 'lighter', lighter, config),
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

  darkMode() {
    return this.config.mode === MODE_DARK
  }

  getColorway(colorway) {
    const path = getSwatchPath(colorway)
    return this.colorways[path.color]
  }

  getShade(colorway) {
    const path = getSwatchPath(colorway)
    return this.colorways[path.color][path.shade]
  }

  getVariant(colorway) {
    const path = getSwatchPath(colorway)
    return this.colorways[path.color][path.shade][path.variant]
  }

  getSwatch(colorway) {
    const path = getSwatchPath(colorway)
    return this.colorways[path.color][path.shade][path.variant][path.swatch]
  }
}

export default ColorConfig

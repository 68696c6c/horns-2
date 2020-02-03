import Color from 'color'

import { mergeConfigs } from '../utils'

const MODE_LIGHT = 'light'
const MODE_DARK = 'dark'
const MODE_DEFAULT = MODE_LIGHT

const basePallet = {
  primary: '#ffaa00',
  teal: '#009999',
  violet: '#7f00ff',
  indigo: '#3f00ff',
  blue: '#1a99ff',
  cyan: '#17a2b8',
  green: '#28a745',
  yellow: '#ffc107',
  mustard: '#aa7700',
  orange: '#fd7e14',
  red: '#dc3545',
  white: '#ffffff',
  gray: '#7f7f7f',
  black: '#010101',
}

export const defaultConfig = {
  mode: MODE_DEFAULT,
  prominent: 'primary',
  pallet: {
    primary: basePallet.primary,
    secondary: basePallet.blue,
    tertiary: basePallet.teal,
    light: basePallet.white,
    neutral: basePallet.gray,
    dark: basePallet.black,
    success: basePallet.green,
    info: basePallet.cyan,
    warning: basePallet.yellow,
    danger: basePallet.red,
  },
  factors: {
    alpha: 0.3,
    darker: {
      min: 0.08,
      max: 0.155,
    },
    dark: {
      min: 0.2,
      max: 0.47,
    },
    light: {
      min: 0.22,
      max: 0.55,
    },
    lighter: {
      min: 25,
      max: 40,
    },
  },
}

const colorWhite = Color(basePallet.white)
const colorGray = Color(basePallet.gray)
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
  'prominent',
  'background',
]
// @TODO these aren't being used
export const tones = ['darker', 'dark', 'base', 'light', 'lighter']
export const states = ['base', 'disabled', 'hover', 'active', 'alpha']
export const swatches = ['base', 'readable', 'border']
export const backgroundTones = ['base', 'secondary', 'tertiary']

export const getColorValue = c => c.rgb().string()

export const getSwatchPath = (colorSwatch = '') => {
  const parts = colorSwatch.split('.')
  if (!colors.includes(parts[0])) {
    return {
      color: 'neutral',
      tone: 'base',
      state: 'base',
      swatch: 'base',
    }
  }
  switch (parts.length) {
    case 1:
      return {
        color: parts[0],
        tone: 'base',
        state: 'base',
        swatch: 'base',
      }
    case 2:
      return {
        color: parts[0],
        tone: parts[1],
        state: 'base',
        swatch: 'base',
      }
    case 3:
      return {
        color: parts[0],
        tone: parts[1],
        state: parts[2],
        swatch: 'base',
      }
    default:
      return {
        color: parts[0],
        tone: parts[1],
        state: parts[2],
        swatch: parts[3],
      }
  }
}

export const makeTones = (colorName, config) => {
  const { dark: fd, darker: fdr, light: fl, lighter: flr } = config.factors
  const base = Color(config.pallet[colorName])

  let darker = base.darken(fd.max)
  let dark = base.darken(fd.min)
  let lighter = base.lighten(fl.max)
  let light = base.lighten(fl.min)

  const luminosity = base.luminosity()
  if (luminosity > 0.8) {
    // light
    darker = base.darken(fdr.max)
    dark = base.darken(fdr.min)
  } else if (luminosity < 0.001) {
    // dark
    light = base.lighten(flr.min)
    lighter = base.lighten(flr.max)
  }

  return { base, darker, dark, light, lighter }
}

export const makePallet = config => {
  const result = {}
  colors.forEach(colorName => {
    result[colorName] = makeTones(colorName, config)
  })
  return result
}

export const makeColorwaySwatches = (tone, border) => {
  const readable = tone.isDark() ? colorWhite : colorBlack
  const luminosity = parseFloat(tone.luminosity().toFixed(4))
  return {
    base: getColorValue(tone),
    readable: getColorValue(readable),
    border: getColorValue(border),
    data: {
      color: tone,
      luminosity,
    },
  }
}

export const makeColorways = (pallet, config) => {
  const result = {}

  Object.keys(pallet).forEach(colorName => {
    const colorTones = pallet[colorName]

    const { base, dark, darker, light, lighter } = colorTones
    let border = dark
    let hover = dark
    let hoverBorder = base
    let active = darker
    let activeBorder = dark
    const inactiveBase = base.mix(colorGray, 0.5)
    const inactiveBorderBase = base.mix(colorGray, 0.7)
    if (config.mode === MODE_DARK) {
      border = light
      hover = light
      hoverBorder = base
      active = lighter
      activeBorder = light
    }
    if (colorName === 'dark') {
      border = lighter
      hover = light
      hoverBorder = lighter
      active = lighter
      activeBorder = light
    } else if (colorName === 'light') {
      border = darker
      hover = dark
      hoverBorder = darker
      active = darker
      activeBorder = dark
    }
    result[colorName] = {
      base: makeColorwaySwatches(base, border),
      inactive: makeColorwaySwatches(inactiveBase, inactiveBorderBase),
      hover: makeColorwaySwatches(hover, hoverBorder),
      active: makeColorwaySwatches(active, activeBorder),
    }
  })
  let { base } = pallet.light
  let border = pallet.light.darker
  let secondary = pallet.light.dark
  let secondaryBorder = pallet.light.darker
  let tertiary = pallet.light.darker
  let tertiaryBorder = pallet.light.dark
  if (config.mode === MODE_DARK) {
    base = pallet.dark.base
    border = pallet.dark.light
    secondary = pallet.dark.lighter
    secondaryBorder = pallet.dark.light
    tertiary = pallet.dark.light
    tertiaryBorder = pallet.dark.lighter
  }
  const bgSwatches = {
    base: makeColorwaySwatches(base, border),
    secondary: makeColorwaySwatches(secondary, secondaryBorder),
    tertiary: makeColorwaySwatches(tertiary, tertiaryBorder),
  }
  result.background = {
    base: {
      base: bgSwatches.base,
      inactive: bgSwatches.base,
      hover: bgSwatches.secondary,
      active: bgSwatches.tertiary,
    },
    secondary: {
      base: bgSwatches.secondary,
      inactive: bgSwatches.secondary,
      hover: bgSwatches.tertiary,
      active: bgSwatches.base,
    },
    tertiary: {
      base: bgSwatches.tertiary,
      inactive: bgSwatches.tertiary,
      hover: bgSwatches.base,
      active: bgSwatches.secondary,
    },
  }
  result.prominent = result[config.prominent]
  return result
}

class ColorConfig {
  constructor(config = {}) {
    this.config = mergeConfigs(config, defaultConfig)

    this.pallet = makePallet(this.config)
    this.colorways = makeColorways(this.pallet, this.config)
  }

  darkMode() {
    return this.config.mode === MODE_DARK
  }

  getBackground(tone) {
    if (backgroundTones.includes(tone)) {
      return this.colorways.background[tone]
    }
    return this.colorways.background.base
  }

  getColorway(color) {
    const path = getSwatchPath(color)
    if (path.color === 'background') {
      return this.colorways.background.base
    }
    return this.colorways[path.color]
  }

  getTone(tone) {
    const path = getSwatchPath(tone)
    if (path.color === 'prominent') {
      return this.pallet[this.config.prominent][path.tone]
    }
    return this.pallet[path.color][path.tone]
  }
}

export default ColorConfig

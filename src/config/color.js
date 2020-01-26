import Color from 'color'

import { mergeConfigs } from './utils'

const MODE_LIGHT = 'light'
const MODE_DARK = 'dark'
const MODE_DEFAULT = MODE_LIGHT

const basePallet = {
  primary: '#ffaa00',
  secondary: '#3914af',
  tertiary: '#009999',
  violet: '#7f00ff',
  indigo: '#3f00ff',
  blue: '#1a99ff',
  green: '#00aa33',
  lime: '#00cc3d',
  yellow: '#f6d500',
  mustard: '#aa7700',
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
    success: basePallet.lime,
    info: basePallet.blue,
    warning: basePallet.mustard,
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
      max: 0.4,
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
]
export const tones = ['base', 'darker', 'dark', 'light', 'lighter']
export const states = ['base', 'disabled', 'hover', 'active', 'alpha']
export const swatches = ['base', 'readable', 'border']

export const getColorValue = c => c.rgb().string()

const makeSwatches = (state, config) => {
  const { dark: fd, darker: fdr, lighter: flr } = config.factors
  const isDark = state.isDark()
  const readable = isDark ? colorWhite : colorBlack
  const luminosity = parseFloat(state.luminosity().toFixed(4))
  let border = state.grayscale()
  if (luminosity > 0.6) {
    // very light
    border = state.darken(fdr.min)
  } else if (luminosity < 0.009) {
    // very dark
    border = state.lighten(flr.min)
  } else if (isDark) {
    // dark
    border = state.darken(fd.min)
  } else {
    // light
    border = state.darken(fd.min)
  }
  return {
    base: getColorValue(state),
    readable: getColorValue(readable),
    border: getColorValue(border),
    data: {
      luminosity,
    },
  }
}

const makeStates = (tone, config) => {
  const { dark: fd, darker: fdr, light: fl, lighter: flr } = config.factors
  const luminosity = tone.luminosity()
  const inactive = tone.mix(colorGray, 0.6)
  let hover

  let active
  if (luminosity > 0.8) {
    // very light
    hover = tone.darken(fdr.min)
    active = hover.darken(fd.min)
  } else if (luminosity < 0.001) {
    // very dark
    hover = tone.lighten(flr.min)
    active = hover.lighten(fl.min)
  } else if (tone.isDark()) {
    // dark
    hover = tone.lighten(fl.min)
    active = hover.lighten(fl.min)
  } else {
    // light
    hover = tone.darken(fd.min)
    active = hover.darken(fd.min)
  }

  return {
    base: makeSwatches(tone, config),
    inactive: makeSwatches(inactive, config),
    hover: makeSwatches(hover, config),
    active: makeSwatches(active, config),
  }
}

const makeTones = (colorName, config) => {
  const color = Color(config.pallet[colorName])
  const { dark: fd, darker: fdr, light: fl, lighter: flr } = config.factors

  let darker = color.darken(fd.max)
  let dark = color.darken(fd.min)
  let lighter = color.lighten(fl.max)
  let light = color.lighten(fl.min)

  const luminosity = color.luminosity()
  if (luminosity > 0.8) {
    // light
    darker = color.darken(fdr.max)
    dark = color.darken(fdr.min)
  } else if (luminosity < 0.001) {
    // dark
    light = color.lighten(flr.min)
    lighter = color.lighten(flr.max)
  }

  return {
    base: makeStates(color, config),
    darker: makeStates(darker, config),
    dark: makeStates(dark, config),
    light: makeStates(light, config),
    lighter: makeStates(lighter, config),
  }
}

export const makeColors = config => {
  const result = {}
  colors.forEach(colorName => {
    result[colorName] = makeTones(colorName, config)
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

class ColorConfig {
  constructor(config = {}) {
    this.config = mergeConfigs(config, defaultConfig)

    this.colorways = makeColors(this.config)
    this.background = getBackground(this.config.mode, this.colorways)
    this.prominent = getProminent(this.config.prominent, this.colorways)
  }

  darkMode() {
    return this.config.mode === MODE_DARK
  }

  getBackground(tone) {
    let secondary = 'dark'
    let tertiary = 'darker'
    if (this.darkMode()) {
      secondary = 'light'
      tertiary = 'lighter'
    }
    switch (tone) {
      case 'secondary':
        return this.background[secondary]
      case 'tertiary':
        return this.background[tertiary]
      default:
        return this.background.base
    }
  }

  getTone(color) {
    const path = getSwatchPath(color)
    return this.colorways[path.color][path.tone]
  }
}

export default ColorConfig

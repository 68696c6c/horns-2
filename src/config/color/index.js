import Color from 'color'

import { mergeConfigs } from '../utils'

import defaultConfig, { MODE_DARK, basePallet } from './config'

export { default as color, MODE_LIGHT, MODE_DARK, MODE_DEFAULT } from './config'

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
// @TODO tones, states, and swatches are only used in the tests.
export const tones = ['darker', 'dark', 'base', 'light', 'lighter']
export const states = ['base', 'inactive', 'hover', 'active']
export const swatches = ['base', 'readable', 'border']
export const backgroundTones = ['base', 'secondary']

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

export const makeSwatches = (tone, border) => {
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
      base: makeSwatches(base, border),
      inactive: makeSwatches(inactiveBase, inactiveBorderBase),
      hover: makeSwatches(hover, hoverBorder),
      active: makeSwatches(active, activeBorder),
    }
  })
  let bgColorway
  let bgSecondaryColorway
  if (config.mode === MODE_DARK) {
    bgColorway = result.dark
    bgSecondaryColorway = {
      base: makeSwatches(pallet.dark.light, pallet.dark.lighter),
      inactive: bgColorway.inactive,
      hover: makeSwatches(pallet.dark.base, pallet.dark.light),
      active: makeSwatches(pallet.dark.light, pallet.dark.base),
    }
  } else {
    bgColorway = result.light
    bgSecondaryColorway = {
      base: makeSwatches(pallet.light.dark, pallet.light.darker),
      inactive: bgColorway.inactive,
      hover: makeSwatches(pallet.light.base, pallet.light.dark),
      active: makeSwatches(pallet.light.dark, pallet.light.base),
    }
  }
  result.background = {
    base: bgColorway,
    secondary: bgSecondaryColorway,
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

  // @TODO this is currently only used in the Storybook docs; maybe remove if it is not needed.
  getTone(tone) {
    const path = getSwatchPath(tone)
    if (path.color === 'prominent') {
      return this.pallet[this.config.prominent][path.tone]
    }
    return this.pallet[path.color][path.tone]
  }
}

export default ColorConfig

/* global describe, it, expect, beforeEach */
import Color from 'color'

import ColorConfig, {
  MODE_DARK,
  MODE_LIGHT,
  defaultConfig,
  colors,
  tones,
  states,
  swatches,
  backgroundTones,
  getColorValue,
  makeTones,
  makePallet,
  makeSwatches,
  makeColorways,
  getSwatchPath,
} from '.'

describe('ColorConfig', () => {
  let c
  beforeEach(() => {
    c = new ColorConfig()
  })

  it('should return a ColorConfig instance', () => {
    expect(c instanceof ColorConfig).toEqual(true)
  })

  describe('darkMode', () => {
    it('should return true if the config is set to dark mode', () => {
      c = new ColorConfig({ mode: MODE_DARK })
      expect(c.darkMode()).toBe(true)
    })
    it('should return false if the config is set to light mode', () => {
      c = new ColorConfig({ mode: MODE_LIGHT })
      expect(c.darkMode()).toBe(false)
    })
  })

  describe('getBackground', () => {
    it('should return the base background colorway if no tone is specified', () => {
      const cw = c.getBackground()
      expect(cw).toEqual(c.colorways.background.base)
    })
    it('should return the base background colorway if the tone is "base"', () => {
      const cw = c.getBackground('base')
      expect(cw).toEqual(c.colorways.background.base)
    })
    it('should return the secondary background colorway if the tone is "secondary"', () => {
      const cw = c.getBackground('secondary')
      expect(cw).toEqual(c.colorways.background.secondary)
    })
  })

  describe('getColorway', () => {
    it('should return the expected color swatches when a color name is specified', () => {
      const cw = c.getColorway('primary')
      expect(cw).toEqual(c.colorways.primary)
    })
    it('should return the base background colorway if the color name is "background"', () => {
      const cw = c.getColorway('background')
      expect(cw).toEqual(c.colorways.background.base)
    })
  })
})

describe('getColorValue', () => {
  it('should return an rgba string', () => {
    const c = getColorValue(Color('#FFBB00'))
    expect(c).toEqual(expect.stringContaining('rgb'))
  })
})

describe('makeTones', () => {
  it('should return an object with a key for each tone', () => {
    const result = makeTones('primary', defaultConfig)
    const colorTones = Object.keys(result).sort()
    expect(colorTones).toEqual(tones.sort())
  })
  it('should return distinguishable light tones for the dark pallet color', () => {
    const result = makeTones('dark', defaultConfig)
    const { base, light, lighter } = result

    const baseToLight = parseFloat(base.contrast(light).toFixed(2))
    expect(baseToLight).toEqual(1.2)

    const lightToLighter = parseFloat(light.contrast(lighter).toFixed(2))
    expect(lightToLighter).toEqual(1.2)
  })
  it('should return distinguishable tones for the neutral pallet color', () => {
    const result = makeTones('neutral', defaultConfig)
    const { darker, dark, base, light, lighter } = result

    const darkerToBase = parseFloat(darker.contrast(base).toFixed(2))
    expect(darkerToBase).toBeGreaterThanOrEqual(2.3)
    expect(darkerToBase).toBeLessThanOrEqual(2.5)

    const darkToBase = parseFloat(dark.contrast(base).toFixed(2))
    expect(darkToBase).toBeGreaterThanOrEqual(1.3)
    expect(darkToBase).toBeLessThanOrEqual(1.5)

    const lightToBase = parseFloat(light.contrast(base).toFixed(2))
    expect(lightToBase).toBeGreaterThanOrEqual(1.3)
    expect(lightToBase).toBeLessThanOrEqual(1.5)

    const lighterToBase = parseFloat(lighter.contrast(base).toFixed(2))
    expect(lighterToBase).toBeGreaterThanOrEqual(2.3)
    expect(lighterToBase).toBeLessThanOrEqual(2.5)
  })
  it('should return distinguishable dark tones for the light pallet color', () => {
    const result = makeTones('light', defaultConfig)
    const { darker, dark, base } = result

    const darkerToDark = parseFloat(darker.contrast(dark).toFixed(2))
    expect(darkerToDark).toEqual(1.2)

    const darkToBase = parseFloat(dark.contrast(base).toFixed(2))
    expect(darkToBase).toEqual(1.2)
  })
})

describe('makePallet', () => {
  const sorted = {
    colors: colors.sort(),
    tones: tones.sort(),
    swatches: swatches.sort(),
  }
  let result
  beforeEach(() => {
    result = makePallet(defaultConfig)
  })
  it('should return an object with a key for each pallet color', () => {
    const palletColors = Object.keys(result).sort()
    expect(palletColors).toEqual(sorted.colors)
  })
  it('should return a set of tones for each pallet color', () => {
    Object.keys(result).forEach(i => {
      const colorTones = Object.keys(result[i]).sort()
      expect(colorTones).toEqual(sorted.tones)
    })
  })
  it('should return a Color object for each color tone', () => {
    Object.keys(result).forEach(colorName => {
      Object.keys(result[colorName]).forEach(colorTone => {
        const c = result[colorName][colorTone]
        expect(c instanceof Color).toEqual(true)
      })
    })
  })
})

describe('makeSwatches', () => {
  const sorted = {
    colors: colors.sort(),
    tones: tones.sort(),
    swatches: [...swatches, 'data'].sort(),
  }
  const colorBlack = Color('black')
  const colorWhite = Color('white')
  it('should return an object with a key for each swatch', () => {
    const result = makeSwatches(colorBlack, colorBlack)
    const colorSwatches = Object.keys(result).sort()
    expect(colorSwatches).toEqual(sorted.swatches)
  })
  it('should set the readable color to white if the color is dark', () => {
    const result = makeSwatches(colorBlack, colorBlack)
    expect(result.readable).toEqual('rgb(255, 255, 255)')
  })
  it('should set the readable color to black if the color is light', () => {
    const result = makeSwatches(colorWhite, colorWhite)
    expect(result.readable).toEqual('rgb(1, 1, 1)')
  })
})

describe('makeColorways', () => {
  const sorted = {
    colors: colors.sort(),
    tones: tones.sort(),
    states: states.sort(),
    swatches: swatches.sort(),
    backgroundTones: backgroundTones.sort(),
  }
  it('should return a colorway for each pallet color', () => {
    const pallet = makePallet(defaultConfig)
    const result = makeColorways(pallet, defaultConfig)

    const colorways = Object.keys(result).sort()
    expect(colorways).toEqual(sorted.colors)
  })
  it('should return an object of states for each colorway', () => {
    const pallet = makePallet(defaultConfig)
    const result = makeColorways(pallet, defaultConfig)

    Object.keys(result).forEach(i => {
      if (i !== 'background') {
        const toneStates = Object.keys(result[i]).sort()
        expect(toneStates).toEqual(sorted.states)
      }
    })
  })
  it('should return a base and secondary background colorway', () => {
    const config = { ...defaultConfig, mode: MODE_DARK }
    const pallet = makePallet(config)
    const result = makeColorways(pallet, config)

    const colorways = Object.keys(result.background).sort()
    expect(colorways).toEqual(sorted.backgroundTones)

    const baseStates = Object.keys(result.background.base).sort()
    expect(baseStates).toEqual(sorted.states)

    const secondaryStates = Object.keys(result.background.secondary).sort()
    expect(secondaryStates).toEqual(sorted.states)
  })
  it('should return dark background colorways if the color mode is set to dark', () => {
    const config = { ...defaultConfig, mode: MODE_DARK }
    const pallet = makePallet(config)
    const result = makeColorways(pallet, config)

    expect(result.background.base.base).toEqual(result.dark.base)
    expect(result.background.secondary.base.base).toEqual(pallet.dark.light.rgb().string())
  })
  it('should return light background colorways if the color mode is set to light', () => {
    const config = { ...defaultConfig, mode: MODE_LIGHT }
    const pallet = makePallet(config)
    const result = makeColorways(pallet, config)

    expect(result.background.base.base).toEqual(result.light.base)
    expect(result.background.secondary.base.base).toEqual(pallet.light.dark.rgb().string())
  })
})

describe('getSwatchPath', () => {
  it('should default to neutral when no colorway is provided', () => {
    const result = getSwatchPath()
    expect(result).toEqual({
      color: 'neutral',
      tone: 'base',
      state: 'base',
      swatch: 'base',
    })
  })

  it('should default to neutral when an invalid colorway is provided', () => {
    const result = getSwatchPath('asdf')
    expect(result).toEqual({
      color: 'neutral',
      tone: 'base',
      state: 'base',
      swatch: 'base',
    })
  })

  it('should default to base values when a color name is specified', () => {
    const result = getSwatchPath('dark')
    expect(result).toEqual({
      color: 'dark',
      tone: 'base',
      state: 'base',
      swatch: 'base',
    })
  })

  it('should default to base values when a color name and shade are specified', () => {
    const result = getSwatchPath('secondary.dark')
    expect(result).toEqual({
      color: 'secondary',
      tone: 'dark',
      state: 'base',
      swatch: 'base',
    })
  })

  it('should default to base values when a color name, shade, and variant are specified', () => {
    const result = getSwatchPath('tertiary.light.hover')
    expect(result).toEqual({
      color: 'tertiary',
      tone: 'light',
      state: 'hover',
      swatch: 'base',
    })
  })

  it('should return the full path when a color name, shade, variant, and swatch are specified', () => {
    const result = getSwatchPath('tertiary.light.hover.readable')
    expect(result).toEqual({
      color: 'tertiary',
      tone: 'light',
      state: 'hover',
      swatch: 'readable',
    })
  })
})

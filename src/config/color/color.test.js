/* global describe, it, expect, beforeEach */
import Color from 'color'

import ColorConfig, {
  defaultConfig,
  colors,
  tones,
  states,
  swatches,
  getColorValue,
  makeColorways,
  getSwatchPath,
} from './color'

describe('ColorConfig', () => {
  it('should return a ColorConfig instance', () => {
    const c = new ColorConfig()
    expect(c instanceof ColorConfig).toEqual(true)
  })

  describe('getColorway', () => {
    let c
    beforeEach(() => {
      c = new ColorConfig()
    })

    it('should return the expected color swatches when a color name is specified', () => {
      const cw = c.getColorway('primary')
      expect(cw).toEqual(c.colorways.primary.base.base)
    })

    it('should return the expected color swatches when a color name and shade are specified', () => {
      const cw = c.getColorway('secondary.dark')
      expect(cw).toEqual(c.colorways.secondary.dark.base)
    })

    it('should return the expected color swatches when a color name, shade, and variant are specified', () => {
      const cw = c.getColorway('tertiary.light.hover')
      expect(cw).toEqual(c.colorways.tertiary.light.hover)
    })

    it('should return a the expected color swatches when a color name, shade, and variant are specified', () => {
      const cw = c.getColorway('success.darker.base.readable')
      expect(cw).toEqual(c.colorways.success.darker.base)
    })
  })
})

describe('getColorValue', () => {
  it('should return a hex string', () => {
    const hex = '#FFBB00'
    const c = getColorValue(Color(hex))
    expect(c).toEqual(hex)
  })
})

describe('makeColorways', () => {
  it('should return a colorway for each pallet color', () => {
    const sorted = {
      colors: colors.sort(),
      tones: tones.sort(),
      states: states.sort(),
      swatches: swatches.sort(),
    }
    const result = makeColorways(defaultConfig)

    const colorways = Object.keys(result).sort()
    expect(colorways).toEqual(sorted.colors)

    colorways.forEach(i => {
      const colorTones = Object.keys(result[i]).sort()
      expect(colorTones).toEqual(sorted.tones)

      colorTones.forEach(j => {
        const toneStates = Object.keys(result[i][j]).sort()
        expect(toneStates).toEqual(sorted.states)

        toneStates.forEach(k => {
          const variantSwatches = Object.keys(result[i][j][k]).sort()
          expect(variantSwatches).toEqual(sorted.swatches)
        })
      })
    })
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

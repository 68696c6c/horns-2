/* global describe, it, expect, beforeEach */
import Color from 'color'

import ColorConfig, {
  defaultConfig,
  colors,
  shades,
  variants,
  swatches,
  getColorValue,
  makeColorways,
  getBackground,
  getProminent,
} from './color'

describe('ColorConfig', () => {
  it('should return a ColorConfig instance', () => {
    const c = new ColorConfig()
    expect(c instanceof ColorConfig).toEqual(true)
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
      shades: shades.sort(),
      variants: variants.sort(),
      swatches: swatches.sort(),
    }
    const result = makeColorways(defaultConfig)

    const colorways = Object.keys(result).sort()
    expect(colorways).toEqual(sorted.colors)

    colorways.forEach(i => {
      const colorShades = Object.keys(result[i]).sort()
      expect(colorShades).toEqual(sorted.shades)

      colorShades.forEach(j => {
        const shadeVariants = Object.keys(result[i][j]).sort()
        expect(shadeVariants).toEqual(sorted.variants)

        shadeVariants.forEach(k => {
          const variantSwatches = Object.keys(result[i][j][k]).sort()
          expect(variantSwatches).toEqual(sorted.swatches)
        })
      })
    })
  })
})

describe('getBackground', () => {
  let colorways
  beforeEach(() => {
    colorways = makeColorways(defaultConfig)
  })

  it('should return the dark colorway if the config is dark mode', () => {
    const result = getBackground('dark', colorways)
    expect(result).toEqual(colorways.dark)
  })

  it('should return the light colorway if the config is light mode', () => {
    const result = getBackground('light', colorways)
    expect(result).toEqual(colorways.light)
  })
})

describe('getProminent', () => {
  let colorways
  beforeEach(() => {
    colorways = makeColorways(defaultConfig)
  })

  it('should return the specified colorway if it is defined', () => {
    const result = getProminent('dark', colorways)
    expect(result).toEqual(colorways.dark)
  })

  it('should return a default colorway if the colorway is NOT defined', () => {
    const result = getProminent('wrongcolor', colorways)
    expect(result).toEqual(colorways.primary)
  })
})

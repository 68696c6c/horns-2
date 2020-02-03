/* global describe, it, expect, beforeEach */
import Color from 'color'

import ColorConfig, {
  defaultConfig,
  colors,
  tones,
  states,
  swatches,
  getColorValue,
  makeTones,
  makePallet,
  makeColorways,
  getSwatchPath,
} from '.'

// describe('ColorConfig', () => {
//   it('should return a ColorConfig instance', () => {
//     const c = new ColorConfig()
//     expect(c instanceof ColorConfig).toEqual(true)
//   })
//
//   describe('getColorway', () => {
//     let c
//     beforeEach(() => {
//       c = new ColorConfig()
//     })
//
//     it('should return the expected color swatches when a color name is specified', () => {
//       const cw = c.getColorway('primary')
//       expect(cw).toEqual(c.colorways.primary.base.base)
//     })
//
//     it('should return the expected color swatches when a color name and shade are specified', () => {
//       const cw = c.getColorway('secondary.dark')
//       expect(cw).toEqual(c.colorways.secondary.dark.base)
//     })
//
//     it('should return the expected color swatches when a color name, shade, and variant are specified', () => {
//       const cw = c.getColorway('tertiary.light.hover')
//       expect(cw).toEqual(c.colorways.tertiary.light.hover)
//     })
//
//     it('should return a the expected color swatches when a color name, shade, and variant are specified', () => {
//       const cw = c.getColorway('success.darker.base.readable')
//       expect(cw).toEqual(c.colorways.success.darker.base)
//     })
//   })
// })
//
// describe('getColorValue', () => {
//   it('should return a hex string', () => {
//     const hex = '#FFBB00'
//     const c = getColorValue(Color(hex))
//     expect(c).toEqual(hex)
//   })
// })

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

// describe('makeColorways', () => {
//   it('should return a colorway for each pallet color', () => {
//     const sorted = {
//       colors: colors.sort(),
//       tones: tones.sort(),
//       states: states.sort(),
//       swatches: swatches.sort(),
//     }
//     const result = makeColorways(defaultConfig)
//
//     const colorways = Object.keys(result).sort()
//     expect(colorways).toEqual(sorted.colors)
//
//     colorways.forEach(i => {
//       const colorTones = Object.keys(result[i]).sort()
//       expect(colorTones).toEqual(sorted.tones)
//
//       colorTones.forEach(j => {
//         const toneStates = Object.keys(result[i][j]).sort()
//         expect(toneStates).toEqual(sorted.states)
//
//         toneStates.forEach(k => {
//           const variantSwatches = Object.keys(result[i][j][k]).sort()
//           expect(variantSwatches).toEqual(sorted.swatches)
//         })
//       })
//     })
//   })
// })
//
// describe('getSwatchPath', () => {
//   it('should default to neutral when no colorway is provided', () => {
//     const result = getSwatchPath()
//     expect(result).toEqual({
//       color: 'neutral',
//       tone: 'base',
//       state: 'base',
//       swatch: 'base',
//     })
//   })
//
//   it('should default to neutral when an invalid colorway is provided', () => {
//     const result = getSwatchPath('asdf')
//     expect(result).toEqual({
//       color: 'neutral',
//       tone: 'base',
//       state: 'base',
//       swatch: 'base',
//     })
//   })
//
//   it('should default to base values when a color name is specified', () => {
//     const result = getSwatchPath('dark')
//     expect(result).toEqual({
//       color: 'dark',
//       tone: 'base',
//       state: 'base',
//       swatch: 'base',
//     })
//   })
//
//   it('should default to base values when a color name and shade are specified', () => {
//     const result = getSwatchPath('secondary.dark')
//     expect(result).toEqual({
//       color: 'secondary',
//       tone: 'dark',
//       state: 'base',
//       swatch: 'base',
//     })
//   })
//
//   it('should default to base values when a color name, shade, and variant are specified', () => {
//     const result = getSwatchPath('tertiary.light.hover')
//     expect(result).toEqual({
//       color: 'tertiary',
//       tone: 'light',
//       state: 'hover',
//       swatch: 'base',
//     })
//   })
//
//   it('should return the full path when a color name, shade, variant, and swatch are specified', () => {
//     const result = getSwatchPath('tertiary.light.hover.readable')
//     expect(result).toEqual({
//       color: 'tertiary',
//       tone: 'light',
//       state: 'hover',
//       swatch: 'readable',
//     })
//   })
// })

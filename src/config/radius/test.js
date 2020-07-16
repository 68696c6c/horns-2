/* global describe, it, expect, beforeEach */
import RadiusConfig, { radius as defaultConfig, unprefixRadius } from '.'
import SizingConfig from '../sizing'

describe('RadiusConfig', () => {
  let c
  beforeEach(() => {
    c = new RadiusConfig(new SizingConfig())
  })

  it('should return a RadiusConfig instance', () => {
    expect(c instanceof RadiusConfig).toEqual(true)
  })

  it('should throw an error if an invalid SizingConfig is provided', () => {
    expect(() => new RadiusConfig()).toThrowError()
  })

  describe('getCorners', () => {
    it('should return an object with a property for each corner', () => {
      const result = c.getCorners()
      expect(Object.keys(result).sort()).toEqual(
        ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'].sort()
      )
    })

    it('should set the corner values in pixels', () => {
      c = new RadiusConfig(new SizingConfig(), { all: 'xSmall' })
      const result = c.getCorners()
      expect(result.bottomRight).toContain('px')
    })

    it('should set all corners to the base size if individual corner radii are not specified', () => {
      c = new RadiusConfig(new SizingConfig({ medium: 8 }), {
        all: 'medium',
      })
      const result = c.getCorners()
      Object.keys(result).forEach(corner => {
        expect(result[corner]).toEqual('8px')
      })
    })

    it('should override the base size if an individual corner is specified', () => {
      c = new RadiusConfig(new SizingConfig({ medium: 8, large: 16 }), {
        all: 'medium',
        topLeft: 'large',
      })
      const result = c.getCorners()
      expect(result.topRight).toEqual('8px')
      expect(result.topLeft).toEqual('16px')
      expect(result.bottomRight).toEqual('8px')
      expect(result.bottomLeft).toEqual('8px')
    })

    it('should set the corner value to 50% if the "max" size is specified', () => {
      c = new RadiusConfig(new SizingConfig(), { all: 'max' })
      const result = c.getCorners()
      expect(result.topRight).toEqual('50%')
    })

    it('should set the corner value to "0px" if the size is min and min is zero', () => {
      c = new RadiusConfig(new SizingConfig({ min: 0 }), { all: 'min' })
      const result = c.getCorners()
      expect(result.bottomLeft).toEqual('0px')
    })
  })
})

describe('unprefixRadius', () => {
  it('should return an object with keys for each radius config value when no arguments are passed', () => {
    const result = unprefixRadius()
    const expected = Object.keys(defaultConfig)
    expect(Object.keys(result)).toEqual(expected)
  })
  it('should translate values correctly', () => {
    const result = unprefixRadius({
      radiusAll: 'radiusAll',
      radiusTop: 'radiusTop',
      radiusBottom: 'radiusBottom',
      radiusLeft: 'radiusLeft',
      radiusRight: 'radiusRight',
      radiusTopLeft: 'radiusTopLeft',
      radiusTopRight: 'radiusTopRight',
      radiusBottomLeft: 'radiusBottomLeft',
      radiusBottomRight: 'radiusBottomRight',
    })
    expect(result).toEqual({
      all: 'radiusAll',
      top: 'radiusTop',
      bottom: 'radiusBottom',
      left: 'radiusLeft',
      right: 'radiusRight',
      topLeft: 'radiusTopLeft',
      topRight: 'radiusTopRight',
      bottomLeft: 'radiusBottomLeft',
      bottomRight: 'radiusBottomRight',
    })
  })
})

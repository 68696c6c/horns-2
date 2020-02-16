/* global describe, it, expect, beforeEach */
import RadiusConfig, { corners } from '.'
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

  it('should create a corners property with properties for each corner', () => {
    expect(Object.keys(c.corners).sort()).toEqual(corners.sort())
  })

  it('should set the corner values in pixels', () => {
    c = new RadiusConfig(new SizingConfig(), { size: 'xSmall' })
    expect(c.corners.bottomRight).toContain('px')
  })

  it('should set all corners to the base size if individual corner radii are not specified', () => {
    c = new RadiusConfig(new SizingConfig({ medium: 8 }), {
      size: 'medium',
    })
    Object.keys(c.corners).forEach(corner => {
      expect(c.corners[corner]).toEqual('8px')
    })
  })

  it('should override the base size if an individual corner is specified', () => {
    c = new RadiusConfig(new SizingConfig({ medium: 8, large: 16 }), {
      size: 'medium',
      corners: {
        topLeft: 'large',
      },
    })
    expect(c.corners.topRight).toEqual('8px')
    expect(c.corners.topLeft).toEqual('16px')
    expect(c.corners.bottomRight).toEqual('8px')
    expect(c.corners.bottomLeft).toEqual('8px')
  })

  it('should set the corner value to 50% if the "max" size is specified', () => {
    c = new RadiusConfig(new SizingConfig(), { size: 'max' })
    expect(c.corners.topRight).toEqual('50%')
  })

  it('should set the corner value to null if the size is zero', () => {
    c = new RadiusConfig(new SizingConfig({ min: 0 }), { size: 'min' })
    expect(c.corners.bottomLeft).toBeNull()
  })

  describe('getRadius', () => {
    it('should return a corners object with a property for each corner', () => {
      const result = c.getRadius()
      expect(Object.keys(result).sort()).toEqual(corners.sort())
    })
  })
})

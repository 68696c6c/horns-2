/* global describe, it, expect, beforeEach */
import SizingConfig, { sizing, sizes, getSideSizes } from '.'
import { isNumber, isString } from '../utils'

describe('SizingConfig', () => {
  let c
  beforeEach(() => {
    c = new SizingConfig()
  })

  it('should return a SizingConfig instance', () => {
    expect(c instanceof SizingConfig).toEqual(true)
  })

  it('should create a size for each spacing size', () => {
    expect(Object.keys(c.sizes).sort()).toEqual(sizes.sort())
  })

  it('should set sizes as numbers', () => {
    Object.keys(c.sizes).forEach(size => {
      expect(isNumber(c.sizes[size])).toEqual(true)
    })
  })

  describe('getPX', () => {
    it('should return the specified size', () => {
      const result = c.getPX('min')
      expect(result).toEqual(`${sizing.min}px`)
    })
    it('should return a value as a string', () => {
      const result = c.getPX('max')
      expect(isString(result)).toEqual(true)
    })
    it('should return a value in pixels', () => {
      const result = c.getPX('giant')
      expect(result).toContain('px')
    })
    it('should return null if invalid size is specified', () => {
      const result = c.getPX('asdf')
      expect(result).toBeNull()
    })
  })

  describe('getValue', () => {
    it('should return the specified size', () => {
      const result = c.getValue('small')
      expect(result).toEqual(sizing.small)
    })
    it('should return the value as an integer', () => {
      const result = c.getValue('large')
      expect(isNumber(result)).toEqual(true)
    })
    it('should return null if invalid size is specified', () => {
      const result = c.getValue('fghjk')
      expect(result).toBeNull()
    })
  })

  describe('getSidesPX', () => {
    const sortedSides = ['top', 'bottom', 'left', 'right'].sort()

    it('should return values for top, bottom, left, and right', () => {
      const result = c.getSidesPX({ all: 'small' })
      expect(Object.keys(result).sort()).toEqual(sortedSides)
    })

    it('should return values in pixels', () => {
      const result = c.getSidesPX({ all: 'min' })
      Object.keys(result).forEach(side => {
        expect(result[side]).toContain('px')
      })
    })

    it('should return null for null values', () => {
      const result = c.getSidesPX({
        all: null,
        x: null,
        y: null,
        top: null,
        bottom: null,
        left: null,
        right: null,
      })
      Object.keys(result).forEach(side => {
        expect(result[side]).toBe(null)
      })
    })
  })
})

describe('getSideSizes', () => {
  const sortedSides = ['top', 'bottom', 'left', 'right'].sort()

  it('should return values for top, bottom, left, and right', () => {
    const result = getSideSizes({ all: 'medium' })
    expect(Object.keys(result).sort()).toEqual(sortedSides)
  })

  it('should return values for top, bottom, left, and right even if no args ar provided', () => {
    const result = getSideSizes()
    expect(Object.keys(result).sort()).toEqual(sortedSides)
  })

  it('should set all sides to the "all" value if no other sides are specified', () => {
    const result = getSideSizes({ all: 'medium' })
    Object.keys(result).forEach(side => {
      expect(result[side]).toEqual('medium')
    })
  })

  it('should set the top and bottom values to the "y" value if top and bottom are not specified', () => {
    const result = getSideSizes({ all: 'medium', y: 'small' })
    expect(result.top).toEqual('small')
    expect(result.bottom).toEqual('small')
    expect(result.left).toEqual('medium')
    expect(result.right).toEqual('medium')
  })

  it('should set the left and right values to the "x" value if left and right are not specified', () => {
    const result = getSideSizes({ all: 'large', x: 'xSmall' })
    expect(result.top).toEqual('large')
    expect(result.bottom).toEqual('large')
    expect(result.left).toEqual('xSmall')
    expect(result.right).toEqual('xSmall')
  })

  it('should set prioritize the "top" value over the "all" and "y" values', () => {
    const result = getSideSizes({ all: 'tiny', y: 'xSmall', top: 'small' })
    expect(result.top).toEqual('small')
    expect(result.bottom).toEqual('xSmall')
    expect(result.left).toEqual('tiny')
    expect(result.right).toEqual('tiny')
  })

  it('should set prioritize the "bottom" value over the "all" and "y" values', () => {
    const result = getSideSizes({ all: 'giant', y: 'max', bottom: 'min' })
    expect(result.top).toEqual('max')
    expect(result.bottom).toEqual('min')
    expect(result.left).toEqual('giant')
    expect(result.right).toEqual('giant')
  })

  it('should set prioritize the "left" value over the "all" and "x" values', () => {
    const result = getSideSizes({ all: 'small', x: 'medium', left: 'tiny' })
    expect(result.top).toEqual('small')
    expect(result.bottom).toEqual('small')
    expect(result.left).toEqual('tiny')
    expect(result.right).toEqual('medium')
  })

  it('should set prioritize the "right" value over the "all" and "x" values', () => {
    const result = getSideSizes({ all: 'medium', x: 'tiny', right: 'xLarge' })
    expect(result.top).toEqual('medium')
    expect(result.bottom).toEqual('medium')
    expect(result.left).toEqual('tiny')
    expect(result.right).toEqual('xLarge')
  })
})

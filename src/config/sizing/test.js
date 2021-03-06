/* global describe, it, expect, beforeEach */
import SizingConfig, { sizing, sizes } from '.'
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
      const result = c.getSidesPX({
        top: 'min',
        bottom: 'max',
        left: 'small',
        right: 'medium',
      })
      expect(result.top).toContain('px')
      expect(result.bottom).toContain('px')
      expect(result.left).toContain('px')
      expect(result.right).toContain('px')
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

/* global describe, it, expect, beforeEach */
import BorderConfig from '.'
import SizingConfig from '../sizing'
import { isString } from '../utils'

const sortedConfigSides = [
  'all',
  'x',
  'y',
  'top',
  'bottom',
  'left',
  'right',
].sort()
const sortedComputedSides = ['top', 'bottom', 'left', 'right'].sort()

describe('BorderConfig', () => {
  let c
  beforeEach(() => {
    c = new BorderConfig(new SizingConfig())
  })

  it('should return a BorderConfig instance', () => {
    expect(c instanceof BorderConfig).toEqual(true)
  })

  it('should throw an error if an invalid SizingConfig is provided', () => {
    expect(() => new BorderConfig()).toThrowError()
  })

  it('should create a borderSides property with properties for all configurable sides', () => {
    const borderSides = Object.keys(c.borderSides)
    expect(borderSides.sort()).toEqual(sortedConfigSides)
  })

  it('should create width and style properties for all borderSides', () => {
    const sortedProps = ['style', 'width'].sort()
    Object.keys(c.borderSides).forEach(s => {
      expect(Object.keys(c.borderSides[s]).sort()).toEqual(sortedProps)
    })
  })

  describe('getSidesWidth', () => {
    it('should return an object with properties for each computed side', () => {
      const result = c.getSidesWidth()
      expect(Object.keys(result).sort()).toEqual(sortedComputedSides)
    })
    it('should return values in pixels', () => {
      const result = c.getSidesWidth()
      Object.keys(result).forEach(s => {
        expect(result[s]).toContain('px')
      })
    })
  })

  describe('getSidesStyle', () => {
    it('should return an object with properties for each computed side', () => {
      const result = c.getSidesStyle()
      expect(Object.keys(result).sort()).toEqual(sortedComputedSides)
    })
    it('should return values as strings', () => {
      const result = c.getSidesStyle()
      Object.keys(result).forEach(s => {
        expect(isString(result[s])).toEqual(true)
      })
    })
  })
})

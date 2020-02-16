/* global describe, it, expect, beforeEach */
import BorderConfig from '.'
import SizingConfig from '../sizing'

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

  it('should create a borders property with width and style properties', () => {
    expect(Object.keys(c.borders).sort()).toEqual(['style', 'width'].sort())
  })

  describe('getBorder', () => {
    it('should return a object with width and style properties', () => {
      const result = c.getBorder()
      expect(Object.keys(result).sort()).toEqual(['style', 'width'].sort())
    })
    it('should return a null width if the width is 0', () => {
      c = new BorderConfig(new SizingConfig(), { width: 'min' })
      const result = c.getBorder()
      expect(result.width).toBeNull()
    })
    it('should return a null style if the style is "none"', () => {
      c = new BorderConfig(new SizingConfig(), { style: 'none' })
      const result = c.getBorder()
      expect(result.style).toBeNull()
    })
  })
})

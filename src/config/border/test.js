/* global describe, it, expect, beforeEach */
import BorderConfig from '.'
import SizingConfig from '../sizing'
import { isString } from '../utils'

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

  describe('getBorders', () => {
    it('should return an object with properties for each computed side', () => {
      const result = c.getBorders()
      expect(Object.keys(result).sort()).toEqual(sortedComputedSides)
    })

    it('should return width and style properties for each computed side', () => {
      const sortedProps = ['style', 'width'].sort()
      const result = c.getBorders()
      Object.keys(result).forEach(s => {
        expect(Object.keys(result[s]).sort()).toEqual(sortedProps)
      })
    })

    it('should return width values in pixels', () => {
      const result = c.getBorders()
      Object.keys(result).forEach(s => {
        expect(result[s].width).toContain('px')
      })
    })

    it('should return style values as strings', () => {
      const result = c.getBorders()
      Object.keys(result).forEach(s => {
        expect(isString(result[s].style)).toEqual(true)
      })
    })
  })
})

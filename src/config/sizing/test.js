/* global describe, it, expect, beforeEach */
import SizingConfig, { sizing, sizes } from '.'

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

  describe('getPX', () => {
    it('should return the specified size', () => {
      const result = c.getPX('min')
      expect(result).toEqual(sizing.min)
    })
    it('should return a value in pixels', () => {
      const result = c.getPX('max')
      expect(result).toContain('px')
    })
    it('should return null if invalid size is specified', () => {
      const result = c.getPX('asdf')
      expect(result).toBeNull()
    })
  })
})

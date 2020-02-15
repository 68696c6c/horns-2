/* global describe, it, expect, beforeEach */
import SpacingConfig, { spacing, spacingSizes } from '.'

describe('SpacingConfig', () => {
  let c
  beforeEach(() => {
    c = new SpacingConfig()
  })

  it('should return a SpacingConfig instance', () => {
    expect(c instanceof SpacingConfig).toEqual(true)
  })

  it('should create a size for each spacing size', () => {
    expect(Object.keys(c.sizes).sort()).toEqual(spacingSizes.sort())
  })

  describe('getSpacing', () => {
    it('should return the specified size', () => {
      const result = c.getSpacing('min')
      expect(result).toEqual(spacing.min)
    })
    it('should return null if invalid size is specified', () => {
      const result = c.getSpacing('asdf')
      expect(result).toBeNull()
    })
  })
})

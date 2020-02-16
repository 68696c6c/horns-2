/* global describe, it, expect, beforeEach */
import GridConfig, { breakpoints } from '.'
import SizingConfig from '../sizing'

describe('GridConfig', () => {
  let c
  beforeEach(() => {
    c = new GridConfig(new SizingConfig())
  })

  it('should return a GridConfig instance', () => {
    expect(c instanceof GridConfig).toEqual(true)
  })

  it('should throw an error if an invalid SizingConfig is provided', () => {
    expect(() => new GridConfig()).toThrowError()
  })

  it('should set the number of columns based on the minimum column size and max breakpoint', () => {
    c = new GridConfig(new SizingConfig(), {
      columnMin: '100px',
      breakpoints: { max: '1000px' },
    })
    expect(c.columns).toBe(10)
  })
})

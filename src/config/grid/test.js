/* global describe, it, expect, beforeEach */
import GridConfig from '.'
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

  it('should set breakpoints in pixels', () => {
    const bps = Object.keys(c.breakpoints).sort()
    bps.forEach(breakpoint => {
      expect(c.breakpoints[breakpoint]).toContain('px')
    })
  })

  it('should set a "mobile" breakpoint based on the configured settings', () => {
    c = new GridConfig(new SizingConfig(), {
      columnMin: '100px',
      breakpoints: { mobile: 'medium' },
    })
    expect(c.breakpoints.mobile).toEqual(c.breakpoints.medium)
  })

  describe('getGap', () => {
    it('should return the configured gap in pixels', () => {
      const result = c.getGap()
      expect(result).toContain('px')
    })
  })

  describe('getColumnMin', () => {
    it('should return the configured column min width in pixels', () => {
      c = new GridConfig(new SizingConfig(), { columnMin: '200px' })
      const result = c.getColumnMin()
      expect(result).toBe('200px')
    })
  })

  describe('getBreakpoint', () => {
    it('should return the specified breakpoint', () => {
      const result = c.getBreakpoint('large')
      expect(result).toEqual(c.breakpoints.large)
    })
    it('should return the mobile breakpoint if the specified breakpoint does not exist', () => {
      const result = c.getBreakpoint('asdf')
      expect(result).toEqual(c.breakpoints.mobile)
    })
    it('should return the mobile breakpoint if a breakpoint is not specified', () => {
      const result = c.getBreakpoint()
      expect(result).toEqual(c.breakpoints.mobile)
    })
  })

  describe('break', () => {
    it('should return a CSS media query for the specified breakpoint', () => {
      const result = c.break('small')
      expect(result).toEqual(`@media (min-width: ${c.breakpoints.small})`)
    })
    it('should return a CSS media query for the mobile breakpoint if the specified breakpoint does not exist', () => {
      const result = c.break('asdfasgd')
      expect(result).toEqual(`@media (min-width: ${c.breakpoints.mobile})`)
    })
    it('should return a CSS media query for the mobile breakpoint if a breakpoint is not specified', () => {
      const result = c.break()
      expect(result).toEqual(`@media (min-width: ${c.breakpoints.mobile})`)
    })
  })
})

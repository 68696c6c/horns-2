/* global describe, it, expect, beforeEach */
import TypographyConfig from '.'

describe('TypographyConfig', () => {
  let c
  beforeEach(() => {
    c = new TypographyConfig()
  })

  it('should return a TypographyConfig instance', () => {
    expect(c instanceof TypographyConfig).toEqual(true)
  })

  // @TODO test getStyle
  // @TODO test makeTypographyStyle
})

/* global describe, it, expect, beforeEach */
import TypographyConfig, { fontStyles, makeTypographyStyle } from '.'

describe('TypographyConfig', () => {
  let c
  beforeEach(() => {
    c = new TypographyConfig()
  })

  it('should return a TypographyConfig instance', () => {
    expect(c instanceof TypographyConfig).toEqual(true)
  })

  it('should create a style for each style and heading level', () => {
    expect(Object.keys(c.styles).sort()).toEqual(fontStyles.sort())
  })

  describe('getStyle', () => {
    it('should return the specified style', () => {
      const result = c.getStyle('paragraph')
      expect(result).toEqual(c.styles.paragraph)
    })
    it('should return the default text style if an invalid style is specified', () => {
      const result = c.getStyle('asdf')
      expect(result).toEqual(c.styles.text)
    })
  })
})

describe('makeTypographyStyle', () => {
  let c
  beforeEach(() => {
    c = new TypographyConfig()
  })

  it('should set the font size for headings correctly', () => {
    const result = makeTypographyStyle(c.config, 'heading', 'h1')
    expect(result.fontSize).toEqual(c.config.sizes.h1)
  })
  it('should set the font size for non-headings correctly', () => {
    const result = makeTypographyStyle(c.config, 'paragraph')
    expect(result.fontSize).toEqual(c.config.sizes.base)
  })
  it('should set the text justify property if the style alignment is "justify"', () => {
    const result = makeTypographyStyle(c.config, 'paragraph')
    expect(result.textJustify).not.toBeNull()
  })
})

import { mergeConfigs } from '../utils'

import defaultConfig from './config'

const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const fontStyles = [
  ...headingLevels,
  'paragraph',
  'quote',
  'text',
  'label',
  'message',
  'button',
  'link',
  'caption',
  'legal',
  'code',
  'emphasized',
  'strong',
  'variable',
]

// @TODO support custom fonts
// @TODO set initial kerning and tracking based on font-family
// @TODO implement null values
// @TODO implement nested styles for things like first-letter/word-of-paragraph, brand names, spell-checker styles, syntax highlighting, etc.
export const makeTypographyStyle = (c, styleName, level = 'h1') => {
  const s = c.styles[styleName]
  const family = c.families[s.family]
  const decoration = c.decorations[s.decoration]
  const decorationHover = c.decorations[s.hover.decoration]
  const decorationActive = c.decorations[s.active.decoration]
  const fontSize = styleName === 'heading' ? c.sizes[level] : c.sizes[s.size]
  const textIndent = c.indent[s.indent]
  const letterSpacing = c.tracking[s.tracking]
  const margin = c.spacing[s.spacing]
  const fontWeight = c.weights[s.weight]
  return {
    fontFamily: `${family.base}, ${family.fallback}`,
    fontKerning: null,
    fontSize,
    fontStretch: null,
    fontStyle: s.style,
    fontVariant: null,
    fontWeight,
    letterSpacing,
    lineHeight: c.letting[s.letting],
    quotes: null,
    textAlign: s.align,
    textAlignLast: null,
    textDecorationColor: null,
    textDecorationLine: decoration.line,
    textDecorationStyle: decoration.style,
    textIndent,
    textJustify: s.align === 'justify' ? s.justify : null,
    textOverflow: null,
    textShadow: null,
    textTransform: null,
    wordBreak: null,
    wordSpacing: null,
    wordWrap: null,
    writingMode: null,
    margin,
    hover: {
      textDecorationLine: decorationHover.line,
      textDecorationStyle: decorationHover.style,
    },
    active: {
      textDecorationLine: decorationActive.line,
      textDecorationStyle: decorationActive.style,
    },
  }
}

class TypographyConfig {
  constructor(config = {}) {
    this.config = mergeConfigs(config, defaultConfig)

    const styles = {}
    fontStyles.forEach(styleName => {
      if (!headingLevels.includes(styleName)) {
        styles[styleName] = makeTypographyStyle(this.config, styleName)
      }
    })

    headingLevels.forEach(level => {
      const style = makeTypographyStyle(this.config, 'heading', level)
      style.fontSize = this.config.sizes[level]
      styles[level] = style
    })
    this.styles = styles
  }

  getStyle(style) {
    if (this.styles[style]) {
      return this.styles[style]
    }
    return this.styles.text
  }
}

export default TypographyConfig

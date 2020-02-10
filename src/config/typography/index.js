import { mergeConfigs } from '../utils'

import defaultConfig from './config'

export const fontStyles = [
  'paragraph',
  'heading',
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
// @TODO implement hardcoded values
export const makeTypographyStyle = (config, styleName) => {
  const style = config.styles[styleName]
  const family = config.families[style.family]
  const decoration = config.decorations[style.decoration]
  const decorationHover = config.decorations[style.hover.decoration]
  const decorationActive = config.decorations[style.active.decoration]
  const fontSize = styleName === 'heading' ? '' : config.sizes[style.size]
  const textIndent =
    styleName === 'paragraph' ? config.indent.paragraph : config.indent.base
  const letterSpacing = config.tracking[style.tracking]
  const fontWeight = config.weights[style.weight]
  return {
    fontFamily: `${family.base}, ${family.fallback}`,
    fontKerning: 'auto',
    fontSize,
    fontStretch: 'normal',
    fontStyle: style.style,
    fontVariant: 'normal',
    fontWeight,
    letterSpacing,
    lineHeight: config.letting[style.letting],
    quotes: 'initial',
    textAlign: style.align,
    textAlignLast: 'auto',
    textDecorationColor: 'inherit',
    textDecorationLine: decoration.line,
    textDecorationStyle: decoration.style,
    textIndent,
    textJustify: style.align === 'justify' ? style.justify : 'auto',
    textOverflow: 'clip',
    textShadow: 'none',
    textTransform: 'none',
    wordBreak: 'normal',
    wordSpacing: 'normal',
    wordWrap: 'normal',
    writingMode: 'horizontal-tb',
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
      styles[styleName] = makeTypographyStyle(this.config, styleName)
    })
    this.styles = styles
  }

  getStyle(style) {
    if (this.styles[style]) {
      return this.styles[style]
    }
    return this.styles.text
  }

  getBlockStyle(level) {
    if (level === 'paragraph') {
      const style = this.getStyle('paragraph')
      style.margin = this.config.spacing.paragraph
      return style
    }
    const fontSize = this.config.sizes[level]
      ? this.config.sizes[level]
      : this.config.sizes.base
    const style = this.getStyle('heading')
    style.fontSize = fontSize
    style.margin = this.config.spacing.heading
    return style
  }
}

export default TypographyConfig

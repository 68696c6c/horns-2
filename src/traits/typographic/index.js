import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { fontStyles } from '../../config'

// eslint-disable-next-line import/prefer-default-export
export const typographic = {
  styles: [
    ({ theme, font }) => {
      const style = theme.typography.getStyle(font)
      return css`
        font-family: ${style.fontFamily};
        font-kerning: ${style.fontKerning};
        font-size: ${style.fontSize};
        font-stretch: ${style.fontStretch};
        font-style: ${style.fontStyle};
        font-variant: ${style.fontVariant};
        font-weight: ${style.fontWeight};
        letter-spacing: ${style.letterSpacing};
        line-height: ${style.lineHeight};
        quotes: ${style.quotes};
        text-align: ${style.textAlign};
        text-align-last: ${style.textAlignLast};
        text-decoration-color: ${''};
        text-decoration-line: ${style.textDecorationLine};
        text-decoration-style: ${style.textDecorationStyle};
        text-indent: ${style.textIndent};
        text-justify: ${style.textJustify};
        text-overflow: ${style.textOverflow};
        text-shadow: ${style.textShadow};
        text-transform: ${style.textTransform};
        word-break: ${style.wordBreak};
        word-spacing: ${style.wordSpacing};
        word-wrap: ${style.wordWrap};
        writing-mode: ${style.writingMode};
        margin: ${style.margin};
      `
    },
  ],
  propTypes: () => ({
    font: PropTypes.oneOf(fontStyles),
  }),
  defaultProps: (font = 'text') => ({ font }),
}

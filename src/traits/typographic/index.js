import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { fontStyles } from '../../config'

// eslint-disable-next-line import/prefer-default-export
export const typographic = {
  styles: [
    ({ theme, font, align, interactive }) => {
      const style = theme.typography.getStyle(font)
      const { hover, active } = style
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
        text-align: ${align || style.textAlign};
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
        ${interactive &&
          css`
            &:hover {
              text-decoration-line: ${hover.textDecorationLine};
              text-decoration-style: ${hover.textDecorationStyle};
            }
            &:active {
              text-decoration-line: ${active.textDecorationLine};
              text-decoration-style: ${active.textDecorationStyle};
            }
          `}
      `
    },
  ],
  propTypes: () => ({
    font: PropTypes.oneOf(fontStyles),
    align: PropTypes.oneOf(['', 'left', 'center', 'right', 'justify']),
    interactive: PropTypes.bool,
  }),
  defaultProps: (font = 'text', align = '', interactive = false) => ({
    font,
    align,
    interactive,
  }),
}

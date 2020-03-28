import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { chromatic, typographic } from '../../../traits'

export const listTypes = {
  ordered: [
    'armenian',
    'cjk-ideographic',
    'decimal',
    'decimal-leading-zero',
    'georgian',
    'hebrew',
    'hiragana',
    'hiragana-iroha',
    'katakana',
    'katakana-iroha',
    'lower-alpha',
    'lower-greek',
    'lower-latin',
    'lower-roman',
    'none',
    'upper-alpha',
    'upper-greek',
    'upper-latin',
    'upper-roman',
  ],
  unordered: {
    disc: '●',
    circle: '○',
    none: '',
    square: '■',
  },
}

export const baseList = {
  styles: () => [
    typographic.styles,
    ({ theme, color }) => {
      const c = theme.color.getColorway(color)
      return css`
        list-style-type: none;
        list-style-position: inside;
        padding-left: 0;
        .icon {
          color: ${color === 'background' ? c.base.readable : c.base.base};
        }
      `
    },
  ],
  propTypes: () => ({
    ...chromatic.propTypes(),
    ...typographic.propTypes(),
    ordered: PropTypes.bool,
  }),
  defaultProps: () => ({
    ...chromatic.defaultProps(null, true),
    ...typographic.defaultProps(),
    ordered: false,
  }),
}

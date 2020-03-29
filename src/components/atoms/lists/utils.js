import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { chromatic, typographic } from '../../../traits'

export const LIST_COUNTER = 'li'

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
  unordered: ['disc', 'circle', 'none', 'square'],
}

export const unorderedTypeMap = {
  disc: '●',
  circle: '○',
  none: ' ',
  square: '■',
}

export const getListItemMarker = (type, isItem, counter) => {
  let content
  if (type === 'none') {
    content = `' '`
  } else if (listTypes.ordered.indexOf(type) > -1) {
    content = `counter(${counter}, ${type}) '.'`
  } else if (listTypes.unordered.indexOf(type) > -1) {
    content = `'${unorderedTypeMap.disc}'`
    if (type && unorderedTypeMap[type]) {
      content = `'${unorderedTypeMap[type]}'`
    }
  }
  if (isItem) {
    content = `${content} !important`
  }
  return content
}

export const baseList = {
  styles: () => [
    typographic.styles,
    ({ theme, color }) => {
      const c = theme.color.getColorway(color)
      return css`
        list-style-type: none;
        list-style-position: inside;
        padding-left: 1em;
        .marker {
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

import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const getStart = start => {
  const areas = [
    null,
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
  ]
  return start !== null && areas[start] ? areas[start] : null
}

const getEnd = span => (span && span > 1 ? `span ${span}` : null)

const baseSpans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const spans = [null, ...baseSpans]

// eslint-disable-next-line import/prefer-default-export
export const cellular = {
  styles: ({
    theme,
    span,
    spanMin,
    spanSm,
    spanMd,
    spanLg,
    spanMax,
    start,
    startMin,
    startSm,
    startMd,
    startLg,
    startMax,
  }) => {
    return css`
      grid-column-start: ${getStart(start)};
      grid-column-end: ${getEnd(span)};
      ${theme.grid.break('min')} {
        grid-column-start: ${getStart(startMin)};
        grid-column-end: ${getEnd(spanMin)};
      }
      ${theme.grid.break('small')} {
        grid-column-start: ${getStart(startSm)};
        grid-column-end: ${getEnd(spanSm)};
      }
      ${theme.grid.break('medium')} {
        grid-column-start: ${getStart(startMd)};
        grid-column-end: ${getEnd(spanMd)};
      }
      ${theme.grid.break('large')} {
        grid-column-start: ${getStart(startLg)};
        grid-column-end: ${getEnd(spanLg)};
      }
      ${theme.grid.break('max')} {
        grid-column-start: ${getStart(startMax)};
        grid-column-end: ${getEnd(spanMax)};
      }
    `
  },
  propTypes: () => ({
    span: PropTypes.oneOf(baseSpans),
    spanMin: PropTypes.oneOf(spans),
    spanSm: PropTypes.oneOf(spans),
    spanMd: PropTypes.oneOf(spans),
    spanLg: PropTypes.oneOf(spans),
    spanMax: PropTypes.oneOf(spans),
    start: PropTypes.oneOf(spans),
    startMin: PropTypes.oneOf(spans),
    startSm: PropTypes.oneOf(spans),
    startMd: PropTypes.oneOf(spans),
    startLg: PropTypes.oneOf(spans),
    startMax: PropTypes.oneOf(spans),
  }),
  defaultProps: () => ({
    span: 1,
    spanMin: null,
    spanSm: null,
    spanMd: null,
    spanLg: null,
    spanMax: null,
    start: null,
    startMin: null,
    startSm: null,
    startMd: null,
    startLg: null,
    startMax: null,
  }),
}

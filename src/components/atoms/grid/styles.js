import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  chromatic,
  contained,
  gridded,
  margined,
  padded,
  responsive,
} from '../../../traits'

const getSpan = (span, offset) => {
  const col = []
  if (span && span > 1) {
    col.push(`span ${span}`)
  }
  if (offset && offset > 0) {
    col.push(`span ${offset}`)
  }
  return col.join(' / ')
}

const getStart = (areaInt, offset) => {
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
  return offset ? areas[areaInt] : null
}
const getEnd = span => (span && span > 1 ? `span ${span}` : null)

export const Column = styled.div(
  chromatic.styles,
  padded.styles,
  margined.styles,
  responsive.styles,
  ({
    theme,
     position,
    span,
    spanMin,
    spanSm,
    spanMd,
    spanLg,
    spanMax,
    offset,
    offsetMin,
    offsetSm,
    offsetMd,
    offsetLg,
    offsetMax,
  }) => {
    return css`
      grid-column-start: ${getStart(position.base, offset)};
      grid-column-end: ${getEnd(span)};
      ${theme.grid.break('min')} {
        grid-column-start: ${getStart(position.min, offsetMin)};
        grid-column-end: ${getEnd(spanMin)};
      }
      ${theme.grid.break('small')} {
        grid-column-start: ${getStart(position.sm, offsetSm)};
        grid-column-end: ${getEnd(spanSm)};
      }
      ${theme.grid.break('medium')} {
        grid-column-start: ${getStart(position.md, offsetMd)};
        grid-column-end: ${getEnd(spanMd)};
      }
      ${theme.grid.break('large')} {
        grid-column-start: ${getStart(position.lg, offsetLg)};
        grid-column-end: ${getEnd(spanLg)};
      }
      ${theme.grid.break('max')} {
        grid-column-start: ${getStart(position.max, offsetMax)};
        grid-column-end: ${getEnd(spanMax)};
      }
    `
  }
)

export const Grid = styled.div(
  chromatic.styles,
  contained.styles,
  gridded.styles,
  margined.styles,
  padded.styles,
  responsive.styles,
  () => {
    return css`
      grid-template-areas: 'one two three four five six seven eight nine ten eleven twelve';
    `
  }
)

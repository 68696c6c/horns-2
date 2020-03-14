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

export const Column = styled.div(
  chromatic.styles,
  padded.styles,
  margined.styles,
  responsive.styles,
  ({
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

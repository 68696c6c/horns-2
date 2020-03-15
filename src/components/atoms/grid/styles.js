import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  cellular,
  chromatic,
  contained,
  containedSplit,
  gridded,
  margined,
  padded,
  responsive,
} from '../../../traits'

const baseStyles = [
  chromatic.styles,
  gridded.styles,
  margined.styles,
  padded.styles,
  responsive.styles,
]

export const Area = styled.div(
  chromatic.styles,
  padded.styles,
  margined.styles,
  ({ area }) =>
    css`
      grid-area: ${area && area};
    `
)

export const Column = styled.div(
  cellular.styles,
  chromatic.styles,
  padded.styles,
  margined.styles,
  responsive.styles
)

export const Areas = styled.div(
  ...baseStyles,
  contained.styles,
  ({ areas }) => css`
    grid-template-areas: ${areas};
  `
)

export const Columns = styled.div(
  ...baseStyles,
  contained.styles,
  ({ theme, columns }) => {
    let template = `repeat(${columns}, 1fr)`
    if (columns === 0) {
      const min = theme.grid.getColumnMin()
      template = `repeat(auto-fit, minmax(${min}, 1fr))`
    }
    return css`
      grid-template-columns: ${template};
    `
  }
)

export const Grid = styled.div(
  ...baseStyles,
  contained.styles,
  () => css`
    grid-template-areas: 'one two three four five six seven eight nine ten eleven twelve';
  `
)

export const Halves = styled.div(
  ...baseStyles,
  containedSplit.styles,
  () => css`
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    > :nth-child(odd) {
      grid-area: left;
    }
    > :nth-child(even) {
      grid-area: right;
    }
  `
)

export const Thirds = styled.div(
  ...baseStyles,
  containedSplit.styles,
  ({ reversed }) => css`
    grid-template-columns: ${reversed ? '2fr 1fr' : '1fr 2fr'};
    grid-template-areas: 'left right';
    > :nth-child(odd) {
      grid-area: left;
    }
    > :nth-child(even) {
      grid-area: right;
    }
  `
)

import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const ToggleGroup = styled.div(
  ({ theme, length }) => css`
    column-width: ${theme.grid.getColumnMin()};
    column-count: ${Math.floor(length / 3) || 1};
    margin-top: -0.25em;
    margin-bottom: -0.25em;
  `
)

export const ToggleGroupOption = styled.div(
  () => css`
    display: flex;
    align-items: center;
    break-inside: avoid-column;
    clear: left;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    .label {
      margin-inline-start: 0.333em;
      margin-inline-end: 0.6666em;
    }
  `
)

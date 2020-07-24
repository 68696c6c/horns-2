import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { chromaticSurface } from '../../../traits'
import { table } from '../../../macros'

// eslint-disable-next-line import/prefer-default-export
export const TableResponsive = styled.table(
  ...table.styles(),
  ({ theme, breakpoint, minWidth }) => css`
    thead {
      display: none;
    }
    tbody:nth-child(odd) {
      ${chromaticSurface.styles({
        theme,
        tone: 'secondary',
      })};
    }
    ${theme.grid.break(breakpoint)} {
      min-width: ${minWidth && minWidth};
      thead {
        display: table-header-group;
      }
      tbody {
        display: table-row;
        tr {
          display: table-cell;
          th {
            display: none;
          }
          td {
            display: block;
          }
        }
      }
    }
  `
)

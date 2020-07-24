import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { chromaticSurface } from '../../../traits'
import { table } from '../../../macros'

// eslint-disable-next-line import/prefer-default-export
export const Table = styled.table(
  ...table.styles(),
  ({ theme, minWidth }) => css`
    min-width: ${minWidth && minWidth};

    tbody tr:nth-child(odd),
    tr:nth-child(odd):not(:nth-child(1)) {
      ${chromaticSurface.styles({
        theme,
        tone: 'secondary',
      })};
    }
  `
)

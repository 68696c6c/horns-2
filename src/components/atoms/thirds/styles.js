import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { containedSplit } from '../../../traits'

import { grid } from '../_base/grid'

// eslint-disable-next-line import/prefer-default-export
export const Thirds = styled.div(
  ...grid.styles(),
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

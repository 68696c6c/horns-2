import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { baseList, getListItemMarker } from '../utils'

// eslint-disable-next-line import/prefer-default-export
export const ListOrdered = styled.ol(
  ...baseList.styles(),
  ({ type, counter }) => css`
    counter-reset: ${counter};
    .list-item {
      display: flex;
      align-items: center;
    }
    .marker {
      counter-increment: ${counter};
      justify-content: flex-end;
      padding-right: 0.5em;
      &:not(.icon)::before {
        content: ${getListItemMarker(type, false)};
      }
    }
  `
)

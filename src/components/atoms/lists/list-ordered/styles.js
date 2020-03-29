import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { typographic } from '../../../../traits'

import { baseList, getListItemMarker, orderedTypeMap } from '../utils'

// eslint-disable-next-line import/prefer-default-export
export const ListOrdered = styled.ol(
  ...baseList.styles(),
  ({ counter, type }) => css`
    list-style-type: ${orderedTypeMap[type]};
    counter-reset: ${counter};
    > .list-item {
      display: flex;
      align-items: center;
      .marker {
        counter-increment: ${counter};
        justify-content: flex-end;
        padding-right: 0.5em;
        &::before {
          content: ${getListItemMarker({ type, counter }, false)};
        }
      }
    }
`
)

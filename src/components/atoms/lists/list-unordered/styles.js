import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { baseList, getListItemMarker } from '../utils'

// eslint-disable-next-line import/prefer-default-export
export const ListUnordered = styled.ul(...baseList.styles(), ({ type, counter }) => {
  return css`
    .list-item {
      display: grid;
      grid-template-columns: 2em auto;
      align-items: center;
      .marker {
        justify-content: center;
        &:not(.icon)::before {
          content: ${getListItemMarker(type, false, counter)};
        }
        > * {
          width: 1em;
        }
      }
    }
  `
})

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { baseList, listTypes } from '../utils'

// eslint-disable-next-line import/prefer-default-export
export const ListUnordered = styled.ul(
  ...baseList.styles(),
  ({ type }) => css`
    .list-item {
      display: grid;
      grid-template-columns: 2em auto;
      align-items: center;
    }
    .icon {
      justify-content: center;
      &.bullet::before {
        content: '${listTypes.unordered[type] || listTypes.unordered.disc}';
      }
      > * {
        width: 1em;
      }
    }
  `
)

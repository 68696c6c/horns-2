import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { baseList } from '../utils'

const LIST_COUNTER = 'li'

// eslint-disable-next-line import/prefer-default-export
export const ListOrdered = styled.ol(
  ...baseList.styles(),
  () => css`
    counter-reset: ${LIST_COUNTER};
    .list-item {
      display: flex;
      align-items: center;
    }
    .icon {
      counter-increment: ${LIST_COUNTER};
      justify-content: flex-end;
      padding-right: 0.5em;
      &.bullet {
        width: 2em;
        &::before {
          content: counter(${LIST_COUNTER}) '.';
        }
      }
    }
  `
)

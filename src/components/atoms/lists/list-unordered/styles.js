import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { baseList, listTypes } from '../utils'

// eslint-disable-next-line import/prefer-default-export
export const ListUnordered = styled.ul(...baseList.styles(), ({ type }) => {
  let content = null
  if (type) {
    content = listTypes.unordered[type] || listTypes.unordered.disc
    content = `'${content}'`
  }
  return css`
    .list-item {
      display: grid;
      grid-template-columns: 2em auto;
      align-items: center;
      .icon {
        justify-content: center;
        &.bullet::before {
          content: ${content};
        }
        > * {
          width: 1em;
        }
      }
    }
  `
})

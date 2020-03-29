import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { typographic } from '../../../../traits'

import { baseList, getListItemMarker } from '../utils'

// eslint-disable-next-line import/prefer-default-export
export const ListUnordered = styled.ul(
  ...baseList.styles(),
  ({ type }) => {
  return css`
    list-style-type: none;
    .list-item {
      display: grid;
      grid-template-columns: 2em auto;
      align-items: center;
      margin-left: -2em;
      .marker {
        justify-content: center;
        &:not(.icon)::before {
          content: ${getListItemMarker({ type }, false)};
        }
        > * {
          width: 1em;
        }
      }
    }
  `
})

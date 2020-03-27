import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { listTypes } from '../../utils'
import { typographic } from '../../../traits'

const LIST_COUNTER = 'li'

export const ListItem = styled.li(
  typographic.styles,
  () => css`
    display: flex;
    align-items: center;
  `
)

export const ListItemIcon = styled.i(({ theme, color }) => {
  const c = theme.color.getColorway(color)
  return css`
    display: inline-flex;
    justify-content: flex-end;
    font-style: unset;
    color: ${color === 'background' ? c.base.readable : c.base.base} !important;
    width: 2em;
    &::before {
      display: inline-flex;
      font-size: 1em;
      line-height: 1em;
      height: 1em;
    }
  `
})

const baseStyles = [
  typographic.styles,
  ({ theme, color }) => {
    const c = theme.color.getColorway(color)
    return css`
      list-style-type: none;
      padding-left: 0;
      .icon {
        color: ${color === 'background' ? c.base.readable : c.base.base};
      }
    `
  },
]

export const ListOrdered = styled.ol(...baseStyles, () => {
  return css`
    counter-reset: ${LIST_COUNTER};
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
})

export const ListUnordered = styled.ul(...baseStyles, ({ type }) => {
  const content = listTypes.unordered[type] || listTypes.unordered.disc
  return css`
    .icon {
      justify-content: center;
      &.bullet::before {
        content: '${content}';
      }
      > * {
        width: 1em;
      }
    }
  `
})

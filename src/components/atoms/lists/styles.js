import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { chromatic, typographic } from '../../../traits'

const LIST_COUNTER = 'li'

export const ListItem = styled.li(
  // chromatic.styles,
  typographic.styles,
  ({ theme, color, counter }) => {
    const c = theme.color.getColorway(color)
    const content = counter ? `'${counter}'` : `counter(${LIST_COUNTER})`
    return css`
      &::before {
        color: ${color === 'background' ? c.base.readable : c.base.base} !important;
        content: ${content} '.';
        margin-right: 0.25em;
        display: inline-flex;
        justify-content: flex-end;
      }
    `
  }
)

const baseStyles = [
  typographic.styles,
  ({ theme, color }) => {
    const c = theme.color.getColorway(color)
    return css`
      list-style-type: none;
      li::before {
        color: ${color === 'background' ? c.base.readable : c.base.base};
      }
    `
  },
]

export const ListOrdered = styled.ol(...baseStyles, () => {
  return css`
    padding-left: 2em;
    counter-reset: ${LIST_COUNTER};
    li::before {
      counter-increment: ${LIST_COUNTER};
      width: 2em;
      margin-left: -2em;
    }
  `
})

export const ListUnordered = styled.ul(...baseStyles, () => {
  return css`
    padding-left: 1em;
    li::before {
      content: '\\2022';
      width: 1em;
      margin-left: -1em;
    }
  `
})

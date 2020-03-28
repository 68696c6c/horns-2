import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { listTypes } from './utils'
import { typographic } from '../../../traits'


export const ListItem = styled.li(
  typographic.styles,
  () => css`
  `
)

export const ListItemIcon = styled.i(({ theme, color, type }) => {
  const c = theme.color.getColorway(color)
  const cc = color === 'background' ? c.base.readable : c.base.base
  let content = null
  console.log('type', type)
  if (type) {
    content = listTypes.unordered[type] || listTypes.unordered.disc
    content = `'${content}' !important`
  }
  return css`
    display: inline-flex;
    justify-content: flex-end;
    font-style: unset;
    color: ${cc && `${cc} !important`};
    width: 2em;
    &.bullet::before {
      content: ${content};
    }
  `
})


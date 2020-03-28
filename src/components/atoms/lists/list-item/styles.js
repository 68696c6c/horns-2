import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { listTypes } from '../utils'
import { chromatic, margined, typographic } from '../../../../traits'

// The chromatic trait is not used here because we want to color the item bullet, not the item text.
export const ListItem = styled.li(typographic.styles, margined.styles)

export const ListItemIcon = styled.i(
  chromatic.styles,
  ({ theme, color, type }) => {
    const c = theme.color.getColorway(color)
    const cc = color === 'background' ? c.base.readable : c.base.base
    let content = `'${listTypes.unordered.disc}'`
    if (type && listTypes.unordered[type]) {
      content = listTypes.unordered[type]
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
  }
)

ListItemIcon.propTypes = {
  ...chromatic.propTypes(),
}

ListItemIcon.defaultProps = {
  ...chromatic.defaultProps(null, true),
}

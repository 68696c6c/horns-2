import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { getListItemMarker } from '../utils'
import { chromatic, margined, typographic } from '../../../../traits'

// The chromatic trait is not used here because we want to color the item bullet, not the item text.
export const ListItem = styled.li(typographic.styles, margined.styles)

export const ListItemMarker = styled.i(
  chromatic.styles,
  ({ theme, color, type, value }) => {
    console.log('list marker value', value)
    const c = theme.color.getColorway(color)
    const cc = color === 'background' ? c.base.readable : c.base.base
    return css`
      display: inline-flex;
      justify-content: flex-end;
      font-style: unset;
      color: ${cc && `${cc} !important`};
      width: 2em;
      &:not(.icon)::before {
        content: ${getListItemMarker({ type, value }, true)};
      }
    `
  }
)

ListItemMarker.propTypes = {
  ...chromatic.propTypes(),
}

ListItemMarker.defaultProps = {
  ...chromatic.defaultProps(null, true),
}

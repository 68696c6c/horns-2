import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { getListItemMarker } from '../utils'
import { chromatic, margined, typographic } from '../../../../traits'

// The chromatic trait is not used here because we want to color the item bullet, not the item text.
export const ListItem = styled.li(
  typographic.styles,
  margined.styles,
  ({ theme, color, markerColor, hasIcon }) => {
    const c = theme.color.getColorway(color)
    const cc = color === 'background' ? c.base.readable : c.base.base

    const mkc = markerColor || color
    const mc = theme.color.getColorway(mkc)
    const mcc = markerColor === 'background' ? mc.base.readable : mc.base.base
    const baseCSS =
      hasIcon &&
      css`
        display: flex;
        margin-left: -2em;
        align-items: center;
      `
    return css`
      ${baseCSS};
      color: ${cc && `${cc} !important`};
      &::marker {
        color: ${mcc && `${mcc} !important`};
      }
      i {
        color: ${mcc && `${mcc} !important`};
      }
    `
  }
)

ListItem.propTypes = {
  ...chromatic.propTypes(),
}

ListItem.defaultProps = {
  ...chromatic.defaultProps(null, true),
}

export const ListItemMarker = styled.i(chromatic.styles, () => {
  return css`
    display: inline-flex;
    justify-content: center;
    font-style: unset;
    width: 2em;
  `
})

export const ListItemText = styled.span(({ theme, color }) => {
  const c = theme.color.getColorway(color)
  const cc = color === 'background' ? c.base.readable : c.base.base
  return css``
})

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { bordered, chromatic, interactive } from '../../../traits'

import { navItem } from '../_base/clickable'

// Indicates the current item by overriding the colorway.
export const NavItemColorway = styled.a(
  ...navItem.styles(),
  ({ theme, current, currentColor }) => {
    if (current) {
      return [
        chromatic.styles({ theme, color: currentColor }),
        interactive.styles({ theme, color: currentColor }),
      ]
    }
    return null
  }
)

// Indicates the current item using a typographic underline.
export const NavItemUnderline = styled.a(...navItem.styles(), ({ current }) => {
  return (
    current &&
    css`
      text-decoration: underline !important;
    `
  )
})

// Indicates the current item using a background color.
export const NavItemBackground = styled.a(
  ...navItem.styles(),
  ({ theme, current, currentColor, typographic }) =>
    current && chromatic.styles({ theme, typographic, color: currentColor })
)

// Indicates the current item using a colored border.
export const NavItemBordered = styled.a(...navItem.styles(), props => {
  const {
    theme,
    current,
    layout,
    paddingX,
    paddingY,
    currentColor,
    currentWidth,
    currentStyle,
  } = props

  let currentCSS
  if (current) {
    const c = theme.color.getColorway(currentColor)
    const bColor = currentColor === 'background' ? c.base.readable : c.base.base

    let side = 'left'
    let borderKey = 'borderLeft'
    let padding = paddingX
    if (layout === 'horizontal') {
      side = 'bottom'
      borderKey = 'borderBottom'
      padding = paddingY
    }

    const pv = theme.sizing.getValue(padding)
    const bv = theme.sizing.getValue(currentWidth)
    const paddingValue = pv - bv

    currentCSS = css`
      padding-${side}: ${paddingValue >= 0 && `${paddingValue}px`};
      border-${side}-color: ${bColor} !important;
      ${bordered.styles({
        ...props,
        borderAll: { width: 'min' },
        [borderKey]: { width: currentWidth, style: currentStyle },
      })}
    `
  }
  return css`
    text-decoration: none;
    ${currentCSS}
  `
})

// PropTypes are attached directly to the styled component rather than the NavItem component because
// NavItems do not have borders unless for marking the current item.
NavItemBordered.propTypes = {
  ...bordered.propTypes(),
}

NavItemBordered.defaultProps = {
  ...bordered.defaultProps(),
}

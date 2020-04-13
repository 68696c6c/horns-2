import { css } from '@emotion/core'
import styled from '@emotion/styled'

import {
  bordered,
  chromatic,
  interactive,
  margined,
  padded,
  typographic,
} from '../../../../traits'

const baseStyles = [
  chromatic.styles,
  interactive.styles,
  margined.styles,
  padded.styles,
  typographic.styles,
  () => css`
    display: inline-block;
  `,
]

// @TODO implement these
export const NavItemBackground = styled.a(...baseStyles)
export const NavItemUnderline = styled.a(...baseStyles)
export const NavItemFont = styled.a(...baseStyles)

// Indicates the current item using a colored border.
export const NavItemBordered = styled.a(...baseStyles, props => {
  const {
    theme,
    borderColor,
    current,
    layout,
    paddingX,
    paddingY,
    borderWidth,
    borderStyle,
  } = props

  let currentCSS
  if (current) {
    const c = theme.color.getColorway(borderColor)
    const bColor = borderColor === 'background' ? c.base.readable : c.base.base

    let side = 'left'
    let borderKey = 'borderLeft'
    let padding = paddingX
    if (layout === 'horizontal') {
      side = 'bottom'
      borderKey = 'borderBottom'
      padding = paddingY
    }

    const pv = theme.sizing.getValue(padding)
    const bv = theme.sizing.getValue(borderWidth)
    const paddingValue = pv - bv

    currentCSS = css`
      padding-${side}: ${paddingValue >= 0 && `${paddingValue}px`};
      border-${side}-color: ${bColor} !important;
      ${bordered.styles({
        ...props,
        borderAll: { width: 'min' },
        [borderKey]: { width: borderWidth, style: borderStyle },
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

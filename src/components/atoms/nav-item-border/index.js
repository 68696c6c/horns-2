import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { valueToNumber } from '../../../config/utils'
import { bordered } from '../../../traits'

import { navItem } from '../_base'

const NavItemBorder = styled.a(...navItem.styles(), props => {
  const {
    theme,
    current,
    layout,
    currentColor,
    currentWidth,
    currentStyle,
    ...others
  } = props

  let currentCSS
  if (current) {
    const c = theme.color.getColorway(currentColor)
    const bColor = currentColor === 'background' ? c.base.readable : c.base.base

    const paddingProps = theme.padding.getPadding(others)

    let side = 'left'
    let borderKey = 'borderLeft'
    let padding = paddingProps.left
    if (layout === 'horizontal') {
      side = 'bottom'
      borderKey = 'borderBottom'
      padding = paddingProps.bottom
    }

    const pv = valueToNumber(padding)
    const bv = theme.sizing.getValue(currentWidth)
    const paddingValue = pv - bv

    currentCSS = css`
      padding-${side}: ${paddingValue >= 0 && `${paddingValue}px !important`};
      border-${side}-color: ${bColor} !important;
      ${bordered.styles({
        ...props,
        borderAll: { width: 'min' },
        [borderKey]: { width: currentWidth, style: currentStyle },
      })}
    `
  }
  return css`
    ${currentCSS}
  `
})

NavItemBorder.propTypes = {
  ...navItem.propTypes(),
  ...bordered.propTypes(),
}

NavItemBorder.defaultProps = {
  ...navItem.defaultProps(),
  ...bordered.defaultProps(),
}

export default NavItemBorder

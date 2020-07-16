import React from 'react'
import PropTypes from 'prop-types'

import { borderStyles, colors, sizes } from '../../../config'
import { handleProps } from '../../utils'

import { navItem } from '../_base/clickable'
import * as Styled from './styles'

const NavItem = ({ children, variant, forwardedRef, ...others }) => {
  let Tag
  switch (variant) {
    case 'colorway':
      Tag = Styled.NavItemColorway
      break
    case 'underline':
      Tag = Styled.NavItemUnderline
      break
    case 'background':
      Tag = Styled.NavItemBackground
      break
    case 'border':
    default:
      Tag = Styled.NavItemBordered
  }
  return (
    <Tag {...handleProps(others, 'nav-item')} ref={forwardedRef}>
      {children}
    </Tag>
  )
}

NavItem.propTypes = {
  ...navItem.propTypes(),
  href: PropTypes.string,
  current: PropTypes.bool,
  variant: PropTypes.oneOf(['background', 'border', 'colorway', 'underline']),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  currentColor: PropTypes.oneOf([null, ...colors]),
  currentWidth: PropTypes.oneOf([null, ...sizes]),
  currentStyle: PropTypes.oneOf([null, ...borderStyles]),
}

NavItem.defaultProps = {
  ...navItem.defaultProps(),
  href: '#',
  current: false,
  variant: 'border',
  layout: 'horizontal',
  currentColor: 'prominent',
  currentWidth: 'xSmall',
  currentStyle: 'solid',
}

export default React.forwardRef((props, ref) => (
  <NavItem {...props} forwardedRef={ref} />
))

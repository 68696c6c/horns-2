import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'
import { borderStyles, colors, sizes } from '../../../../config'
import {
  chromatic,
  interactive,
  margined,
  padded,
  typographic,
} from '../../../../traits'

import * as Styled from './styles'

const NavItem = ({ children, variant, ...others }) => {
  let Tag
  switch (variant) {
    case 'colorway':
      Tag = Styled.NavItemColorway
      break
    case 'underline':
      Tag = Styled.NavItemUnderline
      break
    case 'border':
    default:
      Tag = Styled.NavItemBordered
  }
  return <Tag {...handleProps(others, 'nav-item')}>{children}</Tag>
}

NavItem.propTypes = {
  ...chromatic.propTypes(),
  ...interactive.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...typographic.propTypes(),
  href: PropTypes.string,
  current: PropTypes.bool,
  variant: PropTypes.oneOf(['border', 'colorway', 'underline', 'font']),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  currentColor: PropTypes.oneOf([null, ...colors]),
  currentWidth: PropTypes.oneOf([null, sizes]),
  currentStyle: PropTypes.oneOf([null, ...borderStyles]),
}

NavItem.defaultProps = {
  ...chromatic.defaultProps('background'),
  ...interactive.defaultProps(false, false, 'pointer'),
  ...margined.defaultProps(),
  ...padded.defaultProps({ paddingX: 'medium', paddingY: 'xSmall' }),
  ...typographic.defaultProps(),
  href: '#',
  current: false,
  variant: 'border',
  layout: 'horizontal',
  currentColor: 'prominent',
  currentWidth: 'xSmall',
  currentStyle: 'solid',
}

export default NavItem

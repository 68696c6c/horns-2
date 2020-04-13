import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../../utils'
import { borderStyles, sizes } from '../../../../config'
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
    case 'background':
      Tag = Styled.NavItemBackground
      break
    case 'underline':
      Tag = Styled.NavItemUnderline
      break
    case 'font':
      Tag = Styled.NavItemFont
      break
    case 'border':
    default:
      Tag = Styled.NavItemBordered
  }
  return (
    <Tag {...handleProps(others, 'nav-item')}>
      {children}
    </Tag>
  )
}

NavItem.propTypes = {
  ...chromatic.propTypes(),
  ...interactive.propTypes(),
  ...margined.propTypes(),
  ...padded.propTypes(),
  ...typographic.propTypes(),
  href: PropTypes.string,
  current: PropTypes.bool,
  variant: PropTypes.oneOf(['border', 'background', 'underline', 'font']),
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  borderWidth: PropTypes.oneOf([null, sizes]),
  borderStyle: PropTypes.oneOf([null, ...borderStyles]),
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
  borderColor: 'prominent',
  borderWidth: 'xSmall',
  borderStyle: 'solid',
}

export default NavItem

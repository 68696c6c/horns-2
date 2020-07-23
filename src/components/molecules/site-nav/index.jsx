import React from 'react'

import { handleProps } from '../../utils'

import { nav, renderNavLinks } from '../_base'
import * as Styled from './styles'

const SiteNav = ({
  links,
  currentPath,
  variant,
  layout,
  color,
  currentColor,
  currentWidth,
  currentStyle,
  ...others
}) => {
  return (
    <Styled.SiteNav
      color={color}
      currentPath={currentPath}
      {...handleProps(others, 'site-nav')}
    >
      {renderNavLinks({
        currentPath,
        links,
        variant,
        layout,
        color,
        currentColor,
        currentWidth,
        currentStyle,
      })}
    </Styled.SiteNav>
  )
}

SiteNav.propTypes = {
  ...nav.propTypes(),
}

SiteNav.defaultProps = {
  ...nav.defaultProps(),
}

export default SiteNav

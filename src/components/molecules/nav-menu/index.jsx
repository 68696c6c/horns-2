import React from 'react'

import { Menu } from '../../atoms'
import { childrenPropTypes } from '../../utils'

import { nav, renderNavControl, renderNavLinks } from '../_base'
import MenuController from '../menu-controller'

const NavMenu = ({
  children,
  currentPath,
  links,
  variant,
  layout,
  color,
  currentColor,
  currentWidth,
  currentStyle,
}) => {
  return (
    <MenuController
      renderControl={(open, ref, toggleOpen) => {
        return renderNavControl({
          open,
          ref,
          toggleOpen,
          text: children,
          variant,
          layout,
          color,
          currentColor,
          currentWidth,
          currentStyle,
        })
      }}
      renderMenu={(open, ref) => (
        <Menu open={open} ref={ref}>
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
        </Menu>
      )}
    />
  )
}

NavMenu.propTypes = {
  ...nav.propTypes(),
  children: childrenPropTypes(),
}

NavMenu.defaultProps = {
  ...nav.defaultProps(),
  children: '',
}

export default NavMenu

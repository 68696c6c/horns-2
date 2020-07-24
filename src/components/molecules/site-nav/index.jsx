import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from '../../atoms'
import { nav } from '../../../macros'
import { handleProps } from '../../utils'

import MenuController from '../menu-controller'
import { getNavItemTag } from '../utils'

import { renderNavControl, renderNavItems } from './utils'
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
  renderControl,
  renderItems,
  ...others
}) => {
  const NavItemTag = getNavItemTag(variant)
  const navItemProps = {
    layout,
    color,
    currentColor,
    currentWidth,
    currentStyle,
  }
  return (
    <Styled.SiteNav
      color={color}
      currentPath={currentPath}
      {...handleProps(others, 'site-nav')}
    >
      {links.map(({ href, text, links: itemLinks }) => {
        if (itemLinks && itemLinks.length) {
          return (
            <MenuController
              key={href}
              renderControl={(open, ref, toggleOpen) =>
                renderControl(
                  {
                    ...navItemProps,
                    open,
                    ref,
                    toggleOpen,
                    text,
                  },
                  NavItemTag
                )}
              renderMenu={(open, ref) => (
                <Menu open={open} ref={ref}>
                  {renderItems(
                    {
                      links: itemLinks,
                      variant,
                      layout,
                      color,
                      currentColor,
                      currentWidth,
                      currentStyle,
                      renderControl,
                    },
                    NavItemTag
                  )}
                </Menu>
              )}
            />
          )
        }
        return (
          <NavItemTag
            {...navItemProps}
            href={href}
            key={href}
            current={href === currentPath}
          >
            {text}
          </NavItemTag>
        )
      })}
    </Styled.SiteNav>
  )
}

SiteNav.propTypes = {
  ...nav.propTypes(),
  renderControl: PropTypes.func,
  renderItems: PropTypes.func,
}

SiteNav.defaultProps = {
  ...nav.defaultProps(),
  renderControl: renderNavControl,
  renderItems: renderNavItems,
}

export default SiteNav

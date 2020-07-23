import React from 'react'
import PropTypes from 'prop-types'

import { navItemVariantProps } from '../../atoms/_base'
import {
  Menu,
  NavItemBackground,
  NavItemBorder,
  NavItemColorway,
  NavItemUnderline,
} from '../../atoms'

import MenuController from '../menu-controller'

export const getNavItemTag = variant => {
  const map = {
    background: NavItemBackground,
    border: NavItemBorder,
    colorway: NavItemColorway,
    underline: NavItemUnderline,
  }
  return map[variant] || NavItemBorder
}

export const nav = {
  styles: () => [],
  propTypes: () => ({
    ...navItemVariantProps.propTypes(),
    currentPath: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.object),
      })
    ),
  }),
  defaultProps: () => ({
    ...navItemVariantProps.defaultProps(),
    currentPath: '',
    links: [],
  }),
}

// @TODO this is not a component and there is probably a better way to handle sharing the control rendering between the NavMenu and SiteNav components.
export const renderNavControl = ({
  open,
  ref,
  toggleOpen,
  text,
  variant,
  layout,
  color,
  currentColor,
  currentWidth,
  currentStyle,
}) => {
  const Tag = getNavItemTag(variant)
  return (
    <Tag
      onClick={event => {
        event.stopPropagation()
        event.preventDefault()
        toggleOpen()
      }}
      ref={ref}
      open={open}
      layout={layout}
      color={color}
      currentColor={currentColor}
      currentWidth={currentWidth}
      currentStyle={currentStyle}
    >
      {text}
    </Tag>
  )
}

export const renderNavLinks = ({
  currentPath,
  links,
  variant,
  layout,
  color,
  currentColor,
  currentWidth,
  currentStyle,
}) => {
  const Tag = getNavItemTag(variant)
  return links.map(({ href, text, links: itemLinks }) => {
    if (itemLinks && itemLinks.length) {
      return (
        <MenuController
          key={href}
          renderControl={(open, ref, toggleOpen) => {
            return renderNavControl({
              open,
              ref,
              toggleOpen,
              text,
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
                links: itemLinks,
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
    return (
      <Tag
        href={href}
        key={href}
        layout={layout}
        color={color}
        currentColor={currentColor}
        currentWidth={currentWidth}
        currentStyle={currentStyle}
        current={href === currentPath}
      >
        {text}
      </Tag>
    )
  })
}

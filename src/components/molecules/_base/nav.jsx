import PropTypes from 'prop-types'
import React from 'react'
import { Menu, NavItem } from '../../atoms'
import MenuController from '../menu-controller'

export const nav = {
  styles: () => [],
  propTypes: () => ({
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.object),
      })
    ),
  }),
  defaultProps: () => ({
    links: [],
  }),
}

// @TODO this is not a component and there is probably a better way to handle sharing the control rendering between the NavMenu and SiteNav components.
// eslint-disable-next-line react/prop-types
export const renderNavControl = ({ open, ref, toggleOpen, text }) => (
  <NavItem
    onClick={event => {
      event.stopPropagation()
      event.preventDefault()
      toggleOpen()
    }}
    ref={ref}
    open={open}
  >
    {text}
  </NavItem>
)

export const renderNavLinks = links => {
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
            })
          }}
          renderMenu={(open, ref) => (
            <Menu open={open} ref={ref}>
              {renderNavLinks(itemLinks)}
            </Menu>
          )}
        />
      )
    }
    return (
      <NavItem href={href} key={href}>
        {text}
      </NavItem>
    )
  })
}

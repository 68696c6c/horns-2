import React from 'react'

import { Menu } from '../../atoms'

import MenuController from '../menu-controller'

export const renderNavControl = (args, Component) => {
  const { open, ref, toggleOpen, text, ...navItemProps } = args
  return (
    <Component
      onClick={event => {
        event.stopPropagation()
        event.preventDefault()
        toggleOpen()
      }}
      ref={ref}
      open={open}
      {...navItemProps}
    >
      {text}
    </Component>
  )
}

export const renderNavItems = (args, Component) => {
  const { currentPath, links, renderControl, ...others } = args
  return links.map(({ href, text, links: itemLinks }) => {
    if (itemLinks && itemLinks.length) {
      return (
        <MenuController
          key={href}
          renderControl={(open, ref, toggleOpen) =>
            renderControl(
              {
                ...others,
                open,
                ref,
                toggleOpen,
                text,
              },
              Component
            )}
          renderMenu={(open, ref) => (
            <Menu open={open} ref={ref}>
              {renderNavItems({ ...others, links: itemLinks }, Component)}
            </Menu>
          )}
        />
      )
    }
    return (
      <Component
        href={href}
        key={href}
        {...others}
        current={href === currentPath}
      >
        {text}
      </Component>
    )
  })
}

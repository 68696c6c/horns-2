import React from 'react'

import { Menu } from '../../atoms'

import AccordionController from '../accordion-controller'

export const renderNavControl = (args, Component) => {
  const { open, ref, toggleOpen, text, color, ...navItemProps } = args
  return (
    <Component
      onClick={event => {
        // @TODO need to only close if we aren't clicking on a nested menu
        // stopPropagation breaks closing other SiteNavs when this one is clicked and is a bad practice.
        event.preventDefault()
        toggleOpen()
      }}
      ref={ref}
      open={open}
      color={color}
      {...navItemProps}
    >
      {text}
    </Component>
  )
}

export const renderNavItems = (args, Component) => {
  const { currentPath, links, color, renderControl, ...others } = args
  return links.map(({ href, text, links: itemLinks }) => {
    if (itemLinks && itemLinks.length) {
      console.log(itemLinks)
      const items = itemLinks.map(
        (item) => {
          console.log(item)
          return renderNavItems(
            {
              ...others,
              links: item.links || [],
              href: item.href,
              text: item.text,
            },
            Component
          )
    }
      )
      console.log(items)
      return (
        <AccordionController
          key={href}
          renderControl={({ handleClick }) => (
            <Component onClick={handleClick} {...others} color={color}>
              {text}
            </Component>
          )}
          items={items}
          // renderControl={(open, ref, toggleOpen) =>
          //   renderControl(
          //     {
          //       ...others,
          //       open,
          //       ref,
          //       toggleOpen,
          //       text,
          //       color,
          //     },
          //     Component
          //   )}
          // renderMenu={(open, ref) => (
          //   <Menu open={open} ref={ref} color={color}>
          //     {renderNavItems({ ...others, links: itemLinks }, Component)}
          //   </Menu>
          // )}
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

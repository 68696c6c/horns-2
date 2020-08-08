import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import _union from 'lodash.union'
import _without from 'lodash.without'

import { colors } from '../../../config'
import { useBreakpoint, useID } from '../../../hooks'
import { responsive } from '../../../traits/responsive'
import { Menu } from '../../atoms'
import { nav } from '../../../macros'
import { handleProps } from '../../utils'

import MenuController from '../menu-controller'
import { getNavItemTag } from '../utils'

import { renderLinks, cloneWithIDs, makeLinkMap } from './utils'
import * as Styled from './styles'

const handleClick = (event, linkMap, openItems, setOpenItems) => {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  const linkPath = linkMap[id]
  if (!linkPath) {
    return
  }
  if (openItems.includes(id)) {
    const merged = _without(openItems, id)
    setOpenItems(merged)
  } else {
    const merged = _union(openItems, linkPath)
    setOpenItems(merged)
  }
}

const SiteNav = ({
  links,
  currentPath,
  variant,
  layout,
  color,
  currentColor,
  currentWidth,
  currentStyle,
  menuColor,
  renderControl,
  renderItems,
  breakpoint,
  ...others
}) => {
  const [id] = useID()
  const isMobile = useBreakpoint(breakpoint)
  const NavItemTag = getNavItemTag(variant)

  const [openItems, setOpenItems] = useState([])
  const [currentID, setCurrentID] = useState([])
  const [clonedLinks, setClonedLinks] = useState([])
  useEffect(() => {
    const [clones, cID] = cloneWithIDs(links, currentPath, uuid)
    setClonedLinks(clones)
    setCurrentID(cID)
  }, [links])

  const [linkMap, setLinkMap] = useState({})
  useEffect(() => {
    setLinkMap(makeLinkMap(clonedLinks))
  }, [clonedLinks])

  const [currentItems, setCurrentItems] = useState([])
  useEffect(() => {
    if (linkMap[currentID]) {
      const ids = linkMap[currentID]
      setCurrentItems(ids)
    }
  }, [linkMap, currentID])

  const navItemProps = {
    currentColor,
    currentWidth,
    currentStyle,
  }
  const [linkItems, setLinkItems] = useState([])
  useEffect(() => {
    const items = renderLinks(
      clonedLinks,
      color,
      isMobile ? 'vertical' : 'horizontal',
      (link, index, itemColor, itemLayout) => (
        <NavItemTag
          {...navItemProps}
          color={itemColor}
          layout={itemLayout}
          key={link.id}
          data-id={link.id}
          href={link.href}
          onClick={event => {
            return handleClick(
              event,
              linkMap,
              openItems,
              setOpenItems,
              setCurrentItems
            )
          }}
          current={currentItems.includes(link.id)}
        >
          {link.text}
        </NavItemTag>
      ),
      (link, index, itemColor, itemLayout, itemCallback, menuCallback) => (
        <Styled.NavItemMenuContainer
          key={link.id}
          open={openItems.includes(link.id)}
        >
          {itemCallback(link, index, itemColor, itemLayout)}
          <Styled.MenuContainer open={openItems.includes(link.id)}>
            <Menu open={openItems.includes(link.id)}>
              {renderLinks(
                link.links,
                menuColor,
                'vertical',
                itemCallback,
                menuCallback
              )}
            </Menu>
          </Styled.MenuContainer>
        </Styled.NavItemMenuContainer>
      )
    )
    setLinkItems(items)
  }, [linkMap, currentItems, openItems])

  if (isMobile) {
    return (
      <MenuController
        renderControl={(open, ref, toggleOpen) => (
          <NavItemTag
            key={id}
            ref={ref}
            onClick={event => {
              event.preventDefault()
              toggleOpen()
            }}
          >
            H
          </NavItemTag>
        )}
        renderMenu={(open, ref) => (
          <Styled.MobileMenu open={open} ref={ref}>
            {linkItems}
          </Styled.MobileMenu>
        )}
      />
    )
  }

  return (
    <Styled.SiteNav
      color={color}
      menuColor={menuColor}
      currentPath={currentPath}
      {...handleProps(others, 'site-nav')}
    >
      {linkItems}
    </Styled.SiteNav>
  )
}

SiteNav.propTypes = {
  ...nav.propTypes(),
  ...responsive.propTypes(),
  menuColor: PropTypes.oneOf([null, ...colors]),
}

SiteNav.defaultProps = {
  ...nav.defaultProps(),
  ...responsive.defaultProps(),
  breakpoint: 'medium',
  color: 'background',
  menuColor: 'neutral',
  currentColor: 'primary',
}

export default SiteNav

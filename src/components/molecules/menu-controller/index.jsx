import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { useOpen } from '../../../hooks'
import { getNavItemTag } from '../../../macros'
import { Menu } from '../../atoms'

import * as Styled from './styles'

const MenuController = ({
  renderControl,
  renderMenu,
  initialOpen,
  onOpen,
  onClose,
  forceWidth,
}) => {
  const controlRef = useRef(null)
  const menuRef = useRef(null)

  const [minWidth, setMinWidth] = useState('0')
  const [open, setOpen] = useOpen(
    initialOpen || forceWidth,
    target => target !== controlRef.current
  )

  const toggleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (open) {
      onOpen()
    } else {
      onClose()
    }
  }, [open])

  useEffect(() => {
    if (forceWidth) {
      const controlWidth = controlRef.current.offsetWidth
      const menuWidth = menuRef.current.offsetWidth
      if (controlWidth < menuWidth) {
        setMinWidth(menuWidth)
      } else if (controlWidth > menuWidth) {
        setMinWidth(controlWidth)
      }
      setOpen(false)
    }
  }, [])

  return (
    <Styled.Container open={open} minWidth={minWidth}>
      {renderControl(open, controlRef, toggleOpen)}
      <Styled.MenuContainer open={open}>
        {renderMenu(open, menuRef)}
      </Styled.MenuContainer>
    </Styled.Container>
  )
}

MenuController.propTypes = {
  renderControl: PropTypes.func.isRequired,
  renderMenu: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  initialOpen: PropTypes.bool,
  forceWidth: PropTypes.bool,
  // @TODO implement this
  // menuPosition: PropTypes.oneOf([
  //   'top',
  //   'bottom',
  //   'left',
  //   'right',
  //   'top-left',
  //   'top-right',
  //   'bottom-left',
  //   'bottom-right',
  // ]),
}

MenuController.defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  initialOpen: false,
  forceWidth: false,
  // menuPosition: 'bottom',
}

export default MenuController

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

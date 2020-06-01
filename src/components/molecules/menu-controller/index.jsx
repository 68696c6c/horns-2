import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { useOpen } from '../../../hooks'

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
  menuPosition: PropTypes.oneOf([
    'top',
    'bottom',
    'left',
    'right',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ]),
}

MenuController.defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  initialOpen: false,
  forceWidth: false,
  menuPosition: 'bottom',
}

export default MenuController

import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import useOpen from '../../hooks/use-open'

import * as Styled from './styles'

const Menu = ({
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
      const selectWidth = controlRef.current.offsetWidth
      const dropdownWidth = menuRef.current.offsetWidth
      if (selectWidth < dropdownWidth) {
        setMinWidth(dropdownWidth)
      } else if (selectWidth > dropdownWidth) {
        setMinWidth(selectWidth)
      }
      setOpen(false)
    }
  }, [])

  return (
    <Styled.Container open={open} style={{ minWidth: `${minWidth}px` }}>
      {renderControl(open, controlRef, toggleOpen)}
      <Styled.MenuContainer open={open}>
        {renderMenu(open, menuRef)}
      </Styled.MenuContainer>
    </Styled.Container>
  )
}

Menu.propTypes = {
  renderControl: PropTypes.func.isRequired,
  renderMenu: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  initialOpen: PropTypes.bool,
  forceWidth: PropTypes.bool,
}

Menu.defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  initialOpen: false,
  forceWidth: false,
}

export default Menu

import React from 'react'
import PropTypes from 'prop-types'

import { Nav, NavItem } from '../../atoms'

import Menu from '../menu'

const NavMenu = ({ children, options, ...others }) => {
  return (
    <Menu
      renderControl={(open, ref, toggleOpen) => (
        <NavItem
          onClick={event => {
            event.preventDefault()
            toggleOpen()
          }}
          ref={ref}
          open={open}
        >
          {children}
        </NavItem>
      )}
      renderMenu={(open, ref) => (
        <Nav open={open} ref={ref}>
          {options.map(({ key, value }) => (
            <a href={value} key={value}>
              {key}
            </a>
          ))}
        </Nav>
      )}
    />
  )
}

NavMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
}

NavMenu.defaultProps = {
  options: [],
}

export default NavMenu

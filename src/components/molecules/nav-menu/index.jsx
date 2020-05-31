import React from 'react'
import PropTypes from 'prop-types'

import { Nav, NavItem } from '../../atoms'
import { childrenPropTypes } from '../../utils'

import Menu from '../menu'

const NavMenu = ({ children, links }) => {
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
          {links.map(({ href, text }) => (
            <NavItem href={href} key={href}>
              {text}
            </NavItem>
          ))}
        </Nav>
      )}
    />
  )
}

NavMenu.propTypes = {
  children: childrenPropTypes(),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

NavMenu.defaultProps = {
  children: '',
  links: [],
}

export default NavMenu

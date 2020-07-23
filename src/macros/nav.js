import React from 'react'
import PropTypes from 'prop-types'

import {
  NavItemBackground,
  NavItemBorder,
  NavItemColorway,
  NavItemUnderline,
} from '../components/atoms'

import { navItemVariantProps } from './clickable'

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

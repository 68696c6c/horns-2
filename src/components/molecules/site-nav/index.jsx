import React from 'react'
import PropTypes from 'prop-types'

import { handleProps } from '../../utils'

import { nav, renderNavLinks } from '../_base'
import * as Styled from './styles'

const SiteNav = ({ links, currentPath, ...others }) => {
  return (
    <Styled.SiteNav
      currentPath={currentPath}
      {...handleProps(others, 'site-nav')}
    >
      {renderNavLinks(links)}
    </Styled.SiteNav>
  )
}

SiteNav.propTypes = {
  ...nav.propTypes(),
  currentPath: PropTypes.string,
}

SiteNav.defaultProps = {
  ...nav.defaultProps(),
  currentPath: '',
}

export default SiteNav

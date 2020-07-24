import React from 'react'
import PropTypes from 'prop-types'

import { navItemVariantProps } from '../../../macros'
import { handleProps, makeIntArray } from '../../utils'

import { getNavItemTag } from '../utils'
import * as Styled from './styles'

const PaginationNav = ({
  pages,
  currentPage,
  variant,
  layout,
  currentColor,
  currentWidth,
  currentStyle,
  ...others
}) => {
  const Tag = getNavItemTag(variant)
  return (
    <Styled.PaginationNav
      currentPage={currentPage}
      {...handleProps(others, 'pagination-nav')}
    >
      {makeIntArray(pages).map(page => (
        <Tag
          href="#"
          layout={layout}
          currentColor={currentColor}
          currentWidth={currentWidth}
          currentStyle={currentStyle}
          current={page === currentPage}
        >
          {page}
        </Tag>
      ))}
    </Styled.PaginationNav>
  )
}

PaginationNav.propTypes = {
  ...navItemVariantProps.propTypes(),
  pages: PropTypes.number,
  currentPage: PropTypes.number,
}

PaginationNav.defaultProps = {
  ...navItemVariantProps.defaultProps(),
  pages: 1,
  currentPage: 1,
}

export default PaginationNav

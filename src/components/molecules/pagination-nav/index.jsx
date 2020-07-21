import React from 'react'
import PropTypes from 'prop-types'

import { handleProps, makeIntArray } from '../../utils'
import { NavItem } from '../../atoms'

import * as Styled from './styles'

const PaginationNav = ({ pages, currentPage, ...others }) => {
  return (
    <Styled.PaginationNav
      currentPage={currentPage}
      {...handleProps(others, 'pagination-nav')}
    >
      {makeIntArray(pages).map(page => (
        <NavItem href="#" current={page === currentPage}>
          {page}
        </NavItem>
      ))}
    </Styled.PaginationNav>
  )
}

PaginationNav.propTypes = {
  pages: PropTypes.number,
  currentPage: PropTypes.number,
}

PaginationNav.defaultProps = {
  pages: 1,
  currentPage: 1,
}

export default PaginationNav

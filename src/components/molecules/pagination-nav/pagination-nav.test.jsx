/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import PaginationNav from '.'

describe('PaginationNav', () => {
  it('should render as default', () => {
    const { container } = render(<PaginationNav />)
    expect(container).toMatchSnapshot()
  })
  it('should highlight the current item', () => {
    const { container } = render(<PaginationNav pages={10} currentPage={3} />)
    expect(container).toMatchSnapshot()
  })
})

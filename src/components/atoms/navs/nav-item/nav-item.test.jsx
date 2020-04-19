/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import NavItem from '.'

describe('NavItem', () => {
  it('should render as default', () => {
    const { container } = render(<NavItem>example</NavItem>)
    expect(container).toMatchSnapshot()
  })
})

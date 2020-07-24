/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Menu from '.'

describe('Menu', () => {
  it('should render as default', () => {
    const { container } = render(
      <Menu>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </Menu>
    )
    expect(container).toMatchSnapshot()
  })
  it('should render open', () => {
    const { container } = render(
      <Menu open>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </Menu>
    )
    expect(container).toMatchSnapshot()
  })
})

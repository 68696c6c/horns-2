/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import NavItemColorway from '.'

describe('NavItemColorway', () => {
  it('should render as default', () => {
    const { container } = render(<NavItemColorway>example</NavItemColorway>)
    expect(container).toMatchSnapshot()
  })
})

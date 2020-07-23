/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import NavItemBorder from '.'

describe('NavItemBorder', () => {
  it('should render as default', () => {
    const { container } = render(<NavItemBorder>example</NavItemBorder>)
    expect(container).toMatchSnapshot()
  })
})

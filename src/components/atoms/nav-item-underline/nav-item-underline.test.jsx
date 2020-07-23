/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import NavItemUnderline from '.'

describe('NavItemUnderline', () => {
  it('should render as default', () => {
    const { container } = render(<NavItemUnderline>example</NavItemUnderline>)
    expect(container).toMatchSnapshot()
  })
})

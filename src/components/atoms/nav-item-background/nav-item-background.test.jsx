/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import NavItemBackground from '.'

describe('NavItemBackground', () => {
  it('should render as default', () => {
    const { container } = render(<NavItemBackground>example</NavItemBackground>)
    expect(container).toMatchSnapshot()
  })
})

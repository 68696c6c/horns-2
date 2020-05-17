/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Footer from '.'

describe('Footer', () => {
  it('should render as default', () => {
    const { container } = render(
      <Footer>
        <p>example</p>
      </Footer>
    )
    expect(container).toMatchSnapshot()
  })
})

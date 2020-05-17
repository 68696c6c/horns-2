/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Header from '.'

describe('Header', () => {
  it('should render as default', () => {
    const { container } = render(
      <Header>
        <p>example</p>
      </Header>
    )
    expect(container).toMatchSnapshot()
  })
})

/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Nav from '.'

describe('Nav', () => {
  it('should render as default', () => {
    const { container } = render(
      <Nav>
        <a href="/one">One</a>
        <a href="/two">Two</a>
        <a href="/three">Three</a>
      </Nav>
    )
    expect(container).toMatchSnapshot()
  })
})

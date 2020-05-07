/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import ListUnordered from '.'

describe('ListUnordered', () => {
  it('should render as default', () => {
    const { container } = render(
      <ListUnordered>
        <li>example</li>
        <li>example</li>
      </ListUnordered>
    )
    expect(container).toMatchSnapshot()
  })
})

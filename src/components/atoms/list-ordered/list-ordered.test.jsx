/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import ListOrdered from '.'

describe('ListOrdered', () => {
  it('should render as default', () => {
    const { container } = render(
      <ListOrdered>
        <li>example</li>
        <li>example</li>
      </ListOrdered>
    )
    expect(container).toMatchSnapshot()
  })
})

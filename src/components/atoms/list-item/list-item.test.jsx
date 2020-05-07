/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import ListItem from '.'

describe('ListItem', () => {
  it('should render as default', () => {
    const { container } = render(
      <ul>
        <ListItem>example</ListItem>
        <ListItem>example</ListItem>
      </ul>
    )
    expect(container).toMatchSnapshot()
  })
})

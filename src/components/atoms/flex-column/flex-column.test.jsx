/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import FlexColumn from '.'

describe('FlexColumn', () => {
  it('should render as default', () => {
    const { container } = render(
      <FlexColumn>
        <span>example 1</span>
        <span>example 2</span>
        <span>example 3</span>
      </FlexColumn>
    )
    expect(container).toMatchSnapshot()
  })
})

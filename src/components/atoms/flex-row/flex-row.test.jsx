/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import FlexRow from '.'

describe('FlexRow', () => {
  it('should render as default', () => {
    const { container } = render(
      <FlexRow>
        <span>example 1</span>
        <span>example 2</span>
        <span>example 3</span>
      </FlexRow>
    )
    expect(container).toMatchSnapshot()
  })
})

/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Columns from '.'

describe('Columns', () => {
  it('should render as default', () => {
    const { container } = render(
      <Columns>
        <div>a</div>
        <div>b</div>
      </Columns>
    )
    expect(container).toMatchSnapshot()
  })
})

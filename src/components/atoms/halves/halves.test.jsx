/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Halves from '.'

describe('Halves', () => {
  it('should render as default', () => {
    const { container } = render(
      <Halves>
        <div>a</div>
        <div>b</div>
      </Halves>
    )
    expect(container).toMatchSnapshot()
  })
})

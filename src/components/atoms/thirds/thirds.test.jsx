/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Thirds from '.'

describe('Thirds', () => {
  it('should render as default', () => {
    const { container } = render(
      <Thirds>
        <div>a</div>
        <div>b</div>
      </Thirds>
    )
    expect(container).toMatchSnapshot()
  })
})

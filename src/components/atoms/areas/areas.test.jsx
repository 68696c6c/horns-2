/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Areas from '.'

describe('Areas', () => {
  it('should render as default', () => {
    const { container } = render(
      <Areas>
        <div>a</div>
        <div>b</div>
      </Areas>
    )
    expect(container).toMatchSnapshot()
  })
})

/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Stack from '.'

describe('Stack', () => {
  it('should render as default', () => {
    const { container } = render(
      <Stack>
        <div>a</div>
        <div>b</div>
      </Stack>
    )
    expect(container).toMatchSnapshot()
  })
})

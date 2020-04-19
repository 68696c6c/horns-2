/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Toggle from '.'

describe('Toggle', () => {
  it('should render as default', () => {
    const { container } = render(<Toggle id="example" name="example" />)
    expect(container).toMatchSnapshot()
  })
})

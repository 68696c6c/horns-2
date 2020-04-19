/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Input from '.'

describe('Input', () => {
  it('should render as default', () => {
    const { container } = render(<Input id="example" name="example" />)
    expect(container).toMatchSnapshot()
  })
})

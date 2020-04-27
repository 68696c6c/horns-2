/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Select from '.'

describe('Select', () => {
  it('should render as default', () => {
    const { container } = render(<Select id="example" name="example" />)
    expect(container).toMatchSnapshot()
  })
})

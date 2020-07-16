/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import SelectNative from '.'

describe('SelectNative', () => {
  it('should render as default', () => {
    const { container } = render(<SelectNative id="example" name="example" />)
    expect(container).toMatchSnapshot()
  })
})

/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import MultiselectNative from '.'

describe('MultiselectNative', () => {
  it('should render as default', () => {
    const { container } = render(<MultiselectNative id="example" name="example" />)
    expect(container).toMatchSnapshot()
  })
})

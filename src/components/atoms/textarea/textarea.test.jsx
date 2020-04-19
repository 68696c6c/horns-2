/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Textarea from '.'

describe('Textarea', () => {
  it('should render as default', () => {
    const { container } = render(<Textarea id="example" name="example" />)
    expect(container).toMatchSnapshot()
  })
})

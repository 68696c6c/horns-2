/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Button from '.'

describe('Button', () => {
  it('should render as default', () => {
    const { container } = render(<Button>example</Button>)
    expect(container).toMatchSnapshot()
  })
})

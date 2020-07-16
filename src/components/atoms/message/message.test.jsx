/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Message from '.'

describe('Message', () => {
  it('should render as default', () => {
    const { container } = render(<Message>example</Message>)
    expect(container).toMatchSnapshot()
  })
})

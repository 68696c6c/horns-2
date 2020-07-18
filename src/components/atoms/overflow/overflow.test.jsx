/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Overflow from '.'

describe('Overflow', () => {
  it('should render as default', () => {
    const { container } = render(
      <Overflow height="400px" x="scroll" y="scroll" />
    )
    expect(container).toMatchSnapshot()
  })
})

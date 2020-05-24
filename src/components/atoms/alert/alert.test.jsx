/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Alert from '.'

describe('Alert', () => {
  it('should render as default', () => {
    const { container } = render(<Alert>example</Alert>)
    expect(container).toMatchSnapshot()
  })
  it('should render as block', () => {
    const { container } = render(<Alert block>example</Alert>)
    expect(container).toMatchSnapshot()
  })
  it('should render as inline', () => {
    const { container } = render(<Alert block={false}>example</Alert>)
    expect(container).toMatchSnapshot()
  })
})

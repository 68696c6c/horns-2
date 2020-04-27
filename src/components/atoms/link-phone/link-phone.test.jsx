/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import LinkPhone from '.'

describe('LinkPhone', () => {
  it('should render as default', () => {
    const { container } = render(<LinkPhone>example</LinkPhone>)
    expect(container).toMatchSnapshot()
  })
})

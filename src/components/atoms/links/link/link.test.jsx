/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Link from '.'

describe('Link', () => {
  it('should render as default', () => {
    const { container } = render(<Link>example</Link>)
    expect(container).toMatchSnapshot()
  })
})

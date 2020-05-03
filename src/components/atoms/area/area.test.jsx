/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Area from '.'

describe('Area', () => {
  it('should render as default', () => {
    const { container } = render(<Area>example</Area>)
    expect(container).toMatchSnapshot()
  })
})

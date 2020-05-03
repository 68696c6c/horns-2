/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Column from '.'

describe('Column', () => {
  it('should render as default', () => {
    const { container } = render(<Column>example</Column>)
    expect(container).toMatchSnapshot()
  })
})

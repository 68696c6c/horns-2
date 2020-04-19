/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Label from '.'

describe('Label', () => {
  it('should render as default', () => {
    const { container } = render(<Label>example</Label>)
    expect(container).toMatchSnapshot()
  })
})

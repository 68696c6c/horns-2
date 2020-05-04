/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Toggle from '.'

describe('Toggle', () => {
  it('should render as a checkbox', () => {
    const { container } = render(
      <Toggle type="checkbox" id="example" name="example" />
    )
    expect(container).toMatchSnapshot()
  })
  it('should render as a radio', () => {
    const { container } = render(
      <Toggle type="radio" id="example" name="example" />
    )
    expect(container).toMatchSnapshot()
  })
})

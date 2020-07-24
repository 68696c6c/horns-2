/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import DropdownOption from '.'

describe('DropdownOption', () => {
  it('should render as default', () => {
    const { container } = render(
      <ul>
        <DropdownOption>a</DropdownOption>
        <DropdownOption>b</DropdownOption>
      </ul>
    )
    expect(container).toMatchSnapshot()
  })
})

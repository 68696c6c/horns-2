/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import LinkEmail from '.'

describe('LinkEmail', () => {
  it('should render as default', () => {
    const { container } = render(<LinkEmail>example</LinkEmail>)
    expect(container).toMatchSnapshot()
  })
})

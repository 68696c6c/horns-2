/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Block from '.'

describe('Block', () => {
  it('should render as default', () => {
    const { container } = render(
      <Block>
        <p>example</p>
      </Block>
    )
    expect(container).toMatchSnapshot()
  })
})

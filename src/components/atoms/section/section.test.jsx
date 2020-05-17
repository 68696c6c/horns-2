/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Section from '.'

describe('Section', () => {
  it('should render as default', () => {
    const { container } = render(
      <Section>
        <p>example</p>
      </Section>
    )
    expect(container).toMatchSnapshot()
  })
})

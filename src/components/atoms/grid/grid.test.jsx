/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Grid, { Columns } from '.'

describe('Grid', () => {
  it('should render as default', () => {
    const { container } = render(<Grid>example</Grid>)
    expect(container).toMatchSnapshot()
  })
})

describe('Columns', () => {
  it('should render as default', () => {
    const { container } = render(
      <Columns columns={3}>
        <div>example 1</div>
        <div>example 2</div>
        <div>example 3</div>
      </Columns>
    )
    expect(container).toMatchSnapshot()
  })
})

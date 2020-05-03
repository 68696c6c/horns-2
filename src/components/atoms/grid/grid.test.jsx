/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import Grid from '.'

describe('Grid', () => {
  it('should render as default', () => {
    const { container } = render(
      <Grid>
        <div>a</div>
        <div>b</div>
      </Grid>
    )
    expect(container).toMatchSnapshot()
  })
})

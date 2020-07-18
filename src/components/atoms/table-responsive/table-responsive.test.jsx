/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import TableResponsive from '.'

describe('TableResponsive', () => {
  it('should render as default', () => {
    const { container } = render(
      <TableResponsive
        minWidth="1200px"
        rowData={[
          { id: '1', name: 'first', email: 'first@example.com' },
          { id: '2', name: 'second', email: 'second@example.com' },
        ]}
      />
    )
    expect(container).toMatchSnapshot()
  })
})

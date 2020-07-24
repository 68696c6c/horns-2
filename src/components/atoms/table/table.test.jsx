/* global describe, it, expect */
import React from 'react'

import { render } from 'setup-test'

import TableScroll from '.'

describe('Table', () => {
  it('should render as default', () => {
    const { container } = render(
      <TableScroll
        minWidth="1200px"
        rowData={[
          { id: '1', name: 'first', email: 'first@example.com' },
          { id: '2', name: 'second', email: 'second@example.com' },
        ]}
      />
    )
    expect(container).toMatchSnapshot()
  })
  it('should render with static content', () => {
    const { container } = render(
      <TableScroll minWidth="400px">
        <thead>
          <tr>
            <th>zero one</th>
            <th>zero two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>one one</td>
            <td>one two</td>
          </tr>
          <tr>
            <td>two one</td>
            <td>two two</td>
          </tr>
        </tbody>
      </TableScroll>
    )
    expect(container).toMatchSnapshot()
  })
})

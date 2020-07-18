/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { makeIntArray } from '_story'

import Table from '.'

const makeRow = i => ({
  id: `${i.repeat(8)}-${i.repeat(4)}-${i.repeat(4)}-${i.repeat(4)}-${i.repeat(
    12
  )}`,
  first_name: 'Example',
  last_name: 'User',
  email: `user-${i}@example.com`,
  phone: `${i.repeat(3)}-${i.repeat(3)}-${i.repeat(4)}`,
  created_at: `2020-${i.padStart(2, '0')}-01`,
  updated_at: null,
  deleted_at: null,
})

const tableData = makeIntArray(9).map(i => makeRow(`${i}`))

const Demo = () => (
  <>
    <h1>Table</h1>
    <p>
      The <em>Table</em> component applies theming to the HTML{' '}
      <code>table</code> tab and its children, <code>thead</code>,{' '}
      <code>tbody</code>, <code>tr</code>, <code>td</code>, and <code>td</code>.
    </p>
    <p>
      The <em>Table</em> component works using standard HTML children and does
      not require any other Horns components to create fully themed tables.
    </p>
    <Table minWidth="1200px">
      <thead>
        <tr>
          {makeIntArray(6).map(i => (
            <th key={`row-header-${i}`}>Row 0, Column {i} Heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {makeIntArray(6).map(rowIndex => (
          <tr key={`row-${rowIndex}`}>
            {makeIntArray(6).map(colIndex => (
              <td key={`row-${rowIndex}-column-${colIndex}`}>
                Row {rowIndex}, Column {colIndex} Content
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
    <h2>Rows from Prop</h2>
    <p>
      The <em>Table</em> component can generate a table using the{' '}
      <em>rowData</em> prop.
    </p>
    <Table rowData={tableData} minWidth="1200px" />
  </>
)

Demo.story = {
  name: 'Table',
}

export default Demo

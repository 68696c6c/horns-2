/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { makeIntArray } from '_story'

import TableResponsive from '.'
import Table from '../table'

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
    <h1>TableResponsive</h1>
    <p>
      The <em>TableResponsive</em> component applies theming to the HTML{' '}
      <code>table</code> tab and its children, <code>thead</code>,{' '}
      <code>tbody</code>, <code>tr</code>, <code>td</code>, and <code>td</code>.
    </p>
    <p>
      The <em>Table</em> component works using standard HTML children and does
      not require any other Horns components to create fully themed tables.
    </p>
    <h2>Rows from Prop</h2>
    <p>
      Unlike the <em>Table</em> component, the <em>TableResponsive</em> does not
      accept children and must generate the table content using the{' '}
      <em>rowData</em> prop.  This is because the component needs to map over the
    </p>
    <TableResponsive rowData={tableData} minWidth="1200px" />
  </>
)

Demo.story = {
  name: 'TableResponsive',
}

export default Demo

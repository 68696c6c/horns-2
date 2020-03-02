/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Columns, { Column } from '.'

// @TODO demo the remaining props
const Demo = () => (
  <>
    <h1>Columns</h1>
    <p>
      The Columns component arranges its children into equally sized columns.
    </p>
    <Columns color="dark">
      <Column color="primary">Column 1</Column>
      <Column color="secondary">Column 2</Column>
      <Column color="tertiary">Column 3</Column>
      <Column color="success">Column 4</Column>
    </Columns>

    <Columns color="neutral" fluid>
      <Column color="primary">Area 1</Column>
      <Column color="secondary">Area 2</Column>
      <Column color="tertiary">Area 3</Column>
      <Column color="success">Area 4</Column>
    </Columns>
  </>
)

Demo.story = {
  name: 'Columns',
}

export default Demo

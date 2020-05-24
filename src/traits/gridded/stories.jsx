/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import * as Styled from './stories.styles'

const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// @TODO this demo currently doesn't work because the column behavior was removed from the gridded trait.
const Demo = () => (
  <>
    <h1>Gridded</h1>
    <p>
      The <em>gridded</em> trait organizes the children of a component into
      wrapping columns.
    </p>
    <p>
      Responsive behavior is provided separately via the <em>responsive</em>{' '}
      trait.
    </p>
    <Styled.Grid columns={12}>
      {cols.map(col => (
        <Styled.Column>Column {col}</Styled.Column>
      ))}
    </Styled.Grid>

    <h2>Columns</h2>
    <p>
      The max number of columns can be controlled with the <em>columns</em>{' '}
      prop.
    </p>
    <h3>6 Column Grid</h3>
    <Styled.Grid columns={6}>
      {cols.map(col => (
        <Styled.Column>Column {col}</Styled.Column>
      ))}
    </Styled.Grid>
    <h3>3 Column Grid</h3>
    <Styled.Grid columns={3}>
      {cols.map(col => (
        <Styled.Column>Column {col}</Styled.Column>
      ))}
    </Styled.Grid>

    <h2>Gapped</h2>
    <p>
      An optional, globally configured grid gap can be applied with the{' '}
      <em>gapped</em> prop.
    </p>
    <Styled.Grid columns={4} gapped>
      {cols.map(col => (
        <Styled.Column>Column {col}</Styled.Column>
      ))}
    </Styled.Grid>
  </>
)

Demo.story = {
  name: 'Gridded',
}

export default Demo

/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import Column from '../column'
import Columns from '.'

const Demo = () => (
  <>
    <h1>Columns</h1>
    <p>
      The <em>Columns</em> component arranges its children into equally sized
      columns. It is intended to be used with the <em>Column</em> component.
    </p>

    <Columns color="dark" gapped>
      <Column color="primary">Column 1</Column>
      <Column color="secondary">Column 2</Column>
      <Column color="tertiary">Column 3</Column>
      <Column color="success">Column 4</Column>
    </Columns>

    <p>
      By default, <em>Columns</em> will create equally sized columns that have a
      minimum width based on the configured <code>theme.grid.columnMin</code>{' '}
      value. Columns that exceed the width of the <em>Columns</em> content area
      will be wrapped.
    </p>

    <Columns color="neutral" gapped>
      <Column color="primary">Column 1</Column>
      <Column color="secondary">Column 2</Column>
      <Column color="tertiary">Column 3</Column>
      <Column color="success">Column 4</Column>
      <Column color="info">Column 5</Column>
      <Column color="warning">Column 6</Column>
      <Column color="danger">Column 7</Column>
    </Columns>

    <p>
      If the <code>columns</code> prop is provided, the <em>Columns</em>{' '}
      component will ignore the configured <code>theme.grid.columnMin</code> and
      arrange its children into the specified number of columns.
    </p>

    <Columns color="dark" columns={7} gapped>
      <Column color="primary">Column 1</Column>
      <Column color="secondary">Column 2</Column>
      <Column color="tertiary">Column 3</Column>
      <Column color="success">Column 4</Column>
      <Column color="info">Column 5</Column>
      <Column color="warning">Column 6</Column>
      <Column color="danger">Column 7</Column>
    </Columns>

    <h2>Column Spanning</h2>
    <p>
      The <em>Column</em> component supports column spanning when the parent{' '}
      <em>Columns</em> has a fixed number of columns via the{' '}
      <code>columns</code> prop. This <em>Columns</em> component has 10 columns.
    </p>
    <Columns color="neutral" columns={10}>
      <Column span={2} color="success">
        Column span 2
      </Column>
      <Column span={3} color="info">
        Column span 3
      </Column>
      <Column span={4} color="warning">
        Column span 4
      </Column>
    </Columns>

    <p>
      Column-spanning can be controlled at each breakpoint via the{' '}
      <code>spanMin</code>, <code>spanSm</code>, <code>spanMd</code>,{' '}
      <code>spanLg</code>, and <code>spanMax</code> props.
    </p>
    <Columns color="dark" columns={12}>
      <Column
        spanMin={2}
        spanSm={3}
        spanMd={4}
        spanLg={5}
        spanMax={6}
        color="success"
      >
        Responsive Left
      </Column>
      <Column
        spanMin={2}
        spanSm={3}
        spanMd={4}
        spanLg={5}
        spanMax={6}
        color="info"
      >
        Responsive Right
      </Column>
    </Columns>
  </>
)

Demo.story = {
  name: 'Columns',
}

export default Demo

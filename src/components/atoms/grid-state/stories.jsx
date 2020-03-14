/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Grid, { Column } from '.'

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// @TODO demo the remaining props
const Demo = () => (
  <>
    <h1>Grid</h1>
    <p>
      The Grid component arranges its children according to a specified
      template.
    </p>

    <Grid color="dark">
      {columns.map(i => (
        <Column color="primary">Column {i}</Column>
      ))}
    </Grid>
    <Grid color="dark">
      {columns.map(i => (
        <Column color="secondary">Column {i}</Column>
      ))}
    </Grid>
    <Grid color="dark">
      {columns.map(i => (
        <Column color="tertiary">Column {i}</Column>
      ))}
    </Grid>

    <h2>Column Spanning</h2>
    <Grid color="neutral">
      <Column span={2} color="success">
        Column span 2
      </Column>
      <Column span={3} color="info">
        Column span 3
      </Column>
      <Column span={4} color="warning">
        Column span 4
      </Column>
    </Grid>

    <h2>Column Offsetting</h2>
    <Grid color="dark" breakpoint="medium">
      <Column color="primary">Offset None</Column>
      <Column offset={1} color="secondary">
        Offset 1
      </Column>
      <Column offset={2} color="tertiary">
        Offset 2
      </Column>
      <Column offset={3} color="success">
        Offset 3
      </Column>
    </Grid>

    <h2>Column Responsiveness</h2>
    <Grid color="dark">
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
    </Grid>
    <Grid color="neutral" breakpoint="medium">
      <Column spanMd={8} spanLg={6} spanMax={4} color="warning">
        Column
      </Column>
      <Column spanMd={4} spanLg={6} spanMax={8} color="danger">
        Column
      </Column>
    </Grid>

    <h2>Demo</h2>
    <Grid color="dark">
      <Column
        color="primary"
        offsetMin={1}
        offsetSm={2}
        offsetMd={3}
        offsetLg={4}
        offsetMax={5}
        spanMin={5}
        spanSm={4}
        spanMd={3}
        spanLg={2}
        spanMax={1}
      >
        left
      </Column>
      <Column
        color="secondary"
        offsetMin={5}
        offsetSm={4}
        offsetMd={3}
        offsetLg={2}
        offsetMax={1}
        spanMin={1}
        spanSm={2}
        spanMd={3}
        spanLg={4}
        spanMax={5}
      >
        right
      </Column>
    </Grid>
  </>
)

Demo.story = {
  name: 'Grid with State',
}

export default Demo

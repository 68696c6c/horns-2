/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import Grid, { Column } from '.'

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// @TODO demo the remaining props
const Demo = () => (
  <>
    <h1>Grid</h1>
    <p>
      The Grid component arranges its children according to a 12 column layout
      grid. Each Grid is its own row in the layout.
    </p>
    <p>
      The Column component can be used to define column spanning and positioning
      within a Grid.
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

    <h2>Column Start</h2>
    <Grid color="dark" breakpoint="medium">
      <Column color="primary">Default start</Column>
      <Column start={3} color="secondary">
        Start at col 3
      </Column>
      <Column start={5} color="tertiary">
        Start at col 5
      </Column>
      <Column start={7} color="success">
        Start at col 7
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
        startMin={1}
        startSm={2}
        startMd={3}
        startLg={4}
        startMax={5}
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
        startMin={11}
        startSm={10}
        startMd={9}
        startLg={8}
        startMax={7}
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
  name: 'Grid',
}

export default Demo

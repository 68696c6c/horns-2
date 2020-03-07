/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Grid, { Column, DemoColumn } from '.'
import * as Styled from './styles'

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
      <Column span={4} color="info">
        Column span 4
      </Column>
      <Column span={3} color="warning">
        Column span 3
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
        spanMin={1}
        spanSm={2}
        spanMd={4}
        spanLg={6}
        spanMax={8}
        color="success"
      >
        Column
      </Column>
      <Column
        spanMin={11}
        spanSm={10}
        spanMd={8}
        spanLg={6}
        spanMax={4}
        color="info"
      >
        Column
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
        spanMin={5}
        spanSm={4}
        spanMd={3}
        spanLg={2}
        spanMax={1}
        offsetMin={1}
        offsetSm={2}
        offsetMd={3}
        offsetLg={4}
        offsetMax={5}
      >
        left
      </Column>
      <Column
        color="secondary"
        spanMin={1}
        spanSm={2}
        spanMd={3}
        spanLg={4}
        spanMax={5}
        offsetMin={5}
        offsetSm={4}
        offsetMd={3}
        offsetLg={2}
        offsetMax={1}
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

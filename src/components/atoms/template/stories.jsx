/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { makeIntArray } from '_story'

import Grid, { Area, Areas, Column, Columns, Halves, Thirds } from '.'

// @TODO demo the remaining props
const Demo = () => (
  <>
    <h1>Grid</h1>
    <p>
      The <em>Grid</em> component arranges its children according to a specified
      template.
    </p>
    <Grid color="dark" marginY="medium">
      <Area color="primary">Area 1</Area>
      <Area color="secondary">Area 2</Area>
      <Area color="tertiary">Area 3</Area>
    </Grid>

    <h2>Default Grid</h2>
    <p>
      By default, the <em>Grid</em> component arranges its children according to
      a 12 column layout grid. Each Grid is its own row in the layout.
    </p>
    <p>
      The Column component can be used to define column spanning and positioning
      within a Grid.
    </p>

    <Grid color="dark">
      {makeIntArray(12).map(i => (
        <Column color="primary">Column {i}</Column>
      ))}
    </Grid>
    <Grid color="dark">
      {makeIntArray(12).map(i => (
        <Column color="secondary">Column {i}</Column>
      ))}
    </Grid>
    <Grid color="dark">
      {makeIntArray(12).map(i => (
        <Column color="tertiary">Column {i}</Column>
      ))}
    </Grid>

    <h3>Column Spanning</h3>
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

    <h3>Column Start</h3>
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

    <h3>Column Responsiveness</h3>
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

    <h3>Demo</h3>
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

    <hr />

    <h2>Columns</h2>
    <Columns color="dark" gapped>
      <Area color="primary">Area 1</Area>
      <Area color="secondary">Area 2</Area>
      <Area color="tertiary">Area 3</Area>
      <Area color="success">Area 4</Area>
      <Area color="info">Area 5</Area>
      <Area color="warning">Area 6</Area>
      <Area color="danger">Area 7</Area>
    </Columns>

    <hr />

    <h2>Halves</h2>
    <Halves color="neutral" marginY="medium">
      <Area color="info">Area 1</Area>
      <Area color="warning">Area 2</Area>
    </Halves>
    <Halves color="neutral" marginY="medium" fluid>
      <Area color="danger">Fluid Area 1</Area>
      <Area color="primary">Fluid Area 2</Area>
    </Halves>

    <hr />

    <h2>Thirds</h2>
    <Thirds color="dark" marginY="medium">
      <Area color="secondary">Area 1</Area>
      <Area color="tertiary">Area 2</Area>
    </Thirds>
    <Thirds color="neutral" marginY="medium" reversed>
      <Area color="success">Area 1</Area>
      <Area color="info">Area 2</Area>
    </Thirds>

    <Thirds color="dark" marginY="medium" fluid>
      <Area color="warning">Area 1</Area>
      <Area color="danger">Area 2</Area>
    </Thirds>
    <Thirds color="neutral" marginY="medium" reversed fluid>
      <Area color="primary">Area 1</Area>
      <Area color="secondary">Area 2</Area>
    </Thirds>

    <hr />

    <h2>Areas</h2>
    <Areas color="dark" areas="'a b b c' 'a d e f' 'g g g g'" gapped>
      <Area color="success" area="a">
        Area A
      </Area>
      <Area color="info" area="b">
        Area B
      </Area>
      <Area color="warning" area="c">
        Area C
      </Area>
      <Area color="danger" area="d">
        Area D
      </Area>
      <Area color="primary" area="e">
        Area E
      </Area>
      <Area color="secondary" area="f">
        Area F
      </Area>
      <Area color="tertiary" area="g">
        Area G
      </Area>
    </Areas>
  </>
)

Demo.story = {
  name: 'Template',
}

export default Demo

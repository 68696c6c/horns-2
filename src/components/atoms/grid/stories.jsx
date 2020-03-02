/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Grid, { Area, Areas, Halves, Thirds } from '.'

// @TODO demo the remaining props
const Demo = () => (
  <>
    <h1>Grid</h1>
    <p>
      The Grid component arranges its children according to a specified
      template.
    </p>
    <Grid color="dark">
      <Area color="primary">Area 1</Area>
      <Area color="secondary">Area 2</Area>
      <Area color="tertiary">Area 3</Area>
      <Area color="success">Area 4</Area>
    </Grid>

    <h2>Halves</h2>
    <Grid color="neutral" variant="halves">
      <Area color="info">Area 1</Area>
      <Area color="warning">Area 2</Area>
    </Grid>

    <h2>Thirds</h2>
    <Grid color="dark" variant="thirds" margin="medium">
      <Area color="danger">Area 1</Area>
      <Area color="primary">Area 2</Area>
    </Grid>
    <Grid color="neutral" variant="thirds" smallSide="right" margin="medium">
      <Area color="secondary">Area 1</Area>
      <Area color="tertiary">Area 2</Area>
    </Grid>

    <h2>Areas</h2>
    <Grid
      color="dark"
      variant="areas"
      areas="'a b b c' 'a d e f' 'g g g g'"
      gapped
    >
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
    </Grid>
  </>
)

Demo.story = {
  name: 'Grid',
}

export default Demo

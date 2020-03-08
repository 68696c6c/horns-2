/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/anchor-is-valid */
import React from 'react'

import { colors } from 'config'

import Template, { Area, Areas, Halves, Thirds } from '.'

// @TODO demo the remaining props
const Demo = () => (
  <>
    <h1>Template</h1>
    <p>
      The Template component arranges its children according to a specified
      template.
    </p>
    <Template color="dark" marginY="medium">
      <Area color="primary">Area 1</Area>
      <Area color="secondary">Area 2</Area>
      <Area color="tertiary">Area 3</Area>
    </Template>
    <Template color="dark" marginY="medium" fluid>
      <Area color="success">Area 1</Area>
      <Area color="info">Area 2</Area>
      <Area color="warning">Area 3</Area>
      <Area color="danger">Area 4</Area>
    </Template>

    <h2>Halves</h2>
    <Template color="neutral" variant="halves" marginY="medium">
      <Area color="info">Area 1</Area>
      <Area color="warning">Area 2</Area>
    </Template>
    <Template color="neutral" variant="halves" marginY="medium" fluid>
      <Area color="danger">Area 1</Area>
      <Area color="primary">Area 2</Area>
    </Template>

    <h2>Thirds</h2>
    <Template color="dark" variant="thirds" marginY="medium">
      <Area color="secondary">Area 1</Area>
      <Area color="tertiary">Area 2</Area>
    </Template>
    <Template color="neutral" variant="thirds" marginY="medium" reversed>
      <Area color="success">Area 1</Area>
      <Area color="info">Area 2</Area>
    </Template>

    <Template color="dark" variant="thirds" marginY="medium" fluid>
      <Area color="warning">Area 1</Area>
      <Area color="danger">Area 2</Area>
    </Template>
    <Template color="neutral" variant="thirds" marginY="medium" reversed fluid>
      <Area color="primary">Area 1</Area>
      <Area color="secondary">Area 2</Area>
    </Template>

    <h2>Areas</h2>
    <Template
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
    </Template>
  </>
)

Demo.story = {
  name: 'Template',
}

export default Demo

/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import Area from '../area'
import Stack from '.'

const Demo = () => (
  <>
    <h1>Stack</h1>
    <p>
      The <em>Stack</em> component arranges its children into a vertical stack.
    </p>

    <Stack color="dark" gapped>
      <Area color="primary">Area 1</Area>
      <Area color="secondary">Area 2</Area>
      <Area color="tertiary">Area 3</Area>
      <Area color="success">Area 4</Area>
      <Area color="info">Area 5</Area>
      <Area color="warning">Area 6</Area>
      <Area color="danger">Area 7</Area>
    </Stack>
  </>
)

Demo.story = {
  name: 'Stack',
}

export default Demo

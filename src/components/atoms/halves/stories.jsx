/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import Area from '../area'
import Halves from '.'

const Demo = () => (
  <>
    <h1>Halves</h1>
    <p>
      The <em>Halves</em> component arranges its children into two equally-sized
      side-by-side content areas. The way that the <em>Halves</em> centers its
      content is different from the <em>Grid</em> or <em>Columns</em>{' '}
      components. Instead of applying container padding to itself,{' '}
      <em>Halves</em> will apply left padding to the left half and right padding
      to the right half. This confines the content to the content area, but also
      allows the halves to have different colors or background images that
      extend into the gutters.
    </p>

    <Halves color="neutral" marginY="medium">
      <Area color="info">Area 1</Area>
      <Area color="warning">Area 2</Area>
    </Halves>
    <Halves color="neutral" marginY="medium" fluid>
      <Area color="danger">Fluid Area 1</Area>
      <Area color="primary">Fluid Area 2</Area>
    </Halves>
  </>
)

Demo.story = {
  name: 'Halves',
}

export default Demo

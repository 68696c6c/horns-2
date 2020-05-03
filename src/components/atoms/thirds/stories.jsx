/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import Area from '../area'
import Thirds from '.'

const Demo = () => (
  <>
    <h1>Thirds</h1>
    <p>
      The <em>Thirds</em> component arranges its children into two
      unevenly-sized side-by-side content areas, with one side occupying
      two-thirds of the width. The way that the <em>Thirds</em> centers its
      content is different from the <em>Grid</em> or <em>Columns</em>{' '}
      components. Instead of applying container padding to itself,{' '}
      <em>Thirds</em> will apply left padding to the left child and right
      padding to the right child. This confines the content to the content area,
      but also allows the halves to have different colors or background images
      that extend into the gutters.
    </p>

    <Thirds color="dark" marginY="medium">
      <Area color="secondary">Area 1</Area>
      <Area color="tertiary">Area 2</Area>
    </Thirds>
    <Thirds color="neutral" marginY="medium" fluid>
      <Area color="warning">Area 1</Area>
      <Area color="danger">Area 2</Area>
    </Thirds>

    <p>
      By default, <em>Thirds</em> will put the larger content area on the right
      side. When the <code>reversed</code> prop is provided, the larger area
      will be on the left instead.
    </p>

    <Thirds color="dark" marginY="medium" reversed>
      <Area color="success">Area 1</Area>
      <Area color="info">Area 2</Area>
    </Thirds>
    <Thirds color="neutral" marginY="medium" reversed fluid>
      <Area color="primary">Area 1</Area>
      <Area color="secondary">Area 2</Area>
    </Thirds>
  </>
)

Demo.story = {
  name: 'Thirds',
}

export default Demo

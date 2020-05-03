/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { A } from '_story'

const Demo = () => (
  <>
    <h1>Area</h1>
    <p>
      The <em>Area</em> component renders a simple div and accepts an{' '}
      <code>area</code> prop for positioning itself in a <code>grid-area</code>
      of its parent. It is intended to be used with the{' '}
      <A path="areas">Areas</A> component.
    </p>
  </>
)

Demo.story = {
  name: 'Area',
}

export default Demo

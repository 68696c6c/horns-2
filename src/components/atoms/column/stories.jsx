/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import { A } from '_story'

const Demo = () => (
  <>
    <h1>Column</h1>
    <p>
      The <em>Column</em> component is intended to be used with the{' '}
      <A path="columns">Columns</A> or <A path="grid">Grid</A> component to
      create column-based layouts.
    </p>
  </>
)

Demo.story = {
  name: 'Column',
}

export default Demo

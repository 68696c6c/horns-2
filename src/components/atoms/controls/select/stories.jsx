/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import Select, { Multiselect } from '.'

const Demo = () => (
  <>
    <h1>Select</h1>
    <p>
      The <em>Select</em> component applies theming to the HTML{' '}
      <code>select</code> tag.
    </p>
    <Select
      id="select-example"
      name="select_example"
      placeholder="Placeholder"
    />
    <Multiselect
      id="multiselect-example"
      name="multiselect_example"
      placeholder="Placeholder"
    />
  </>
)

Demo.story = {
  name: 'Select',
}

export default Demo

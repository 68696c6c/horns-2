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
    <Story.Grid>
      <div>
        <Story.Label htmlFor="select-example-2">Select: </Story.Label>
        <Select
          id="select-example-2"
          name="select_example"
          placeholder="Placeholder"
        >
          {Story.makeIntArray(10).map(i => (
            <option value={i}>Option {i}</option>
          ))}
        </Select>
      </div>
      <div>
        <Story.Label htmlFor="multiselect-example-2">Multiselect: </Story.Label>
        <Multiselect
          id="multiselect-example-2"
          name="multiselect_example"
          placeholder="Placeholder"
        >
          {Story.makeIntArray(10).map(i => (
            <option value={i}>Option {i}</option>
          ))}
        </Multiselect>
      </div>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'Select',
}

export default Demo

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

    <h2>Options</h2>
    <Story.Grid>
      <div>
        <label htmlFor="select-example-2">Select: </label>
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
        <label htmlFor="multiselect-example-2">Multiselect: </label>
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

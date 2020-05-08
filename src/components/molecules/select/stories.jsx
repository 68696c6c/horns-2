/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import Select, { Multiselect } from '.'

const options = [
  { key: 'One', value: 1 },
  { key: 'Two', value: 2 },
  { key: 'Three', value: 3 },
  { key: 'Four', value: 4 },
]

const Demo = () => (
  <>
    <h1>Select</h1>
    <p>
      The <em>Select</em> component is a fully themed replacement for the HTML <code>select</code> tag.
    </p>
    <Story.Grid>
      <div>
        <Story.Label htmlFor="select-example-2">Select: </Story.Label>
        <Select
          id="select-example-2"
          name="select_example"
          placeholder="Placeholder"
          options={options}
        />
      </div>
      <div>
        <Story.Label htmlFor="multiselect-example-2">Multiselect: </Story.Label>
        <Multiselect
          id="multiselect-example-2"
          name="multiselect_example"
          placeholder="Placeholder"
          options={options}
        />
      </div>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'Select',
}

export default Demo

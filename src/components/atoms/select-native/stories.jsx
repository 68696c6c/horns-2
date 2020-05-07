/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import SelectNative, { MultiselectNative } from '.'

const Demo = () => (
  <>
    <h1>SelectNative</h1>
    <p>
      The <em>Select</em> component applies theming to the HTML{' '}
      <code>select</code> tag. Note that only the input itself is styled, not
      the dropdown or options which retain their default styling provided by the
      user&apos;s OS. The <Story.A path="molecules/select">Select</Story.A>{' '}
      molecule provides styled options and additional behavior and should be
      preferred over this atom in most cases.
    </p>
    <Story.Grid>
      <div>
        <Story.Label htmlFor="select-example-2">Select: </Story.Label>
        <SelectNative
          id="select-example-2"
          name="select_example"
          placeholder="Placeholder"
        >
          {Story.makeIntArray(10).map(i => (
            <option value={i}>Option {i}</option>
          ))}
        </SelectNative>
      </div>
      <div>
        <Story.Label htmlFor="multiselect-example-2">Multiselect: </Story.Label>
        <MultiselectNative
          id="multiselect-example-2"
          name="multiselect_example"
          placeholder="Placeholder"
        >
          {Story.makeIntArray(10).map(i => (
            <option value={i}>Option {i}</option>
          ))}
        </MultiselectNative>
      </div>
    </Story.Grid>
  </>
)

Demo.story = {
  name: 'SelectNative',
}

export default Demo

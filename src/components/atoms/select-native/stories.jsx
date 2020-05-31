/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import SelectNative from '.'

const Demo = () => (
  <>
    <h1>SelectNative</h1>
    <p>
      The <em>SelectNative</em> component applies theming to the HTML{' '}
      <code>select</code> tag. Note that only the input itself is styled, not
      the dropdown or options which retain their default styling provided by the
      user&apos;s OS. The <Story.A path="molecules/select">Select</Story.A>{' '}
      molecule provides styled options and additional behavior and should be
      preferred over this atom in most cases.
    </p>
    <div>
      <Story.Label htmlFor="select-example-2">Select: </Story.Label>
      <SelectNative
        id="select-example-1"
        name="select_example_1"
        placeholder="Placeholder"
      >
        {Story.makeIntArray(10).map(i => (
          <option value={i}>Option {i}</option>
        ))}
      </SelectNative>
    </div>

    <h2>Multiple Prop</h2>
    <p>
      When the <em>multiple</em> works exactly like the native HTML attribute,
      turning the <em>SelectNative</em> component into a multiselect.
    </p>
    <div>
      <Story.Label htmlFor="multiselect-example-2">Multiselect: </Story.Label>
      <SelectNative
        id="select-example-2"
        name="select_example_2"
        placeholder="Placeholder"
        multiple
      >
        {Story.makeIntArray(10).map(i => (
          <option value={i}>Option {i}</option>
        ))}
      </SelectNative>
    </div>
  </>
)

Demo.story = {
  name: 'SelectNative',
}

export default Demo

/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as Story from '_story'

import MultiselectNative from '.'

const Demo = () => (
  <>
    <h1>MultiselectNative</h1>
    <p>
      The <em>MultiselectNative</em> component applies theming to the HTML{' '}
      <code>{`<select multiple>`}</code> tag. Note that only the input itself is
      styled, not the dropdown or options which retain their default styling
      provided by the user&apos;s OS. The{' '}
      <Story.A path="molecules/multiselect">Multiselect</Story.A> molecule
      provides styled options and additional behavior and should be preferred
      over this atom in most cases.
    </p>
    <p>
      The <em>MultiselectNative</em> component is the same as the{' '}
      <Story.A path="atoms/select-native">
        <em>SelectNative</em>
      </Story.A>{' '}
      component with the <em>multiple</em> prop set to true.
    </p>
    <Story.Grid>
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
  name: 'MultiselectNative',
}

export default Demo
